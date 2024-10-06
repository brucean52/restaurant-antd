import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Badge, Space, theme } from 'antd';
import { ShoppingOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { minWidthLG, minWidth4K, maxWidthMdOrLess } from '../assets/defaultData';
import logo from '../assets/images/logo-light.png';
import logoDark from '../assets/images/logo-dark.png';
import BagDrawer from './BagDrawer';
import { useAppStore } from '../store/UseAppStore';

const { Header, Content, Footer } = Layout;

const menuItems: MenuProps['items'] = [
  {
    label: 'MENU',
    key: 'menu',
  },
  {
    label: 'NUTRITION',
    key: 'nutrition',
  }
];

const AppLayout = () => {
  const {
    token: { colorPrimary, colorBgContainer, boxShadow, colorBgLayout },
  } = theme.useToken();
  const isScreenLG = useMediaQuery({minWidth: minWidthLG});
  const isScreen4K = useMediaQuery({minWidth: minWidth4K});
  const isScreenMdOrLess = useMediaQuery({maxWidth: maxWidthMdOrLess});

  const location = useLocation();
  const navigate = useNavigate();
  const {
    isDarkMode,
    totalItems,
    toggleDarkMode
  } = useAppStore();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<string>('');
  
  const headerStyle: React.CSSProperties = {
    backgroundColor: colorBgContainer,
    display: 'flex',
    paddingInline: isScreenLG ? '12%' : '3%',
    height: '76px',
    position: 'sticky',
    zIndex: 1,
    top: 0,
    width: '100%',
    boxShadow
  };

  const logoStyle: React.CSSProperties = {
    height: isScreenMdOrLess ? '65px' : '75px',
    marginTop: isScreenMdOrLess ? '5px' : '1px'
  };

  const menuStyle: React.CSSProperties = {
    flex: 1,
    marginTop: '5px',
    marginLeft: isScreenMdOrLess ? '10px' : '30px',
    fontSize: isScreenMdOrLess ? '20px' :'24px',
    fontWeight: 500,
    borderBottom: 'none'
  };

  const contentStyle: React.CSSProperties = {
    backgroundColor: colorBgLayout,
    minHeight: isScreen4K ? '88vh' : '85vh'
  };

  const footerStyle: React.CSSProperties = {
    backgroundColor: '#141414',
    textAlign: 'center',
    minHeight: '60px',
    color: '#FFFFFF',
    fontSize: '10px',
    paddingTop: '45px',
    paddingBottom: '5px'
  };

  const themeBtnStyle: React.CSSProperties = {
    margin: '24px 16px 0 0'
  };

  const bagBtnStyle: React.CSSProperties = {
    backgroundColor: isDarkMode ? '#FFFFFF' :'#0F1519',
    color: isDarkMode ? '#000000' :'#FFFFFF',
  };

  useEffect(() => {
    switch (location['pathname']) {
      case '/menu':
        setSelectedMenu('menu');
        break;
      case '/nutrition':
        setSelectedMenu('nutrition');
        break;
      default:
        setSelectedMenu('');
        break;
    }
  }, [location]);

  const onSelectMenu = (item: any): void => {
    navigate(item.key);
  };

  return (
    <Layout>
      <Header style={headerStyle}>
        <div>
          <Link to="/"><img src={isDarkMode ? logoDark : logo} alt="logo" style={logoStyle}/></Link>
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['']}
          selectedKeys={[selectedMenu]}
          style={menuStyle}
          items={menuItems}
          onClick={onSelectMenu}
        />
        <Button
          aria-label="toggle-theme-btn"
          shape="circle"
          icon={isDarkMode ? <SunOutlined /> :<MoonOutlined />}
          style={themeBtnStyle}
          onClick={() => toggleDarkMode()}
        />
        {location.pathname !== '/checkout' &&
          <Space size="middle" style={{ marginTop: '6px'}}>
            <Badge aria-label="bag-total-items" color={colorPrimary} count={totalItems} styles={{ indicator: { color: '#FFFFFF' }}}>
              <Button
                className={isDarkMode ? 'bag-button-dark' : 'bag-button'}
                aria-label="bag-button"
                type="primary"
                shape="round"
                size="large"
                style={bagBtnStyle}
                icon={<ShoppingOutlined />}
                onClick={() => setOpenDrawer(true)}
              />
            </Badge>
          </Space>
        }
      </Header>
      <BagDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
      <Content style={contentStyle}>
        <Outlet context={{setOpenDrawer}}/>
      </Content>
      <Footer style={footerStyle}>
        <span>New Chopstix Restaurant ©2024 Created by Bruce An</span>
      </Footer>
    </Layout>
  );
};

export default AppLayout;