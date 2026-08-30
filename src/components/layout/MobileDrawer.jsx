import React, { useState } from 'react';
import { Drawer, Input, Button, Divider } from 'antd';
import {
  SearchOutlined,
  CloseOutlined,
  FileDoneOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../common/Logo';

export default function MobileDrawer({ open, onClose, navLinks = [] }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery('');
      onClose();
    }
  };

  return (
    <Drawer
      title={<Logo variant="dark" size="small" />}
      placement="left"
      onClose={onClose}
      open={open}
      width={310}
      extra={
        <Button type="text" shape="circle" icon={<CloseOutlined />} onClick={onClose} />
      }
      styles={{ body: { padding: '20px 16px' } }}
    >
      {/* Mobile Search */}
      <div style={{ marginBottom: '20px' }}>
        <Input
          placeholder="Search plants, palms, trees..."
          prefix={<SearchOutlined style={{ color: '#94A39A' }} />}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onPressEnter={handleSearch}
          style={{ borderRadius: '9999px' }}
        />
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {navLinks.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            style={{
              padding: '12px 14px',
              fontSize: '15px',
              fontWeight: 600,
              color: '#17201B',
              borderRadius: '8px',
              display: 'block',
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Divider style={{ margin: '16px 0' }} />

      {/* CTA Button */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Link to="/request-quote" onClick={onClose}>
          <Button
            type="primary"
            block
            icon={<FileDoneOutlined />}
            style={{ background: '#059669', borderColor: '#059669', height: '44px', fontWeight: 700, borderRadius: '8px' }}
          >
            Request Project Quote
          </Button>
        </Link>
        <Link to="/bulk-orders" onClick={onClose}>
          <Button
            block
            style={{ background: '#064E3B', color: '#FFFFFF', borderColor: '#064E3B', height: '44px', fontWeight: 600, borderRadius: '8px' }}
          >
            Bulk Order Desk
          </Button>
        </Link>
      </div>

      {/* Contact Quick Info */}
      <div style={{ marginTop: '24px', padding: '16px', background: '#F7FAF7', borderRadius: '12px', fontSize: '13px', color: '#64746B' }}>
        <div style={{ fontWeight: 700, color: '#064E3B', marginBottom: '8px' }}>Ramesh Ayyala &bull; Nursery Desk:</div>
        <div style={{ marginBottom: '6px' }}><PhoneOutlined /> +91 79894 19864</div>
        <div><MailOutlined /> ayyalarameshnaidu@gmail.com</div>
      </div>
    </Drawer>
  );
}
