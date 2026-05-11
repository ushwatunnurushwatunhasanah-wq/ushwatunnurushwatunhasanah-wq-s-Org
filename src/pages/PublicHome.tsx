import React, { useState } from 'react';
import { PublicNavbar } from '../components/layout/PublicNavbar';
import { useLibrary } from '../store/LibraryContext';
import { Search as SearchIcon, ArrowRight, BookMarked, Star, Users, BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { StarRating } from '../components/StarRating';

export const PublicHome: React.FC = () => {
  const { books } = useLibrary();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/login', { state: { msg: 'Silakan login untuk meminjam atau membaca buku.' } });
    }
  };

  const popularBooks = [...books].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="bg-primary-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Akses Ribuan <span className="text-primary-600">Buku Digital</span> dalam Genggaman
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
              Perpustakaan digital modern untuk memudahkan Anda membaca, meminjam, dan berdiskusi kapan saja, di mana saja.
            </p>
            
            <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto md:mx-0 mb-8 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Cari judul buku, penulis..." 
                  className="w-full pl-10 pr-4 py-2 bg-transparent outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition">
                Cari
              </button>
            </form>
            
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Link to="/login" className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition">
                Mulai Membaca <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative z-10 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800" 
              alt="Reading app" 
              className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
              <div className="bg-accent-100 p-3 rounded-lg text-accent-600">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-xl text-gray-900">5.000+</p>
                <p className="text-sm text-gray-500">Anggota Aktif</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Books */}
      <section id="katalog" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Buku Terpopuler</h2>
            <p className="text-gray-600">Pilihan favorit dari para pembaca minggu ini.</p>
          </div>
          <Link to="/login" className="text-primary-600 font-medium hover:text-primary-700 hidden sm:flex items-center gap-1">
            Lihat semua <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularBooks.map(book => (
            <div key={book.id} className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden relative bg-gray-100">
                <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-medium text-primary-600 mb-2">{book.category}</span>
                <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1">{book.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{book.author}</p>
                <div className="mb-4">
                  <StarRating rating={book.rating} />
                </div>
                <div className="mt-auto">
                  <Link to="/login" className="w-full block text-center bg-gray-50 hover:bg-gray-100 text-gray-900 font-medium py-2 rounded-lg transition">
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-secondary-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-16">Mengapa Memilih Kami?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookMarked, title: 'Koleksi Lengkap', desc: 'Ribuan buku fisik dan digital siap diakses.' },
              { icon: SearchIcon, title: 'Pencarian Cerdas', desc: 'Temukan buku dengan cepat berkat fitur auto-complete dan filter.' },
              { icon: Users, title: 'Komunitas Aktif', desc: 'Berbagi ulasan dan temukan rekomendasi dari pembaca lain.' },
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-600">
                  <f.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-white mb-6">
            <BookOpen className="w-6 h-6" />
            <span className="font-bold text-xl tracking-tight">PustakaDigital</span>
          </div>
          <p className="mb-6">&copy; {new Date().getFullYear()} PustakaDigital. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
};
