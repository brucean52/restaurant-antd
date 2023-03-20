import React, { useState } from 'react';
import { Anchor, Row, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';
import MenuItemCard from '../components/MenuItemCard';
import MenuItemModal from '../components/MenuItemModal';
import { MenuItem } from '../types';
import { menuDataArray } from '../assets/menuData';
import { defaultMenuItem } from '../assets/defaultData';

const { Title } = Typography;

const MenuPage: React.FC = () => {

  const isScreenLg = useMediaQuery({minWidth: 992});

  const layoutStyle: React.CSSProperties = {
    display: isScreenLg ? 'flex' : 'block',
    padding: isScreenLg ? '0 15% 0 10%' : '0'
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
      key: 'main-entrees',
      href: '#main-entrees',
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
          <div id="appetizers">
            <Title level={2} className="menu-title appetizers">APPETIZERS</Title>
            <Row>
              {menuDataArray.filter((item: MenuItem) => item.category === 'appetizers').map((menuItem: MenuItem) => {
                return (
                  <MenuItemCard key={menuItem.id} menuItem={menuItem} handleMenuItemClicked={handleMenuItemClicked}/>
                )
              })}
            </Row>
          </div>
          <div id="soups">
            <Title level={2} className="menu-title soup">SOUPS</Title>
            <Row>
              {menuDataArray.filter((item: MenuItem) => item.category === 'soups').map((menuItem: MenuItem) => {
                return (
                  <MenuItemCard key={menuItem.id} menuItem={menuItem} handleMenuItemClicked={handleMenuItemClicked}/>
                )
              })}
            </Row>
          </div>
          <div id="main-entrees">
            <Title level={2} className="menu-title main">MAIN ENTREÉS</Title>
            <Row>
              {menuDataArray.filter((item: MenuItem) => item.category === 'main-entree').map((menuItem: MenuItem) => {
                return (
                  <MenuItemCard key={menuItem.id} menuItem={menuItem} handleMenuItemClicked={handleMenuItemClicked}/>
                )
              })}
            </Row>
          </div>
          <div id="bowls">
            <Title level={2} className="menu-title bowl">ALL DAY RICE BOWLS</Title>
            <Row>
              {menuDataArray.filter((item: MenuItem) => item.category === 'bowls').map((menuItem: MenuItem) => {
                return (
                  <MenuItemCard key={menuItem.id} menuItem={menuItem} handleMenuItemClicked={handleMenuItemClicked}/>
                )
              })}
            </Row>
          </div>
          <div id="fried-rice-noodles">
            <Title level={2} className="menu-title noodles">FRIED RICE & NOODLES</Title>
            <Row>
              {menuDataArray.filter((item: MenuItem) => item.category === 'fried-rice-noodles').map((menuItem: MenuItem) => {
                return (
                  <MenuItemCard key={menuItem.id} menuItem={menuItem} handleMenuItemClicked={handleMenuItemClicked}/>
                )
              })}
            </Row>
          </div>
          <div id="side-orders">
            <Title level={2} className="menu-title side">SIDE ORDERS</Title>
            <Row>
              {menuDataArray.filter((item: MenuItem) => item.category === 'side-orders').map((menuItem: MenuItem) => {
                return (
                  <MenuItemCard key={menuItem.id} menuItem={menuItem} handleMenuItemClicked={handleMenuItemClicked}/>
                )
              })}
            </Row>
          </div>
          <div id="beverages">
            <Title level={2} className="menu-title beverages">BEVERAGES</Title>
            <Row>
              {menuDataArray.filter((item: MenuItem) => item.category === 'beverages').map((menuItem: MenuItem) => {
                return (
                  <MenuItemCard key={menuItem.id} menuItem={menuItem} handleMenuItemClicked={handleMenuItemClicked}/>
                )
              })}
            </Row>
          </div>
        </div>
      </div>
      <MenuItemModal isEdit={false} menuItem={selectedMenuItem} isModalOpen={isModalOpen} handleModalClose={handleModalClose}/>
    </>
  );
};

export default MenuPage;