import React, { useState } from 'react';
import { useLibrary } from '../store/LibraryContext';
import { useAuth } from '../store/AuthContext';
import { Navigate } from 'react-router-dom';
import { Plus, Trash2, Book, Edit, X } from 'lucide-react';
import type { Book as BookType } from '../types';

export const ManageBooks: React.FC = () => {
  const { user } = useAuth();
  const { books, addBook, deleteBook, updateBook } = useLibrary();
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBook, setNewBook] = useState<Partial<BookType>>({
    title: '',
    author: '',
    isbn: '',
    category: '',
    coverImage: '',
    description: '',
    publisher: '',
    publishedYear: new Date().getFullYear(),
    totalCopies: 1,
    availableCopies: 1,
    isDigital: false,
    pages: 100,
    rating: 0,
    content: ''
  });

  const [bookToDelete, setBookToDelete] = useState<string | null>(null);
  const [editingBook, setEditingBook] = useState<BookType | null>(null);

  if (user?.role !== 'Admin' && user?.role !== 'Librarian') {
    return <Navigate to="/dashboard" replace />;
  }

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newBook.title && newBook.author) {
      await addBook(newBook as Omit<BookType, 'id'>);
      setShowAddForm(false);
      setNewBook({
        title: '', author: '', isbn: '', category: '', coverImage: '',
        description: '', publisher: '', publishedYear: new Date().getFullYear(),
        totalCopies: 1, availableCopies: 1, isDigital: false, pages: 100, rating: 0, content: ''
      });
    }
  };

  const handleDelete = (id: string) => {
    setBookToDelete(id);
  };

  const confirmDelete = async () => {
    if (bookToDelete) {
      await deleteBook(bookToDelete);
      setBookToDelete(null);
    }
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBook && editingBook.title && editingBook.author) {
      await updateBook(editingBook.id, editingBook);
      setEditingBook(null);
    }
  };

  const cancelDelete = () => {
    setBookToDelete(null);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {editingBook && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full shadow-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">Edit Buku</h3>
              <button onClick={() => setEditingBook(null)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Judul Buku</label>
                  <input
                    type="text"
                    required
                    value={editingBook.title}
                    onChange={(e) => setEditingBook({ ...editingBook, title: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Penulis</label>
                  <input
                    type="text"
                    required
                    value={editingBook.author}
                    onChange={(e) => setEditingBook({ ...editingBook, author: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                  <select
                    value={editingBook.category}
                    onChange={(e) => setEditingBook({ ...editingBook, category: e.target.value as any })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  >
                    <option value="">Pilih Kategori</option>
                    <option value="Fiksi">Fiksi</option>
                    <option value="Non-Fiksi">Non-Fiksi</option>
                    <option value="Sastra">Sastra</option>
                    <option value="Teknologi">Teknologi</option>
                    <option value="Sejarah">Sejarah</option>
                    <option value="Sains">Sains</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">URL Cover</label>
                  <input
                    type="url"
                    value={editingBook.coverImage || ''}
                    onChange={(e) => setEditingBook({ ...editingBook, coverImage: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Total Copy</label>
                  <input
                    type="number"
                    min="1"
                    value={editingBook.totalCopies}
                    onChange={(e) => setEditingBook({ ...editingBook, totalCopies: parseInt(e.target.value) || 1 })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi & Konten</label>
                  <textarea
                    rows={4}
                    value={editingBook.description || ''}
                    onChange={(e) => setEditingBook({ ...editingBook, description: e.target.value, content: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-primary-500"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button type="button" onClick={() => setEditingBook(null)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium">Batal</button>
                <button type="submit" className="px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 rounded-lg transition-colors text-sm font-medium">Simpan Perubahan</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {bookToDelete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Hapus Buku?</h3>
            <p className="text-gray-600 mb-6">Apakah Anda yakin ingin menghapus buku ini? Tindakan ini tidak dapat dibatalkan.</p>
            <div className="flex justify-end gap-3">
              <button onClick={cancelDelete} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">Batal</button>
              <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors">Yakin Hapus</button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kelola Buku</h1>
          <p className="text-gray-500 mt-1">Tambah atau hapus buku dari katalog perpustakaan.</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          {showAddForm ? 'Batal Tambah' : <><Plus className="w-4 h-4" /> Tambah Buku Baru</>}
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
          <h2 className="text-lg font-semibold mb-4">Tambah Buku Baru</h2>
          <form onSubmit={handleAddSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Judul Buku</label>
                <input required type="text" value={newBook.title} onChange={e => setNewBook({...newBook, title: e.target.value})} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Penulis</label>
                <input required type="text" value={newBook.author} onChange={e => setNewBook({...newBook, author: e.target.value})} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ISBN</label>
                <input type="text" value={newBook.isbn} onChange={e => setNewBook({...newBook, isbn: e.target.value})} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                <input type="text" value={newBook.category} onChange={e => setNewBook({...newBook, category: e.target.value})} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">URL Gambar Cover</label>
                <input type="url" value={newBook.coverImage} onChange={e => setNewBook({...newBook, coverImage: e.target.value})} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi & Konten</label>
                <textarea rows={3} value={newBook.description} onChange={e => setNewBook({...newBook, description: e.target.value, content: e.target.value})} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button type="submit" className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">Simpan Buku</button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul Buku</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Copy</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider sticky right-0 bg-gray-50 z-10 w-28">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {books.map((book) => (
                <tr key={book.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded flex items-center justify-center">
                        {book.coverImage ? (
                          <img className="h-10 w-10 rounded object-cover" src={book.coverImage} alt={book.title} />
                        ) : (
                          <Book className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 max-w-[200px] sm:max-w-xs truncate">{book.title}</div>
                        <div className="text-sm text-gray-500">{book.author}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {book.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {book.totalCopies}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium sticky right-0 bg-white z-10 shadow-[-12px_0_15px_-4px_rgba(0,0,0,0.05)] pl-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => {
                          setEditingBook(book);
                        }}
                        className="text-blue-600 hover:text-blue-900 p-2 rounded-full hover:bg-blue-50 transition-colors"
                        title="Edit Buku"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(book.id)}
                        className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-red-50 transition-colors"
                        title="Hapus"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
