import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '../types';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, role?: User['role']) => Promise<void>;
  logout: () => void;
  allUsers: User[];
  updateUser: (userId: string, userData: Partial<User>) => Promise<void>;
  deleteUser: (userId: string) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('pustaka_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase.from('profiles').select('*');
      if (error) throw error;
      if (data) setAllUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem('pustaka_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('pustaka_user');
    }
  }, [user]);

  const login = async (email: string, role: User['role'] = 'User') => {
    try {
      const { data: existingUser, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', email)
        .single();

      if (existingUser) {
        setUser(existingUser);
      } else {
        const newUser: Omit<User, 'id'> = {
          name: email.split('@')[0],
          email,
          role,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
        };
        
        const { data: createdUser, error: insertError } = await supabase
          .from('profiles')
          .insert([newUser])
          .select()
          .single();

        if (insertError) throw insertError;
        if (createdUser) {
          setUser(createdUser);
          setAllUsers(prev => [...prev, createdUser]);
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Gagal masuk. Pastikan tabel profiles sudah dibuat di Supabase.');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = async (userId: string, userData: Partial<User>) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update(userData)
        .eq('id', userId);

      if (error) throw error;

      setAllUsers(prev => prev.map(u => u.id === userId ? { ...u, ...userData } : u) as User[]);
      if (user?.id === userId) {
        setUser(prev => prev ? { ...prev, ...userData } : null);
      }
    } catch (error) {
      console.error('Update user error:', error);
    }
  };

  const deleteUser = async (userId: string) => {
    if (userId === user?.id) {
      alert('Anda tidak bisa menghapus akun Anda sendiri!');
      return;
    }

    try {
      const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId);

      if (error) throw error;
      setAllUsers(prev => prev.filter(u => u.id !== userId));
    } catch (error) {
      console.error('Delete user error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, allUsers, updateUser, deleteUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
