// ArrowButton.tsx

import React from 'react';

interface ArrowButtonProps {
  direction: 'left' | 'right' | 'up' | 'down';
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  let arrow;

  if (direction === 'left') {
    arrow = '←'; // Flecha hacia la izquierda
  } else if (direction === 'right') {
    arrow = '→'; // Flecha hacia la derecha
  } else if (direction === 'up') {
    arrow = '↑'; // Flecha hacia arriba
  } else if (direction === 'down') {
    arrow = '↓'; // Flecha hacia abajo
  }

  return (
    <button onClick={onClick}>
      {arrow}
    </button>
  );
};

export default ArrowButton;
