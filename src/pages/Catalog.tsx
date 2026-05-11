import React, { useState, useMemo } from 'react';
import { useLibrary } from '../store/LibraryContext';
import { Search, Filter, BookOpen, Heart, BookmarkPlus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Category, Book } from '../types';
import { useAuth } from '../store/AuthContext';
import { StarRating } from '../components/StarRating';

const KATEGORI: Category[] = ['Fiksi', 'Non-Fiksi', 'Teknologi', 'Sejarah', 'Sains', 'Sastra'];

export const Catalog: React.FC = () => {
  const { searchBooks, toggleFavorite, favorites, borrowBook, loading } = useLibrary();
  const { user } = useAuth();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const filteredBooks = useMemo(() => {
    return searchBooks(query, category);
  }, [query, category, searchBooks]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const handleBorrow = async (bookId: string) => {
    if (!user) return;
    const success = await borrowBook(bookId, user);
    if (success) {
      alert('Buku berhasil dipinjam/direservasi!');
      setSelectedBook(null);
    } else {
      alert('Maaf, buku ini sedang tidak tersedia.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Katalog Buku</h1>
          <p className="text-gray-600">Jelajahi dan temukan buku favorit Anda.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Cari buku..."
              className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-full sm:w-64"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer text-gray-700"
          >
            <option value="">Semua Kategori</option>
            {KATEGORI.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
      </div>

      {filteredBooks.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl text-center border border-gray-100 flex flex-col items-center justify-center">
          <BookOpen className="w-16 h-16 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">Tidak ada buku ditemukan</h3>
          <p className="text-gray-500">Coba ubah kata kunci atau kategori pencarian Anda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <AnimatePresence>
            {filteredBooks.map((book) => (
              <motion.div 
                key={book.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => setSelectedBook(book)}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col relative group cursor-pointer"
              >
                <div className="aspect-[3/4] relative bg-gray-100 overflow-hidden">
                  <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button 
                    onClick={async (e) => {
                      e.stopPropagation();
                      if (user) await toggleFavorite(book.id, user.id);
                    }}
                    className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(book.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-bold bg-primary-600/80 px-3 py-1.5 rounded-full backdrop-blur-sm">Lihat Detail</span>
                  </div>
                  {book.isDigital && (
                    <span className="absolute top-3 left-3 bg-primary-600 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">
                        E-Book
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-primary-600 mb-1">{book.category}</span>
                  <h3 className="font-bold text-gray-900 line-clamp-2 leading-tight mb-1" title={book.title}>{book.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{book.author}</p>
                  <div className="mb-3">
                    <StarRating rating={book.rating} />
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Tersedia: <span className={`font-semibold ${book.availableCopies > 0 ? 'text-green-600' : 'text-red-500'}`}>{book.availableCopies}</span>/{book.totalCopies}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBorrow(book.id);
                      }}
                      disabled={book.availableCopies === 0}
                      className="p-2 ml-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-primary-50 disabled:hover:text-primary-600"
                      title="Pinjam Buku"
                    >
                      <BookmarkPlus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Book Detail Modal */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-gray-400 hover:text-gray-900 shadow-sm transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-2/5 bg-gray-100 flex items-center justify-center p-8">
                 <img 
                  src={selectedBook.coverImage} 
                  alt={selectedBook.title} 
                  className="w-full max-w-[200px] rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                 />
              </div>

              <div className="md:w-3/5 p-6 md:p-8 flex flex-col h-full">
                <div className="mb-4">
                  <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {selectedBook.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mt-2 leading-tight">{selectedBook.title}</h2>
                  <p className="text-gray-500">oleh <span className="font-medium">{selectedBook.author}</span></p>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <StarRating rating={selectedBook.rating} />
                  <span className="text-sm text-gray-300">|</span>
                  <span className={`text-sm font-bold ${selectedBook.availableCopies > 0 ? 'text-green-600' : 'text-red-500'}`}>
                    {selectedBook.availableCopies > 0 ? `${selectedBook.availableCopies} Tersedia` : 'Stok Habis'}
                  </span>
                </div>

                <div className="flex-1 space-y-4 mb-8 overflow-y-auto max-h-[250px] pr-2">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3" /> Deskripsi Buku
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed italic bg-gray-50 p-4 rounded-xl border-l-4 border-primary-500">
                      {selectedBook.description || "Buku ini merupakan salah satu koleksi berharga kami. Deskripsi terperinci sedang disiapkan oleh staf perpustakaan kami untuk memberikan gambaran terbaik tentang bacaan ini."}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={() => handleBorrow(selectedBook.id)}
                    disabled={selectedBook.availableCopies === 0}
                    className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition shadow-lg shadow-primary-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {selectedBook.availableCopies > 0 ? 'Pinjam Sekarang' : 'Tidak Tersedia'}
                  </button>
                  <button
                    onClick={async () => {
                      if (user) await toggleFavorite(selectedBook.id, user.id);
                      setSelectedBook(null);
                    }}
                    className={`p-3 rounded-xl border transition ${
                      favorites.includes(selectedBook.id) 
                        ? 'bg-red-50 border-red-200 text-red-500' 
                        : 'border-gray-200 text-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${favorites.includes(selectedBook.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
