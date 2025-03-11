'use client';

import { ThemeProvider } from '../Context/ThemeContext';
import { AuthProvider } from '../Context/AuthContext';
import { QueryProvider } from './QueryProvider';

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </QueryProvider>
  );
} 