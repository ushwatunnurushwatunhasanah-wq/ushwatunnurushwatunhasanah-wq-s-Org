export type Role = 'Admin' | 'Librarian' | 'User';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export type Category = 'Fiksi' | 'Non-Fiksi' | 'Teknologi' | 'Sejarah' | 'Sains' | 'Sastra' | 'Misteri' | 'Anak' | 'Pengembangan Diri' | 'Bisnis';

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  coverImage: string;
  category: Category;
  description: string;
  publisher: string;
  publishedYear: number;
  totalCopies: number;
  availableCopies: number;
  isDigital: boolean;
  pages: number;
  rating: number;
  content?: string;
}

export type LoanStatus = 'Active' | 'Returned' | 'Overdue';

export interface Loan {
  id: string;
  bookId: string;
  userId: string;
  userName?: string;
  userEmail?: string;
  loanDate: string;
  dueDate: string;
  returnDate?: string;
  status: LoanStatus;
  isDigital: boolean;
  description?: string;
}

export interface BookReview {
  id: string;
  bookId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
