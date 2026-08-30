import React from 'react';

export default function PlantXLogo({
  variant = 'dark', // 'dark' (for white bg), 'light' (for dark emerald bg), 'monochrome'
  size = 'default', // 'small', 'default', 'large'
  showTagline = false,
  className = '',
}) {
  const isLight = variant === 'light';

  // Dimension scaling
  const height = size === 'small' ? 28 : size === 'large' ? 44 : 36;

  const textColor = isLight ? '#FFFFFF' : '#064E3B';
  const leafColorPrimary = '#84CC16';
  const leafColorSecondary = '#059669';
  const subtextColor = isLight ? '#A3E635' : '#64746B';

  return (
    <div
      className={`plantx-brand-logo ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        userSelect: 'none',
        textDecoration: 'none',
      }}
    >
      <svg
        height={height}
        viewBox="0 0 160 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        {/* PlantX text */}
        <text
          x="4"
          y="28"
          fill={textColor}
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize="24"
          letterSpacing="-0.5px"
        >
          Plant
        </text>

        {/* Stylized 'X' with botanical leaf motif */}
        <g transform="translate(68, 8)">
          {/* Main X strokes */}
          <path
            d="M4 4L22 24"
            stroke={isLight ? '#FFFFFF' : '#064E3B'}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M22 4L14.5 12.5"
            stroke={isLight ? '#FFFFFF' : '#064E3B'}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M9.5 18L4 24"
            stroke={isLight ? '#FFFFFF' : '#064E3B'}
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Leaf overlay in the center of the X */}
          <path
            d="M13 3C18 3 24 9 24 16C24 21 19 23 15 22C11 21 8 16 9 10C9.5 7 11 3 13 3Z"
            fill="url(#leafGradient)"
          />
          {/* Leaf vein */}
          <path
            d="M11 18C13 15 16 11 19 8"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </g>

        {/* GLOBAL pill badge */}
        <rect
          x="100"
          y="11"
          width="54"
          height="17"
          rx="8.5"
          fill={isLight ? 'rgba(132, 204, 22, 0.25)' : '#064E3B'}
          stroke={isLight ? '#84CC16' : 'transparent'}
          strokeWidth="1"
        />
        <text
          x="127"
          y="23"
          textAnchor="middle"
          fill={isLight ? '#A3E635' : '#FFFFFF'}
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="700"
          fontSize="8.5"
          letterSpacing="1px"
        >
          GLOBAL
        </text>

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="leafGradient" x1="9" y1="3" x2="24" y2="23" gradientUnits="userSpaceOnUse">
            <stop stopColor={leafColorPrimary} />
            <stop offset="1" stopColor={leafColorSecondary} />
          </linearGradient>
        </defs>
      </svg>

      {showTagline && (
        <span
          style={{
            fontSize: '11px',
            color: subtextColor,
            fontWeight: 500,
            letterSpacing: '0.2px',
            borderLeft: `1px solid ${isLight ? 'rgba(255,255,255,0.2)' : '#DDE8E1'}`,
            paddingLeft: '8px',
            lineHeight: '1.2',
            display: 'none', // Shown conditionally on larger screens
          }}
        >
          Plants. Landscapes. Worldwide.
        </span>
      )}
    </div>
  );
}
