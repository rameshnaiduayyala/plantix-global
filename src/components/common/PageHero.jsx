import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

export default function PageHero({
  badge,
  title,
  description,
  breadcrumbs = [],
  theme = 'forest', // 'forest', 'teal', 'light'
  children,
}) {
  const isForest = theme === 'forest';
  const isTeal = theme === 'teal';
  const isLight = theme === 'light';

  let bg = 'radial-gradient(120% 120% at 80% 20%, #064E3B 0%, #022C22 100%)';
  if (isTeal) {
    bg = 'linear-gradient(135deg, #0F766E 0%, #064E3B 100%)';
  } else if (isLight) {
    bg = '#FFFFFF';
  }

  const textColor = isLight ? '#17201B' : '#FFFFFF';
  const descColor = isLight ? '#64746B' : '#DDE8E1';

  return (
    <div
      style={{
        background: bg,
        color: textColor,
        padding: isLight ? '32px 0 24px' : '50px 0 60px',
        borderBottom: isLight ? '1px solid #DDE8E1' : 'none',
        borderRadius: isLight ? 0 : '0 0 28px 28px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="plantx-container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div style={{ marginBottom: '16px' }}>
            <Breadcrumb
              items={breadcrumbs.map((b) => ({
                title: b.to ? (
                  <Link
                    to={b.to}
                    style={{ color: isLight ? '#64746B' : '#A3E635', fontWeight: 500 }}
                  >
                    {b.title}
                  </Link>
                ) : (
                  <span style={{ color: isLight ? '#17201B' : '#FFFFFF', fontWeight: 600 }}>
                    {b.title}
                  </span>
                ),
              }))}
            />
          </div>
        )}

        {badge && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: isLight ? '#ECFDF5' : 'rgba(255, 255, 255, 0.12)',
              border: `1px solid ${isLight ? '#A7F3D0' : 'rgba(255, 255, 255, 0.2)'}`,
              color: isLight ? '#059669' : '#A3E635',
              padding: '4px 14px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              marginBottom: '16px',
            }}
          >
            {badge}
          </div>
        )}

        <h1
          style={{
            fontSize: isLight ? '32px' : '40px',
            fontWeight: 800,
            lineHeight: 1.2,
            color: textColor,
            marginBottom: description ? '12px' : '0',
          }}
        >
          {title}
        </h1>

        {description && (
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: descColor,
              maxWidth: '680px',
              marginBottom: children ? '24px' : '0',
            }}
          >
            {description}
          </p>
        )}

        {children && <div style={{ marginTop: '24px' }}>{children}</div>}
      </div>
    </div>
  );
}
