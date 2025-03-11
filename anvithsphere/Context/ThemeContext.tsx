'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { Theme, ThemeContextType } from '../types/context';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const checkTimeAndSetTheme = () => {
    const currentHour = new Date().getHours();
    // Set dark mode between 6 PM (18:00) and 6 AM (6:00)
    const shouldBeDark = currentHour >= 18 || currentHour < 6;
    const newTheme = shouldBeDark ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', shouldBeDark);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Check for saved theme preference first
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // If no saved preference, set theme based on time
      checkTimeAndSetTheme();
    }

    // Update theme every hour
    const interval = setInterval(checkTimeAndSetTheme, 1000 * 60 * 60); // Check every hour

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 