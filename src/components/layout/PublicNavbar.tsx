import React from 'react';
import { BookOpen, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PublicNavbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 text-primary-600">
            <BookOpen className="w-8 h-8" />
            <span className="font-bold text-xl tracking-tight">PustakaDigital</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600 font-medium">Fitur</a>
            <a href="#katalog" className="text-gray-600 hover:text-primary-600 font-medium">Katalog Katalog</a>
            <a href="#about" className="text-gray-600 hover:text-primary-600 font-medium">Tentang</a>
          </div>
          <div className="flex items-center shadow-sm">
            <Link to="/login" className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-lg font-medium transition-colors">
              <LogIn className="w-4 h-4" />
              <span>Login / Daftar</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
