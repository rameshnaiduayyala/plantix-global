import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/plantx-logo.png';

export default function Logo({
  variant = 'dark', // 'dark' | 'light'
  size = 'default', // 'small' (38px), 'default' (52px), 'large' (64px)
  to = '/',
  className = '',
}) {
  const isLight = variant === 'light';
  const imgHeight = size === 'small' ? 38 : size === 'large' ? 64 : 52;

  return (
    <Link
      to={to}
      className={`plantx-brand-logo ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        transition: 'transform 0.2s ease, opacity 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.92';
        e.currentTarget.style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <img
        src={logoImg}
        alt="PlantX Global - Plants. Landscapes. Worldwide."
        style={{
          height: `${imgHeight}px`,
          width: 'auto',
          maxWidth: '240px',
          objectFit: 'contain',
          display: 'block',
          filter: isLight ? 'brightness(0) invert(1)' : 'none',
        }}
      />
    </Link>
  );
}
