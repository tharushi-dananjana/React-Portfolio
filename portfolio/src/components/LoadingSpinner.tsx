import { Loader } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader className="w-8 h-8 animate-spin text-blue-600 dark:text-blue-400" />
    </div>
  );
}