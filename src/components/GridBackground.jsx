import React from 'react';

const GridBackground = ({ 
  color = "#000", 
  opacity = 0.1, // Increased to 0.1 so you can definitely see it
  size = 60,      
  className = "" 
}) => {
  return (
    <div 
      // FIX 1: Removed '-z-10'. Changed to 'z-0'. 
      // It will sit on top of the parent's background color, but behind content (if DOM order is correct).
      className={`absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none ${className}`}
      style={{
        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
      }}
    >
      <svg
        className="absolute h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            {/* FIX 2: Explicit Path Syntax to ensure L-shape draws correctly */}
            <path
              d={`M ${size} 0 L 0 0 L 0 ${size}`}
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity={opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
};

export default GridBackground;