import React from 'react';
import { useLibrary } from '../store/LibraryContext';
import { Heart, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StarRating } from '../components/StarRating';

export const Favorites: React.FC = () => {
  const { books, favorites, toggleFavorite } = useLibrary();
  const { user } = useAuth();

  const favoriteBooks = books.filter(b => favorites.includes(b.id));

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Koleksi Favorit</h1>
        <p className="text-gray-600">Buku-buku yang telah Anda simpan.</p>
      </div>

      {favoriteBooks.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl text-center border border-gray-100 flex flex-col items-center justify-center">
          <Heart className="w-16 h-16 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">Belum ada buku favorit</h3>
          <p className="text-gray-500 mb-6">Jelajahi katalog dan simpan buku yang Anda sukai.</p>
          <Link to="/katalog" className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition">
            Lihat Katalog
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {favoriteBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col relative group">
              <div className="aspect-[3/4] relative bg-gray-100 overflow-hidden">
                <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <button 
                  onClick={async () => {
                    if (user) await toggleFavorite(book.id, user.id);
                  }}
                  className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(book.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs font-semibold text-primary-600 mb-1">{book.category}</span>
                <h3 className="font-bold text-gray-900 line-clamp-2 leading-tight mb-1" title={book.title}>{book.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{book.author}</p>
                <div className="mb-3">
                  <StarRating rating={book.rating} />
                </div>
                <div className="mt-auto">
                   <button className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-900 font-medium py-2 rounded-lg transition">
                     <BookOpen className="w-4 h-4" /> Detail
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
