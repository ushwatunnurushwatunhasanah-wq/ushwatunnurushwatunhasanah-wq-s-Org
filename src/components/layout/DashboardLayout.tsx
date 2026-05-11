import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import { useAuth } from '../../store/AuthContext';
import { Sidebar } from './Sidebar';

export const DashboardLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-secondary-100 text-gray-900 font-sans flex overflow-hidden">
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      
      <div className="flex-1 flex flex-col md:ml-64 min-w-0 transition-all overflow-y-auto">
        <header className="h-16 bg-white border-b border-gray-200 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center flex-1">
            <button 
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 -ml-2 mr-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <span className="md:hidden font-semibold text-gray-900">PustakaDigital</span>
            
            <div className="hidden md:block relative w-96">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="w-4 h-4 text-gray-400" />
              </span>
              <input 
                type="text" 
                className="w-full bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-primary-100 rounded-lg py-2 pl-10 text-sm outline-none transition-all" 
                placeholder="Cari buku, penulis, atau ISBN..." 
              />
            </div>
          </div>
        </header>

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
