import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { MailOutlined, ArrowRightOutlined } from '@ant-design/icons';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      message.error('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Thank you for subscribing to PlantX Global Dispatch!');
      setEmail('');
    }, 100);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', maxWidth: '440px', margin: '0 auto' }}>
      <Input
        size="large"
        placeholder="Enter your corporate or personal email"
        prefix={<MailOutlined style={{ color: '#94A39A' }} />}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ borderRadius: '9999px' }}
      />
      <Button
        type="primary"
        size="large"
        htmlType="submit"
        loading={loading}
        style={{
          backgroundColor: '#84CC16',
          borderColor: '#84CC16',
          color: '#022C22',
          fontWeight: 700,
          borderRadius: '9999px',
          padding: '0 24px',
        }}
      >
        Subscribe
      </Button>
    </form>
  );
}
