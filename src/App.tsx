import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './store/AuthContext';
import { LibraryProvider } from './store/LibraryContext';
import { PublicHome } from './pages/PublicHome';
import { Login } from './pages/Login';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { Catalog } from './pages/Catalog';
import { Loans } from './pages/Loans';
import { Favorites } from './pages/Favorites';
import { ManageBooks } from './pages/ManageBooks';
import { Reports } from './pages/Reports';
import { ManageUsers } from './pages/ManageUsers';

export default function App() {
  return (
    <AuthProvider>
      <LibraryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PublicHome />} />
            <Route path="/login" element={<Login />} />
            
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/katalog" element={<Catalog />} />
              <Route path="/peminjaman" element={<Loans />} />
              <Route path="/favorit" element={<Favorites />} />
              <Route path="/kelola-buku" element={<ManageBooks />} />
              <Route path="/laporan" element={<Reports />} />
              <Route path="/pengguna" element={<ManageUsers />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </LibraryProvider>
    </AuthProvider>
  );
}
