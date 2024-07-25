import React, { useState } from 'react';
import { Anchor, Row, Typography, theme } from 'antd';
import { useMediaQuery } from 'react-responsive';
import MenuItemCard from '../components/MenuItemCard';
import MenuItemModal from '../components/MenuItemModal';
import { MenuItem } from '../types';
import { menuDataArray } from '../assets/menuData';
import { defaultMenuItem } from '../assets/defaultData';

const { Title } = Typography;

const MenuPage: React.FC = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const isScreenLg = useMediaQuery({minWidth: 992});

  const layoutStyle: React.CSSProperties = {
    display: isScreenLg ? 'flex' : 'block',
    padding: isScreenLg ? '0 15% 0 10%' : '0'
  }

  const menuTitleStyle: React.CSSProperties = {
    color: colorPrimary,
    fontWeight: 600,
    lineHeight: 0.5,
    textAlign: 'center',
    position: 'relative',
    marginBottom: '30px'
  };

  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>(defaultMenuItem);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setSelectedMenuItem(defaultMenuItem);
    setIsModalOpen(false);
  };

  const handleMenuItemClicked = (menuItem: MenuItem) => {
    setSelectedMenuItem(menuItem);
    setIsModalOpen(true);
  };

  const navMenuItems = [
    {
      key: 'appetizers',
      href: '#appetizers',
      title: 'APPETIZERS'
    },
    {
      key: 'soups',
      href: '#soups',
      title: 'SOUPS'
    },
    {
      key: 'main-entree',
      href: '#main-entree',
      title: 'MAIN ENTREÉS'
    },
    {
      key: 'bowls',
      href: '#bowls',
      title: 'ALL DAY RICE BOWLS'
    },
    {
      key: 'fried-rice-noodles',
      href: '#fried-rice-noodles',
      title: 'FRIED RICE & NOODLES'
    },
    {
      key: 'side-orders',
      href: '#side-orders',
      title: 'SIDE ORDERS'
    },
    {
      key: 'beverages',
      href: '#beverages',
      title: 'BEVERAGES'
    },
  ];

  return (
    <>
      <div style={layoutStyle}>
        <Anchor
          className="anchor"
          direction={isScreenLg ? 'vertical': 'horizontal'}
          offsetTop={75}
          targetOffset={125}
          items={navMenuItems}
        />
        <div>
          {navMenuItems.map(navItem => {
            return (
              <div id={navItem.key} key={navItem.key}>
                <Title level={2} style={menuTitleStyle}>{navItem.title}</Title>
                <Row>
                  {menuDataArray.filter((item: MenuItem) => item.category === navItem.key).map((menuItem: MenuItem) => {
                    return (
                      <MenuItemCard key={menuItem.id} menuItem={menuItem} handleMenuItemClicked={handleMenuItemClicked}/>
                    )
                  })}
                </Row>
              </div>
            )
          })}
        </div>
      </div>
      <MenuItemModal
        isEdit={false}
        menuItem={selectedMenuItem}
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
      />
    </>
  );
};

export default MenuPage;