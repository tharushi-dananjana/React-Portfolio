import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useRoutePersistence() {
  const location = useLocation();
  const navigate = useNavigate();

  // Save current route
  useEffect(() => {
    localStorage.setItem('lastRoute', location.pathname);
  }, [location]);

  // Restore last route on mount
  useEffect(() => {
    const lastRoute = localStorage.getItem('lastRoute');
    if (lastRoute && location.pathname === '/') {
      navigate(lastRoute, { replace: true });
    }
  }, [navigate, location.pathname]);
}