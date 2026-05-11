import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, LayoutDashboard, Search, BookMarked, Heart, Users, FileText, LogOut, X, Settings, RefreshCw, Check } from 'lucide-react';
import { useAuth } from '../../store/AuthContext';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, setMobileOpen }) => {
  const { user, logout, updateUser } = useAuth();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [newName, setNewName] = useState(user?.name || '');
  const [newAvatar, setNewAvatar] = useState(user?.avatar || '');
  const [currentStyle, setCurrentStyle] = useState('lorelei');

  const avatarStyles = [
    { id: 'lorelei', name: 'Aesthetic Art' },
    { id: 'avataaars', name: 'Classic Avatar' },
    { id: 'croodles', name: 'Hand Drawn' },
    { id: 'notionists', name: 'Notion Style' },
    { id: 'big-smile', name: 'Joyful Characters' }
  ];

  const handleSaveProfile = async () => {
    if (user) {
      await updateUser(user.id, { name: newName, avatar: newAvatar });
      setShowProfileModal(false);
    }
  };

  const randomizeAvatar = (forceHijab = false) => {
    const seed = Math.random().toString(36).substring(7);
    const bgColor = ['b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc', 'ffdfbf'][Math.floor(Math.random() * 5)];
    
    let url = `https://api.dicebear.com/7.x/${currentStyle}/svg?seed=${seed}&backgroundColor=${bgColor}`;
    
    // Khusus untuk avataaars, kita bisa memaksa hijab atau gaya tertentu jika diinginkan
    if (currentStyle === 'avataaars' && forceHijab) {
      url += '&top[]=hijab';
    }
    
    setNewAvatar(url);
  };

  const getMenuItems = () => {
    const items = [
      { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
      { name: 'Katalog Buku', icon: Search, path: '/katalog' },
      { name: 'Peminjaman', icon: BookMarked, path: '/peminjaman' },
      { name: 'Favorit', icon: Heart, path: '/favorit' },
    ];

    if (user?.role === 'Admin' || user?.role === 'Librarian') {
      items.push({ name: 'Kelola Buku', icon: BookOpen, path: '/kelola-buku' });
      items.push({ name: 'Laporan', icon: FileText, path: '/laporan' });
    }
    if (user?.role === 'Admin') {
      items.push({ name: 'Manajemen User', icon: Users, path: '/pengguna' });
    }

    return items;
  };

  const navClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg mb-1 transition-colors",
      isActive 
        ? "bg-primary-50 text-primary-600" 
        : "text-gray-600 hover:bg-gray-50"
    );

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-900/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 md:translate-x-0 outline-none",
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6">
          <div className="flex items-center gap-3 text-primary-600">
            <BookOpen className="w-8 h-8" />
            <span className="font-bold text-xl tracking-tight">PustakaDigital</span>
            <button className="ml-auto md:hidden text-gray-500" onClick={() => setMobileOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {getMenuItems().map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setMobileOpen(false)} className={navClasses}>
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-gray-100">
          <button 
            onClick={() => {
              setNewName(user?.name || '');
              setNewAvatar(user?.avatar || '');
              setShowProfileModal(true);
            }}
            className="w-full flex items-center gap-3 p-2 mb-4 hover:bg-gray-50 rounded-xl transition-colors group text-left"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold overflow-hidden border border-gray-100">
                {user?.avatar ? <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" /> : user?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="absolute -bottom-1 -right-1 p-1 bg-white rounded-full border border-gray-100 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <Settings className="w-2.5 h-2.5 text-gray-500" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold line-clamp-1 truncate">{user?.name}</p>
              <p className="text-[10px] text-gray-500">{user?.role}</p>
            </div>
          </button>
          <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Keluar</span>
          </button>
        </div>
      </aside>

      <AnimatePresence>
        {showProfileModal && (
          <div className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">Pengaturan Profil</h3>
                <button onClick={() => setShowProfileModal(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-gray-50 overflow-hidden bg-gray-100 shadow-inner">
                      <img src={newAvatar} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 flex gap-1">
                      <button 
                        onClick={() => randomizeAvatar(false)}
                        className="p-2 bg-primary-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
                        title="Acak Karakter"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                      {currentStyle === 'avataaars' && (
                        <button 
                          onClick={() => randomizeAvatar(true)}
                          className="p-2 bg-pink-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
                          title="Acak Hijab"
                        >
                          <span className="text-[10px] font-bold">🧕</span>
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Pilih gaya dan tekan ikon putar</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 px-1">Gaya Avatar</label>
                    <select 
                      value={currentStyle}
                      onChange={(e) => setCurrentStyle(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border-gray-200 text-sm focus:ring-2 focus:ring-primary-500 transition-all font-medium mb-3"
                    >
                      {avatarStyles.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                    
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 px-1">Nama Tampilan</label>
                    <input 
                      type="text" 
                      value={newName} 
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border-gray-200 text-sm focus:ring-2 focus:ring-primary-500 transition-all font-medium" 
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button onClick={() => setShowProfileModal(false)} className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors">Batal</button>
                  <button onClick={handleSaveProfile} className="flex-1 px-4 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-all flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" /> Simpan
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
