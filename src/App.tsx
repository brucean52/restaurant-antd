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
          colorBgLayout: '#F0F0F0',
          boxShadowSecondary: 'rgba(0, 0, 0, 0.08) 0px 4px 10px 0px,rgba(0, 0, 0, 0.12) 0px 3px 6px -4px,' +
            'rgba(0, 0, 0, 0.05) 0px 7px 16px 5px'
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