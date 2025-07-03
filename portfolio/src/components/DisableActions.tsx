import React, { useEffect } from 'react';

const DisableActions: React.FC = () => {
  useEffect(() => {
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    const disableTextSelection = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('selectstart', disableTextSelection);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('selectstart', disableTextSelection);
    };
  }, []);

  return null;
};

export default DisableActions;