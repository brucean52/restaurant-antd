import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import NoMatch from './pages/NoMatch';
import Nutrition from './pages/Nutrition';

const App: React.FC = () => {

  return (
    <ConfigProvider 
      theme={{
        token: {
          colorPrimary: '#C11316',
          colorBgLayout: '#FFFFFF'
        }
      }}
    >
      <StyleProvider layer>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="nutrition" element={<Nutrition />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </StyleProvider>
    </ConfigProvider>
  );
};

export default App;