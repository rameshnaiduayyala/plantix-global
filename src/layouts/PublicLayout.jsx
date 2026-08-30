import React from 'react';
import { Layout } from 'antd';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const { Content } = Layout;

export default function PublicLayout({ children }) {
  return (
    <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F7FAF7' }}>
      <Header />
      <Content style={{ flex: '1 0 auto' }}>
        {children}
      </Content>
      <Footer />
    </Layout>
  );
}
