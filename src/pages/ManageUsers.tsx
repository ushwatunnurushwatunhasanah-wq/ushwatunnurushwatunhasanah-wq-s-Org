import React, { useState } from 'react';
import { useAuth } from '../store/AuthContext';
import { Users, UserPlus, Shield, User as UserIcon, Trash2, Search, Edit2, X, Check, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { User } from '../types';

export function ManageUsers() {
  const { allUsers, updateUser, deleteUser, user: currentUser } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<{ name: string, role: User['role'], avatar: string }>({ name: '', role: 'User', avatar: '' });

  const [userToDelete, setUserToDelete] = useState<string | null>(null);

  const avatarStyles = ['lorelei', 'avataaars', 'notionists', 'croodles', 'big-smile'];
  const [currentAvatarStyle, setCurrentAvatarStyle] = useState('lorelei');

  const filteredUsers = allUsers.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClick = (user: User) => {
    setEditingId(user.id);
    setEditForm({ name: user.name, role: user.role, avatar: user.avatar });
  };

  const handleRandomAvatar = (forceHijab = false) => {
    const seed = Math.random().toString(36).substring(7);
    const bgColor = ['b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc', 'ffdfbf'][Math.floor(Math.random() * 5)];
    
    let url = `https://api.dicebear.com/7.x/${currentAvatarStyle}/svg?seed=${seed}&backgroundColor=${bgColor}`;
    
    if (currentAvatarStyle === 'avataaars' && forceHijab) {
      url += '&top[]=hijab';
    }
    
    setEditForm(prev => ({ ...prev, avatar: url }));
  };

  const handleSaveEdit = async (userId: string) => {
    await updateUser(userId, editForm);
    setEditingId(null);
  };

  const confirmDelete = async () => {
    if (userToDelete) {
      await deleteUser(userToDelete);
      setUserToDelete(null);
    }
  };

  const getRoleBadgeColor = (role: User['role']) => {
    switch (role) {
      case 'Admin': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Librarian': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getRoleIcon = (role: User['role']) => {
    switch (role) {
      case 'Admin': return <Shield className="w-3 h-3" />;
      case 'Librarian': return <Users className="w-3 h-3" />;
      default: return <UserIcon className="w-3 h-3" />;
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manajemen Pengguna</h1>
          <p className="text-gray-600">Kelola anggota perpustakaan, staf, dan hak akses mereka.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama atau email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 w-full md:w-64"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Pengguna</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Peran</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">ID Anggota</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <AnimatePresence mode="popLayout">
                {filteredUsers.map((u) => (
                  <motion.tr
                    key={u.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative group/avatar">
                          <img src={editingId === u.id ? editForm.avatar : u.avatar} alt="" className="w-10 h-10 rounded-full border border-gray-100 flex-shrink-0" />
                          {editingId === u.id && (
                            <div className="absolute -bottom-1 -right-4 flex flex-col gap-1 z-10">
                              <button 
                                type="button"
                                onClick={() => handleRandomAvatar(false)}
                                className="bg-primary-600 text-white rounded-full p-1 shadow-sm hover:scale-110 transition-transform"
                                title="Ganti Avatar"
                              >
                                <RefreshCw className="w-2.5 h-2.5" />
                              </button>
                              {currentAvatarStyle === 'avataaars' && (
                                <button 
                                  type="button"
                                  onClick={() => handleRandomAvatar(true)}
                                  className="bg-pink-500 text-white rounded-full p-1 shadow-sm hover:scale-110 transition-transform"
                                  title="Ganti Avatar Hijab"
                                >
                                  <span className="text-[8px] font-bold">🧕</span>
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                        {editingId === u.id ? (
                          <div className="flex flex-col gap-1">
                            <input
                              type="text"
                              value={editForm.name}
                              onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                              className="text-sm font-medium border-gray-200 rounded-md py-1 px-2 focus:ring-primary-500 max-w-[150px]"
                            />
                            <select
                              value={currentAvatarStyle}
                              onChange={(e) => setCurrentAvatarStyle(e.target.value)}
                              className="text-[10px] border-none bg-gray-50 rounded p-0 px-1 text-gray-500 cursor-pointer"
                            >
                              {avatarStyles.map(s => (
                                <option key={s} value={s}>
                                  {s.charAt(0).toUpperCase() + s.slice(1).replace('-', ' ')}
                                </option>
                              ))}
                            </select>
                          </div>
                        ) : (
                          <span className="font-medium text-gray-900">{u.name} {currentUser?.id === u.id && <span className="text-[10px] bg-primary-100 text-primary-600 px-1.5 py-0.5 rounded ml-1">Anda</span>}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{u.email}</td>
                    <td className="px-6 py-4">
                      {editingId === u.id ? (
                        <select
                          value={editForm.role}
                          onChange={(e) => setEditForm(prev => ({ ...prev, role: e.target.value as User['role'] }))}
                          className="text-xs font-medium border-gray-200 rounded-md py-1 px-2 focus:ring-primary-500"
                        >
                          <option value="User">Anggota (User)</option>
                          <option value="Librarian">Pustakawan</option>
                          <option value="Admin">Admin</option>
                        </select>
                      ) : (
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getRoleBadgeColor(u.role)}`}>
                          {getRoleIcon(u.role)}
                          {u.role === 'User' ? 'Anggota' : u.role}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-xs font-mono text-gray-400">{u.id}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {editingId === u.id ? (
                          <>
                            <button
                              onClick={() => handleSaveEdit(u.id)}
                              className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                              title="Simpan"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors"
                              title="Batal"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => handleEditClick(u)}
                              className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              disabled={u.id === currentUser?.id}
                              onClick={() => setUserToDelete(u.id)}
                              className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-30"
                              title="Hapus"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
        {filteredUsers.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            <Users className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            <p>Tidak ada pengguna yang ditemukan.</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {userToDelete && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4 mx-auto">
                <Trash2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Hapus Pengguna?</h3>
              <p className="text-gray-600 mb-6 text-center text-sm">Apakah Anda yakin ingin menghapus pengguna ini? Semua data terkait mungkin akan terpengaruh.</p>
              <div className="flex justify-end gap-3">
                <button 
                  onClick={() => setUserToDelete(null)} 
                  className="flex-1 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors font-medium border border-gray-200"
                >
                  Batal
                </button>
                <button 
                  onClick={confirmDelete} 
                  className="flex-1 px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors font-medium"
                >
                  Yakin Hapus
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
