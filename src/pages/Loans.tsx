import React, { useState } from 'react';
import { useLibrary } from '../store/LibraryContext';
import { useAuth } from '../store/AuthContext';
import { Clock, CheckCircle2, AlertCircle, X, ChevronLeft, ChevronRight, MessageSquare, Star, Send } from 'lucide-react';
import type { Book } from '../types';
import { StarRating } from '../components/StarRating';

export const Loans: React.FC = () => {
  const { loans, books, returnBook, addReview } = useLibrary();
  const { user } = useAuth();
  
  const [readingBook, setReadingBook] = useState<Book | null>(null);
  const [commentingBook, setCommentingBook] = useState<Book | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  
  const [rating, setRating] = useState(5);
  const [commentText, setCommentText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isStaff = user?.role === 'Admin' || user?.role === 'Librarian';
  
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !commentingBook || !commentText.trim()) return;

    setIsSubmitting(true);
    await addReview({
      bookId: commentingBook.id,
      userId: user.id,
      userName: user.name,
      rating,
      comment: commentText.trim()
    });
    
    setCommentText('');
    setRating(5);
    setCommentingBook(null);
    setIsSubmitting(false);
    alert('Ulasan Anda telah disimpan!');
  };
  
  const displayLoans = isStaff ? loans : loans.filter(l => l.userId === user?.id);

  const activeLoans = displayLoans.filter(l => l.status === 'Active');
  const pastLoans = displayLoans.filter(l => l.status === 'Returned');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{isStaff ? 'Manajemen Peminjaman' : 'Riwayat Peminjaman Anda'}</h1>
        <p className="text-gray-600">Pantau status buku yang sedang dipinjam dan riwayat sebelumnya.</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Sedang Dipinjam</h2>
          {activeLoans.length === 0 ? (
            <p className="text-gray-500 italic p-4 bg-white rounded-xl border border-gray-100">Tidak ada peminjaman aktif saat ini.</p>
          ) : (
            activeLoans.map(loan => {
               const book = books.find(b => b.id === loan.bookId);
               if (!book) return null;
               const isOverdue = loan.status === 'Active' && new Date(loan.dueDate) < new Date();
               
               return (
                 <div key={loan.id} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-col sm:flex-row gap-4 mb-4">
                   <img src={book.coverImage} alt={book.title} className="w-24 h-32 object-cover rounded-lg bg-gray-100" />
                   <div className="flex-1 flex flex-col justify-between">
                     <div>
                       <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div>
                             <span className="text-xs font-semibold text-primary-600 mb-1 block">{book.category}</span>
                             <h3 className="font-bold text-gray-900 leading-tight">{book.title}</h3>
                             <p className="text-sm text-gray-500 mb-1">{book.author}</p>
                             <div className="mb-2"><StarRating rating={book.rating} /></div>
                             {book.description && (
                               <p className="text-xs text-gray-600 line-clamp-2 mt-2 bg-gray-50 p-2 rounded italic">
                                 {book.description}
                               </p>
                             )}
                          </div>
                          {loan.status === 'Returned' ? (
                             <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium self-start whitespace-nowrap">
                               <CheckCircle2 className="w-3 h-3" /> Dikembalikan
                             </span>
                          ) : isOverdue ? (
                             <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 border border-red-100 px-3 py-1 rounded-full text-xs font-medium self-start whitespace-nowrap">
                               <AlertCircle className="w-3 h-3" /> Terlambat
                             </span>
                          ) : (
                             <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full text-xs font-medium self-start whitespace-nowrap">
                               <Clock className="w-3 h-3" /> Dipinjam
                             </span>
                          )}
                       </div>
                       {isStaff && (
                         <div className="text-sm text-gray-500 mt-2">
                            Peminjam: <span className="font-medium text-gray-900">{loan.userName || 'Anonim'}</span>
                            <span className="ml-2 text-xs text-gray-400">ID: {loan.userId}</span>
                         </div>
                       )}
                       <div className="text-sm text-gray-500 mt-1">
                         <p>Tgl Pinjam: {new Date(loan.loanDate).toLocaleDateString('id-ID')}</p>
                         <p className={isOverdue ? "text-red-600 font-medium" : ""}>Jatuh Tempo: {new Date(loan.dueDate).toLocaleDateString('id-ID')}</p>
                       </div>
                     </div>
                     
                       <div className="mt-4 flex flex-wrap gap-2">
                         {loan.status === 'Active' && book.isDigital && !isStaff && (
                           <button 
                             onClick={() => {
                               setReadingBook(book);
                               setCurrentPage(0);
                             }}
                             className="bg-primary-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-primary-700 transition-colors shadow-sm flex items-center justify-center gap-2"
                           >
                             📖 Baca E-Book
                           </button>
                         )}
                         {!isStaff && (
                           <button 
                             onClick={() => setCommentingBook(book)}
                             className="bg-white text-gray-700 border border-gray-200 px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center gap-2"
                           >
                             <MessageSquare className="w-4 h-4" /> Beri Komentar
                           </button>
                         )}
                         {loan.status === 'Active' && isStaff && (
                         <button 
                           onClick={() => returnBook(loan.id)}
                           className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition"
                         >
                           Verifikasi Pengembalian
                         </button>
                       )}
                     </div>
                   </div>
                 </div>
               );
            })
          )}
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Riwayat Selesai</h2>
          {pastLoans.length === 0 ? (
            <p className="text-gray-500 italic p-4 bg-white rounded-xl border border-gray-100">Belum ada riwayat pengembalian.</p>
          ) : (
            pastLoans.map(loan => {
               const book = books.find(b => b.id === loan.bookId);
               if (!book) return null;
               
               return (
                 <div key={loan.id} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-col sm:flex-row gap-4 mb-4 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
                   <img src={book.coverImage} alt={book.title} className="w-24 h-32 object-cover rounded-lg bg-gray-100" />
                   <div className="flex-1 flex flex-col justify-between">
                     <div>
                       <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div>
                             <span className="text-xs font-semibold text-primary-600 mb-1 block">{book.category}</span>
                             <h3 className="font-bold text-gray-900 leading-tight">{book.title}</h3>
                             <p className="text-sm text-gray-500 mb-1">{book.author}</p>
                             <div className="mb-2"><StarRating rating={book.rating} /></div>
                             {book.description && (
                               <p className="text-xs text-gray-500 line-clamp-2 mt-2 italic opacity-80">
                                 {book.description}
                               </p>
                             )}
                          </div>
                          <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium self-start whitespace-nowrap">
                             <CheckCircle2 className="w-3 h-3" /> Dikembalikan
                          </span>
                       </div>
                       {isStaff && (
                         <div className="text-sm text-gray-500 mt-2">
                            Peminjam: <span className="font-medium text-gray-900">{loan.userName || 'Anonim'}</span>
                            <span className="ml-2 text-xs text-gray-400">ID: {loan.userId}</span>
                         </div>
                       )}
                       <div className="text-sm text-gray-500 mt-1">
                         <p>Tgl Pinjam: {new Date(loan.loanDate).toLocaleDateString('id-ID')}</p>
                         <p>Tgl Kembali: {new Date(loan.returnDate!).toLocaleDateString('id-ID')}</p>
                       </div>
                     </div>
                     {!isStaff && (
                       <div className="mt-4 sm:mt-0 self-end">
                         <button 
                           onClick={() => setCommentingBook(book)}
                           className="bg-white text-gray-700 border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center gap-2"
                         >
                           <MessageSquare className="w-4 h-4" /> Beri Komentar
                         </button>
                       </div>
                     )}
                   </div>
                 </div>
               );
            })
          )}
        </div>
      </div>

      {/* Reader Modal */}
      {readingBook && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm">
          <div className="bg-white w-full max-w-3xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative">
            <div className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0 z-10">
              <h3 className="font-bold text-gray-900 truncate pr-4">{readingBook.title}</h3>
              <button 
                onClick={() => setReadingBook(null)}
                className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 md:p-12 relative bg-[#faf9f6]">
              {(() => {
                const bookContent = readingBook.content 
                  ? readingBook.content.split('\n\n').filter(p => p.trim() !== '')
                  : ["Buku ini belum memiliki konten digital yang dapat dibaca."];
                
                const showPage = bookContent[currentPage];
                return (
                  <div className="max-w-xl mx-auto">
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-serif whitespace-pre-wrap">
                      {showPage}
                    </p>
                  </div>
                );
              })()}
            </div>

            <div className="h-16 bg-white border-t border-gray-100 flex items-center justify-between px-6 shrink-0">
               <button 
                  disabled={currentPage === 0}
                  onClick={() => setCurrentPage(p => p - 1)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg disabled:opacity-50 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Sebelumnya
                </button>
                <span className="text-sm font-medium text-gray-500">
                  Halaman {currentPage + 1} dari {readingBook.content ? readingBook.content.split('\n\n').filter(p => p.trim() !== '').length : 1}
                </span>
                <button 
                  disabled={!readingBook.content || currentPage === readingBook.content.split('\n\n').filter(p => p.trim() !== '').length - 1}
                  onClick={() => setCurrentPage(p => p + 1)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg disabled:opacity-50 transition-colors"
                >
                  Selanjutnya <ChevronRight className="w-4 h-4" />
                </button>
            </div>
          </div>
        </div>
      )}

      {/* Comment Modal */}
      {commentingBook && (
        <div className="fixed inset-0 z-[110] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary-600" />
                Beri Komentar
              </h3>
              <button 
                onClick={() => setCommentingBook(null)}
                className="p-1 text-gray-400 hover:text-gray-900 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleReviewSubmit} className="p-6 space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <img src={commentingBook.coverImage} alt="" className="w-12 h-16 object-cover rounded shadow-sm" />
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">{commentingBook.title}</p>
                  <p className="text-xs text-gray-500">{commentingBook.author}</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
                    >
                      <Star 
                        className={`w-8 h-8 ${star <= rating ? 'fill-accent-500 text-accent-500' : 'text-gray-200'}`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Komentar Anda</label>
                <textarea
                  required
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Apa pendapat Anda tentang buku ini?"
                  className="w-full rounded-xl border-gray-200 text-sm focus:ring-primary-500 focus:border-primary-500 min-h-[100px] bg-gray-50/50"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setCommentingBook(null)}
                  className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-bold hover:bg-primary-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Mengirim...' : 'Kirim'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
