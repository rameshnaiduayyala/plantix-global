import React from 'react';
import { Tag } from 'antd';

export default function BadgeTag({ type = 'default', children, style = {} }) {
  let color = '#059669';
  let bg = '#ECFDF5';
  let border = '#A7F3D0';

  if (type === 'sale') {
    color = '#DC2626';
    bg = '#FEF2F2';
    border = '#FECACA';
  } else if (type === 'bestseller') {
    color = '#064E3B';
    bg = '#E6F4EA';
    border = '#A3E635';
  } else if (type === 'exotic') {
    color = '#0F766E';
    bg = '#F0FDFA';
    border = '#99F6E4';
  } else if (type === 'lime') {
    color = '#365314';
    bg = '#ECFCCB';
    border = '#BEF264';
  } else if (type === 'warning') {
    color = '#D97706';
    bg = '#FFFBEB';
    border = '#FDE68A';
  }

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 10px',
        borderRadius: '9999px',
        fontSize: '11px',
        fontWeight: '700',
        letterSpacing: '0.4px',
        textTransform: 'uppercase',
        color: color,
        backgroundColor: bg,
        border: `1px solid ${border}`,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
