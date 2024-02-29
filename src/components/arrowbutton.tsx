// ArrowButton.tsx

import React, { useEffect } from 'react';

interface ArrowButtonProps {
  direction: 'left' | 'right' | 'up' | 'down' | '';
  onClick?: () => void; // Make onClick optional
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  const arrows = {
    left: '←',
    right: '→',
    up: '↑',
    down: '↓',
  };

  const arrow = direction !== '' ? arrows[direction] : '';

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          if (direction === 'left' && onClick) onClick();
          break;
        case 'ArrowRight':
          if (direction === 'right' && onClick) onClick();
          break;
        case 'ArrowUp':
          if (direction === 'up' && onClick) onClick();
          break;
        case 'ArrowDown':
          if (direction === 'down' && onClick) onClick();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [direction, onClick]);

  return (
    <button className="dpad-btn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400  shadow">
      {arrow}
    </button>
  );
};

export default ArrowButton;
