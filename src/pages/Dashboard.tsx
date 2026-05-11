import React from 'react';
import { useAuth } from '../store/AuthContext';
import { useLibrary } from '../store/LibraryContext';
import { BookOpen, Users, BookMarked, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StarRating } from '../components/StarRating';

export const Dashboard: React.FC = () => {
  const { user, loading: authLoading } = useAuth();
  const { books, loans, loading: libLoading } = useLibrary();

  if (authLoading || libLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const activeLoans = loans.filter(l => l.status === 'Active');
  const userActiveLoans = activeLoans.filter(l => l.userId === user?.id);
  const overdueLoans = activeLoans.filter(l => new Date(l.dueDate) < new Date());

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Selamat datang kembali, {user?.name}!</p>
      </div>

      {(user?.role === 'Admin' || user?.role === 'Librarian') ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Koleksi</p>
            <p className="text-3xl font-bold mt-2">{books.length}</p>
            <div className="mt-2 text-xs text-green-600 flex items-center font-medium">
              Tersedia untuk dipinjam
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Peminjaman Aktif</p>
            <p className="text-3xl font-bold mt-2">{activeLoans.length}</p>
            <div className="mt-2 text-xs text-primary-600 flex items-center font-medium">
              Buku sedang beredar
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Jatuh Tempo</p>
            <p className="text-3xl font-bold mt-2 text-accent-500">{overdueLoans.length}</p>
            <div className="mt-2 text-xs text-red-500 flex items-center font-medium">
              Membutuhkan tindakan
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-full md:col-span-2 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
             {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
            <div className="absolute bottom-0 right-16 -mb-8 w-24 h-24 rounded-full bg-white opacity-10"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">Peminjaman Anda</h2>
              <p className="text-primary-100 mb-6 max-w-sm">Anda memiliki {userActiveLoans.length} buku yang sedang dipinjam saat ini.</p>
              <Link to="/peminjaman" className="inline-block bg-white text-primary-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Lihat Detail
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col justify-center">
            <h3 className="font-bold text-lg text-gray-900 mb-2">Eksplorasi Katalog</h3>
            <p className="text-gray-600 text-sm mb-4">Temukan buku-buku menarik yang belum pernah Anda baca sebelumnya.</p>
            <Link to="/katalog" className="text-primary-600 font-medium hover:text-primary-700 flex items-center gap-1">
              Cari Buku <BookOpen className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Recent Activity / Overdue Notifications */}
      {user?.role !== 'User' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col">
            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
              <h2 className="font-bold">Peminjaman Terkini</h2>
              <Link to="/peminjaman" className="text-sm text-primary-600 font-semibold">Lihat Semua</Link>
            </div>
            <div className="flex-1 overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="text-xs text-gray-400 uppercase">
                    <th className="px-6 py-4 font-semibold">Judul Buku</th>
                    <th className="px-6 py-4 font-semibold">Peminjam</th>
                    <th className="px-6 py-4 font-semibold">Jatuh Tempo</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {loans.slice(0, 5).map(loan => {
                    const book = books.find(b => b.id === loan.bookId);
                    const isOverdue = new Date(loan.dueDate) < new Date() && loan.status === 'Active';
                    return (
                      <tr key={loan.id} className="text-sm">
                        <td className="px-6 py-4 font-medium">{book?.title}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-gray-900 font-medium">{loan.userName || 'Anonim'}</span>
                            <span className="text-[10px] text-gray-400">ID: {loan.userId}</span>
                          </div>
                        </td>
                        <td className={`px-6 py-4 ${isOverdue ? 'text-red-500 font-bold italic' : 'text-gray-600'}`}>
                          {new Date(loan.dueDate).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </td>
                        <td className="px-6 py-4">
                          {loan.status === 'Returned' ? (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase">Selesai</span>
                          ) : isOverdue ? (
                            <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded uppercase">Denda</span>
                          ) : (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase">Aktif</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                  {loans.length === 0 && (
                     <tr>
                       <td colSpan={4} className="px-6 py-4 text-center text-gray-500">Belum ada peminjaman</td>
                     </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-primary-600 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-bold">Laporan Bulanan</h3>
                <p className="text-blue-100 text-xs mt-1">Siap untuk diunduh (PDF/Excel)</p>
                <button className="mt-4 w-full bg-white text-primary-600 py-2 rounded-lg text-sm font-bold shadow-sm">Ekspor Laporan</button>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary-500 rounded-full opacity-20"></div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold mb-4">Buku Populer</h3>
              <div className="space-y-4">
                {books.slice(0, 3).map(book => (
                  <div key={book.id} className="flex items-center gap-3">
                    <img src={book.coverImage} alt={book.title} className="w-12 h-16 bg-gray-200 rounded object-cover flex-shrink-0" />
                    <div className="overflow-hidden">
                      <p className="text-sm font-bold truncate">{book.title}</p>
                      <p className="text-[10px] text-gray-400 truncate mb-0.5">{book.author}</p>
                      {book.description && (
                        <p className="text-[10px] text-gray-500 line-clamp-1 italic mb-1">
                          {book.description}
                        </p>
                      )}
                      <StarRating rating={book.rating} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
