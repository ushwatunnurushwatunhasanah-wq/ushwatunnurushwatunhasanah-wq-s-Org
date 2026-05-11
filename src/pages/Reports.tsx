import React, { useState } from 'react';
import { useLibrary } from '../store/LibraryContext';
import { useAuth } from '../store/AuthContext';
import { Star, MessageSquare, Send, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarRating } from '../components/StarRating';

export function Reports() {
  const { books, reviews, addReview } = useLibrary();
  const { user } = useAuth();
  const [selectedBookId, setSelectedBookId] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !selectedBookId || !comment.trim()) return;

    setIsSubmitting(true);
    await addReview({
      bookId: selectedBookId,
      userId: user.id,
      userName: user.name,
      rating,
      comment: comment.trim()
    });
    setComment('');
    setRating(5);
    setIsSubmitting(false);
    alert('Komentar berhasil ditambahkan!');
  };

  const selectedBook = books.find(b => b.id === selectedBookId);
  const bookReviews = reviews.filter(r => r.bookId === selectedBookId);
  const isAdmin = user?.role === 'Admin' || user?.role === 'Librarian';

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Laporan & Komentar Buku</h1>
        <p className="text-gray-600">Berikan ulasan dan lihat pendapat anggota lain tentang koleksi buku kami.</p>
      </div>

      {isAdmin && reviews.length > 0 && (
        <div className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary-600" />
            Semua Komentar Terbaru (Admin View)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.slice(0, 6).map((review) => {
              const book = books.find(b => b.id === review.bookId);
              return (
                <div key={review.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <img src={book?.coverImage} alt="" className="w-8 h-10 object-cover rounded" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold truncate">{book?.title}</p>
                      <p className="text-[10px] text-gray-500">Oleh: {review.userName}</p>
                    </div>
                  </div>
                  <div className="mb-2"><StarRating rating={review.rating} size="sm" /></div>
                  <p className="text-xs text-gray-600 italic line-clamp-3">"{review.comment}"</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-primary-600" />
              Tulis Komentar
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pilih Buku</label>
                <select 
                  value={selectedBookId}
                  onChange={(e) => setSelectedBookId(e.target.value)}
                  className="w-full rounded-lg border-gray-200 text-sm focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="">-- Pilih Buku --</option>
                  {books.map(book => (
                    <option key={book.id} value={book.id}>{book.title}</option>
                  ))}
                </select>
              </div>

              {selectedBook && (
                <div className="p-3 bg-primary-50 rounded-lg flex items-center space-x-3 mb-2">
                  <img src={selectedBook.coverImage} alt="" className="w-10 h-14 object-cover rounded shadow-sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-primary-900 truncate">{selectedBook.title}</p>
                    <p className="text-[10px] text-primary-700">{selectedBook.author}</p>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                    >
                      <Star 
                        className={`w-6 h-6 ${star <= rating ? 'fill-accent-500 text-accent-500' : 'text-gray-300'}`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Komentar</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Ceritakan pengalaman membaca Anda..."
                  className="w-full rounded-lg border-gray-200 text-sm focus:ring-primary-500 focus:border-primary-500 min-h-[120px]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!selectedBookId || isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Mengirim...' : 'Kirim Komentar'}
              </button>
            </form>
          </div>
        </div>

        {/* Reviews List Section */}
        <div className="lg:col-span-2">
          {!selectedBookId ? (
            <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-12 text-center">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-gray-900 font-medium">Pilih buku untuk melihat komentar</h3>
              <p className="text-gray-500 text-sm max-w-xs mx-auto mt-2">
                Pilih salah satu koleksi buku kami dari daftar di samping untuk melihat apa yang dikatakan anggota lain.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-gray-900">
                  {bookReviews.length} Komentar untuk "{selectedBook.title}"
                </h2>
              </div>

              <AnimatePresence mode="popLayout">
                {bookReviews.length > 0 ? (
                  bookReviews.map((review) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">
                            {review.userName.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{review.userName}</p>
                            <p className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                          </div>
                        </div>
                        <StarRating rating={review.rating} size="sm" />
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed italic bg-gray-50 p-3 rounded-lg border-l-4 border-primary-500">
                        "{review.comment}"
                      </p>
                    </motion.div>
                  ))
                ) : (
                  <div className="bg-white p-12 rounded-xl border border-gray-100 text-center">
                    <p className="text-gray-500 italic">Belum ada komentar untuk buku ini. Jadilah yang pertama memberikan ulasan!</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
