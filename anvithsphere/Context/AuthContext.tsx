'use client';

import { createContext, useContext, useState } from 'react';
import { AuthContextType, AuthState, User } from '../types/context';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  const login = async (email: string, password: string) => {
    try {
      // Replace with your actual API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Login failed');

      const user = await response.json();
      setAuthState({ user, isAuthenticated: true });
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      // Replace with your actual API call
      await fetch('/api/auth/logout', { method: 'POST' });
      setAuthState({ user: null, isAuthenticated: false });
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  const updateUser = (user: User) => {
    setAuthState(prev => ({
      ...prev,
      user,
    }));
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 