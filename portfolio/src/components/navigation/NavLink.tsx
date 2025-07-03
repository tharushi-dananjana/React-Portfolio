import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}

export function NavLink({ to, icon: Icon, label, isActive, isMobile, onClick }: NavLinkProps) {
  const baseStyles = isMobile
    ? "flex items-center w-full px-6 py-4 text-base font-medium transition-colors"
    : "inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200";

  const activeStyles = isActive
    ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800";

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${baseStyles} ${activeStyles}`}
    >
      <Icon className={`${isMobile ? 'w-5 h-5 mr-3' : 'w-4 h-4 mr-2'}`} />
      {label}
    </Link>
  );
}