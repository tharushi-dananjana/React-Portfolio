import { X } from 'lucide-react';
import { NavLink } from './NavLink';
import type { NavItem } from './types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavItem[];
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, links, currentPath }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-40 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-72 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-out z-50 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <span className="text-lg font-semibold gradient-text">Navigation</span>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-2 focus:ring-blue-500 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto py-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                {...link}
                isActive={currentPath === link.to}
                isMobile
                onClick={onClose}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}