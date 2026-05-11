import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Book, Loan, BookReview } from '../types';
import { supabase } from '../lib/supabase';

interface LibraryContextType {
  books: Book[];
  loans: Loan[];
  searchBooks: (query: string, category?: string) => Book[];
  borrowBook: (bookId: string, user: { id: string, name: string, email: string }) => Promise<boolean>;
  returnBook: (loanId: string) => Promise<void>;
  favorites: string[];
  toggleFavorite: (bookId: string, userId: string) => Promise<void>;
  addBook: (book: Omit<Book, 'id'>) => Promise<void>;
  deleteBook: (bookId: string) => Promise<void>;
  updateBook: (bookId: string, bookData: Partial<Book>) => Promise<void>;
  reviews: BookReview[];
  addReview: (review: Omit<BookReview, 'id' | 'date'>) => Promise<void>;
  loading: boolean;
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export const LibraryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loans, setLoans] = useState<Loan[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [reviews, setReviews] = useState<BookReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const [booksRes, loansRes, reviewsRes] = await Promise.all([
        supabase.from('books').select('*').order('title'),
        supabase.from('loans').select('*').order('loanDate', { ascending: false }),
        supabase.from('reviews').select('*').order('date', { ascending: false })
      ]);

      if (booksRes.data) setBooks(booksRes.data);
      if (loansRes.data) setLoans(loansRes.data);
      if (reviewsRes.data) setReviews(reviewsRes.data);

      // Favorites are user-specific, usually handled per-user
      // But we can fetch them if we have a logged-in user
      const savedUser = localStorage.getItem('pustaka_user');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        const { data: favs } = await supabase.from('favorites').select('bookId').eq('userId', user.id);
        if (favs) setFavorites(favs.map(f => f.bookId));
      }
    } catch (error) {
      console.error('Error fetching library data:', error);
    } finally {
      setLoading(false);
    }
  };

  const searchBooks = (query: string, category?: string) => {
    return books.filter(b => {
      const matchQuery = (b.title.toLowerCase().includes(query.toLowerCase()) || 
                          b.author.toLowerCase().includes(query.toLowerCase()) ||
                          b.isbn.includes(query));
      const matchCategory = category ? b.category === category : true;
      return matchQuery && matchCategory;
    });
  };

  const borrowBook = async (bookId: string, borrower: { id: string, name: string, email: string }) => {
    const bookIndex = books.findIndex(b => b.id === bookId);
    if (bookIndex >= 0 && books[bookIndex].availableCopies > 0) {
      try {
        const book = books[bookIndex];
        const newAvailableCopies = book.availableCopies - 1;

        // Update book available copies
        const { error: bookError } = await supabase
          .from('books')
          .update({ availableCopies: newAvailableCopies })
          .eq('id', bookId);

        if (bookError) throw bookError;

        const newLoan: Omit<Loan, 'id'> = {
          bookId,
          userId: borrower.id,
          userName: borrower.name,
          userEmail: borrower.email,
          loanDate: new Date().toISOString(),
          dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
          status: 'Active',
          isDigital: book.isDigital
        };

        const { data: createdLoan, error: loanError } = await supabase
          .from('loans')
          .insert([newLoan])
          .select()
          .single();

        if (loanError) throw loanError;

        setBooks(prev => prev.map(b => b.id === bookId ? { ...b, availableCopies: newAvailableCopies } : b));
        if (createdLoan) setLoans(prev => [createdLoan as Loan, ...prev]);
        
        return true;
      } catch (error) {
        console.error('Borrow book error:', error);
        return false;
      }
    }
    return false;
  };

  const returnBook = async (loanId: string) => {
    const loan = loans.find(l => l.id === loanId);
    if (!loan) return;

    try {
      const { error: loanError } = await supabase
        .from('loans')
        .update({ status: 'Returned', returnDate: new Date().toISOString() })
        .eq('id', loanId);

      if (loanError) throw loanError;

      const book = books.find(b => b.id === loan.bookId);
      if (book) {
        const newAvailableCopies = book.availableCopies + 1;
        await supabase
          .from('books')
          .update({ availableCopies: newAvailableCopies })
          .eq('id', book.id);
        
        setBooks(prev => prev.map(b => b.id === book.id ? { ...b, availableCopies: newAvailableCopies } : b));
      }

      setLoans(prev => prev.map(l => l.id === loanId ? { ...l, status: 'Returned', returnDate: new Date().toISOString() } : l));
    } catch (error) {
      console.error('Return book error:', error);
    }
  };

  const toggleFavorite = async (bookId: string, userId: string) => {
    const isFav = favorites.includes(bookId);
    try {
      if (isFav) {
        await supabase.from('favorites').delete().eq('userId', userId).eq('bookId', bookId);
        setFavorites(prev => prev.filter(id => id !== bookId));
      } else {
        await supabase.from('favorites').insert([{ userId, bookId }]);
        setFavorites(prev => [...prev, bookId]);
      }
    } catch (error) {
      console.error('Toggle favorite error:', error);
    }
  };

  const addBook = async (bookData: Omit<Book, 'id'>) => {
    try {
      const { data, error } = await supabase.from('books').insert([bookData]).select().single();
      if (error) throw error;
      if (data) setBooks(prev => [...prev, data as Book]);
    } catch (error) {
      console.error('Add book error:', error);
    }
  };

  const deleteBook = async (bookId: string) => {
    try {
      const { error } = await supabase.from('books').delete().eq('id', bookId);
      if (error) throw error;
      setBooks(prev => prev.filter(b => b.id !== bookId));
    } catch (error) {
      console.error('Delete book error:', error);
    }
  };

  const updateBook = async (bookId: string, bookData: Partial<Book>) => {
    try {
      const { error } = await supabase.from('books').update(bookData).eq('id', bookId);
      if (error) throw error;
      setBooks(prev => prev.map(b => b.id === bookId ? { ...b, ...bookData } : b));
    } catch (error) {
      console.error('Update book error:', error);
    }
  };

  const addReview = async (reviewData: Omit<BookReview, 'id' | 'date'>) => {
    try {
      const newReview = {
        ...reviewData,
        date: new Date().toISOString()
      };
      const { data, error } = await supabase.from('reviews').insert([newReview]).select().single();
      if (error) throw error;
      if (data) setReviews(prev => [data as BookReview, ...prev]);
    } catch (error) {
      console.error('Add review error:', error);
    }
  };

  return (
    <LibraryContext.Provider value={{ books, loans, searchBooks, borrowBook, returnBook, favorites, toggleFavorite, addBook, deleteBook, updateBook, reviews, addReview, loading }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (context === undefined) throw new Error('useLibrary must be used within LibraryProvider');
  return context;
};
