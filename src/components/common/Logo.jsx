import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/plantx-logo.png';

export default function Logo({
  variant = 'dark', // 'dark' | 'light'
  size = 'default', // 'small' (38px), 'default' (50px), 'large' (64px)
  to = '/',
  className = '',
  withBadge = false,
}) {
  const isLight = variant === 'light';
  const imgHeight = size === 'small' ? 36 : size === 'large' ? 60 : 48;

  return (
    <Link
      to={to}
      className={`plantx-brand-logo ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        transition: 'transform 0.2s ease, opacity 0.2s ease',
        background: isLight || withBadge ? '#FFFFFF' : 'transparent',
        padding: isLight || withBadge ? '6px 14px' : '0',
        borderRadius: isLight || withBadge ? '10px' : '0',
        boxShadow: isLight || withBadge ? '0 2px 10px rgba(0, 0, 0, 0.12)' : 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.95';
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
          maxWidth: '220px',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </Link>
  );
}
