import React from 'react';
import { Empty, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function EmptyState({
  title = 'No Plants Found',
  description = 'We could not find any botanical items matching your criteria.',
  actionText = 'Explore All Plants',
  actionTo = '/plants',
  onAction,
}) {
  return (
    <div
      style={{
        padding: '60px 24px',
        textAlign: 'center',
        background: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #DDE8E1',
        margin: '24px 0',
      }}
    >
      <Empty
        description={
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#064E3B', marginBottom: '8px' }}>
              {title}
            </h3>
            <p style={{ color: '#64746B', fontSize: '14px', maxWidth: '420px', margin: '0 auto 20px' }}>
              {description}
            </p>
          </div>
        }
      >
        {onAction ? (
          <Button type="primary" onClick={onAction}>
            {actionText}
          </Button>
        ) : actionTo ? (
          <Link to={actionTo}>
            <Button type="primary">{actionText}</Button>
          </Link>
        ) : null}
      </Empty>
    </div>
  );
}
