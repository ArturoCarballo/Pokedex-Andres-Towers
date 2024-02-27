import React, { useEffect, useState } from 'react';

import styles from "./../../assets/styles/MouseTracker.module.css";
import stylusImg from "./../../assets/img/stylus.png";

interface MousePosition {
  x: number;
  y: number;
}

const MouseTracker:React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: (window.innerWidth / 2), y: (window.innerHeight / 2) });

  const handleMouseMove = (e: MouseEvent) => {
    console.log(`(x: ${e.clientX}, y: ${e.clientY})`);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className={`${styles.mouseTracker}`} style={{ top: mousePosition.y, left: mousePosition.x - 8 }}></div>
  );
}

export default MouseTracker;
