import React from 'react';
import { ConfigProvider } from 'antd';
import { antTheme } from './theme/theme';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <ConfigProvider theme={antTheme}>
      <AppRoutes />
    </ConfigProvider>
  );
}
