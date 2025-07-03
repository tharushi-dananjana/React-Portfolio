import type { ReactNode } from 'react';
import { PageTransition } from '../PageTransition';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <PageTransition>
      <div className="relative min-h-screen pt-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">

        <div className="ambient-light bg-blue-500/30 left-1/4 top-0 md:block hidden" />
        <div className="ambient-light bg-pink-500/30 right-1/4 bottom-0 md:block hidden" />
        
        <div className="gradient-background absolute inset-0" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </div>
      </div>
    </PageTransition>
  );
}