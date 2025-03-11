export type Theme = 'light' | 'dark';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface AuthContextType {
  authState: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (user: User) => void;
} 