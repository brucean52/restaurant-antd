import React, { useState } from 'react';
import { Anchor, Row, Typography, Menu } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { HashLink } from 'react-router-hash-link';
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

  const mobileMenuNav: React.CSSProperties = {
    position: 'sticky',
    top: '75px',
    zIndex: 5,
    fontWeight: 500
  }

  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>(defaultMenuItem);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setSelectedMenuItem(defaultMenuItem);
    setIsModalOpen(false);
  };

  const handleMenuItemClicked = (menuItem: MenuItem) => {
    setSelectedMenuItem(menuItem);
    setIsModalOpen(true);
  }

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -150; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  const navMenuItems = [
    {
      key: 'appetizers',
      href: '#appetizers',
      title: 'APPETIZERS',
      label: (<HashLink aria-label="link-appetizers" to='#appetizers' smooth scroll={el => scrollWithOffset(el)}>APPETIZERS</HashLink>),
    },
    {
      key: 'soups',
      href: '#soups',
      title: 'SOUPS', 
      label: (<HashLink aria-label="link-soups" to='#soups' smooth scroll={el => scrollWithOffset(el)}>SOUPS</HashLink>),
    },
    {
      key: 'main-entrees',
      href: '#main-entrees',
      title: 'MAIN ENTREÉS',
      label: (<HashLink aria-label="link-main-entrees" to='#main-entrees' smooth scroll={el => scrollWithOffset(el)}>MAIN ENTREÉS</HashLink>),
    },
    {
      key: 'bowls',
      href: '#bowls',
      title: 'ALL DAY RICE BOWLS',
      label: (<HashLink aria-label="link-bowls" to='#bowls' smooth scroll={el => scrollWithOffset(el)}>ALL DAY RICE BOWLS</HashLink>),
    },
    {
      key: 'fried-rice-noodles',
      href: '#fried-rice-noodles',
      title: 'FRIED RICE & NOODLES',
      label: (<HashLink aria-label="link-fried-rice-noodles" to='#fried-rice-noodles' smooth scroll={el => scrollWithOffset(el)}>FRIED RICE & NOODLES</HashLink>),
    },
    {
      key: 'side-orders',
      href: '#side-orders',
      title: 'SIDE ORDERS',
      label: (<HashLink aria-label="link-side-orders" to='#side-orders' smooth scroll={el => scrollWithOffset(el)}>SIDE ORDERS</HashLink>),
    },
    {
      key: 'beverages',
      href: '#beverages',
      title: 'BEVERAGES',
      label: (<HashLink aria-label="link-beverages" to='#beverages' smooth scroll={el => scrollWithOffset(el)}>BEVERAGES</HashLink>),
    },
  ];

  return (
    <>
      <div style={layoutStyle}>
        {isScreenLg ? (
          <Anchor
            className="anchor"
            offsetTop={76}
            targetOffset={125}
            items={navMenuItems}
          />
        ) : (
          <Menu
            mode="horizontal"
            style={mobileMenuNav}
            items={navMenuItems}
          />
        )}
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