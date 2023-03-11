import React, { useState, useContext, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Badge, Space, theme } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useMediaQuery } from 'react-responsive';
import logo from '../assets/images/logo.webp'
import BagDrawer from './BagDrawer';
import { BagContext } from '../BagContext';
import { BagContextType } from '../types';

const { Header, Content, Footer } = Layout;

const menuItems: MenuProps['items'] = [
  {
    label: 'MENU',
    key: 'menu',
  }
];

const AppLayout: React.FC = () => {

  const {
    token: { colorPrimary, colorBgContainer, boxShadowTertiary, colorBgLayout },
  } = theme.useToken();
  const isScreenMdOrLess = useMediaQuery({maxWidth: 769});
  const isScreenLG = useMediaQuery({minWidth: 991});
  const isScreen4K = useMediaQuery({minWidth: 2500});
  
  const headerStyle: React.CSSProperties = {
    backgroundColor: colorBgContainer,
    display: 'flex',
    paddingInline: isScreenLG ? '12%' : '3%',
    height: '76px',
    position: 'sticky',
    zIndex: 1,
    top: 0,
    width: '100%',
    boxShadow: boxShadowTertiary
  }

  const logoStyle: React.CSSProperties = {
    height: isScreenMdOrLess ? '65px' : '75px',
    marginTop: isScreenMdOrLess ? '5px' : '1px'
  }

  const menuStyle: React.CSSProperties = {
    flex: 1,
    marginLeft: '30px',
    fontSize: isScreenMdOrLess ? '20px' :'24px',
    fontWeight: 500
  }

  const contentStyle: React.CSSProperties = {
    backgroundColor: colorBgLayout,
    minHeight: isScreen4K ? '88vh' : '85vh'
  }

  const footerStyle: React.CSSProperties = {
    backgroundColor: '#0d0d0d',
    textAlign: 'center',
    minHeight: '60px',
    color: '#FFFFFF',
    fontSize: '10px',
    paddingTop: '45px',
    paddingBottom: '5px'
  }

  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useContext(BagContext) as BagContextType; 
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [isBagBtnHover, setIsBagBtnHover] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  useEffect(() => {
    if (location['pathname'] === '/menu') {
      setSelectedMenu('menu');
    } else {
      setSelectedMenu('');
    }
  }, [location]);

  const onSelectMenu= (item: any): void => {
    navigate(item.key);
  }

  return (
    <Layout>
      <Header style={headerStyle}>
        <div>
          <Link to="/"><img src={logo} alt="logo" style={logoStyle}/></Link>
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['']}
          selectedKeys={[selectedMenu]}
          style={menuStyle}
          items={menuItems}
          onClick={onSelectMenu}
        />
        {location.pathname !== '/checkout' &&
          <Space size="middle" style={{ marginTop: '6px'}}>
            <Badge color={colorPrimary} count={totalItems}>
              <Button
                aria-label="bag-button"
                type="primary"
                shape="round"
                size="large"
                style={{backgroundColor: isBagBtnHover ? '#303b41' :'#0F1519'}}
                icon={<ShoppingOutlined />}
                onMouseEnter={() => setIsBagBtnHover(true)}
                onMouseLeave={() => setIsBagBtnHover(false)}
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
        <span>New Chopstix Restaurant ©2023 Created by Bruce An</span>
      </Footer>
    </Layout>
  );
};

export default AppLayout;