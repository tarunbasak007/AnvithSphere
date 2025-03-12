"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../Context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Left Side: Logo and Name */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/Image/logo.jpg"
                alt="Logo"
                width={45}
                height={45}
                className="cursor-pointer transform group-hover:scale-105 transition-transform duration-200"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Anvith Sphere
              </span>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"></span>
            </Link>
          </div>

          {/* Right Side: Search, Theme Toggle, Subscribe & Sign Up */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-200"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                // Sun icon for dark mode
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon icon for light mode
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <Link href="/signup">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 font-medium shadow-md hover:shadow-lg">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
