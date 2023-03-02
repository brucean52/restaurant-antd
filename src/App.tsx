import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import NoMatch from './pages/NoMatch';
import { ConfigProvider } from 'antd';

const App: React.FC = () => {

  return (
    <ConfigProvider 
      theme={{
        token: {
          colorPrimary: '#C11316',
          colorBgLayout: '#E6E6E6'
        }
      }}
    >
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
};

export default App;