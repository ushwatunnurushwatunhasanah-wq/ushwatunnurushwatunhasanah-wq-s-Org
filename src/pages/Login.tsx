import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import type { Role } from '../types';

export const Login: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<Role>('User');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API Login
    await login(email, role);
  };

  const getMsg = () => {
    return (location.state as any)?.msg;
  };

  return (
    <div className="min-h-screen bg-secondary-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center text-primary-600 mb-6">
          <BookOpen className="w-12 h-12" />
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Masuk ke Akun
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Atau daftar secara otomatis jika email belum terdaftar
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-2xl sm:px-10 border border-gray-100">
          {getMsg() && (
            <div className="mb-4 bg-blue-50 text-blue-700 p-3 rounded-lg text-sm">
              {getMsg()}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Alamat Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                  placeholder="anda@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role (Simulasi)
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value as Role)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
              >
                <option value="User">Anggota / User</option>
                <option value="Librarian">Pustakawan</option>
                <option value="Admin">Administrator</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg border border-transparent bg-primary-600 py-2.5 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
              >
                Masuk
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-xs text-gray-500">
            *Aplikasi ini menggunakan mock authentication untuk tujuan prototipe.
          </div>
        </div>
      </div>
    </div>
  );
};
