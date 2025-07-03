import { Link, useLocation } from 'react-router-dom';
import { Code, Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import type { Theme } from '../types/theme';

const navigationLinks = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/about', icon: User, label: 'About' },
  { to: '/projects', icon: Code, label: 'Projects' },
  { to: '/experience', icon: Briefcase, label: 'Experience' },
  { to: '/contact', icon: Mail, label: 'Contact' },
];

interface NavigationProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export function Navigation({ theme, setTheme }: NavigationProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-1xl md:text-3xl font-bold gradient-text hover:opacity-80"
          >
            Anupa
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigationLinks.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium ${
                  location.pathname === to
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Link>
            ))}
            <div className="ml-2">
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationLinks.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center px-3 py-2 rounded-lg text-base font-medium ${
                  location.pathname === to
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}