import React, { useState, useEffect, useContext } from 'react';
import { Anchor, Row, Typography, Spin } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { animateScroll } from 'react-scroll';
import MenuItemCard from '../components/MenuItemCard';
import MenuItemModal from '../components/MenuItemModal';
import { MenuItem } from '../types';
import lineImg from '../assets/images/line.png';
import { defaultMenuItem, minWidthLG } from '../assets/defaultData';
import { BagContext } from '../BagContext';
import { BagContextType } from '../types';

const { Title } = Typography;

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

const MenuPage: React.FC = () => {
  const isScreenLG = useMediaQuery({minWidth: minWidthLG});
  const { isDarkMode } = useContext(BagContext) as BagContextType; 
  const [menuItemsArray, setMenuItemsArray] = useState<MenuItem[]>([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>(defaultMenuItem);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const layoutStyle: React.CSSProperties = {
    display: isScreenLG ? 'flex' : 'block',
    padding: isScreenLG ? '0 15% 0 10%' : '0'
  };

  const menuTitleStyle: React.CSSProperties = {
    fontWeight: 600,
    lineHeight: 0.5,
    textAlign: 'center',
    position: 'relative'
  };

  const lineStyle: React.CSSProperties = {
    display: 'flex',
    margin: 'auto',
    height: '16px',
    marginBottom: '30px'
  };

  useEffect(() => {
    animateScroll.scrollTo( 2, { duration: 0 });

    const fetchData = async () => {
      let apiUrl =  import.meta.env.VITE_API_URL;
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/menu`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setMenuItemsArray(result);
      } catch (err) {
        console.log('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (menuItemsArray.length === 0) {
      fetchData();
    }
  }, []);

  const handleModalClose = () => {
    setSelectedMenuItem(defaultMenuItem);
    setIsModalOpen(false);
  };

  const handleMenuItemClicked = (menuItem: MenuItem) => {
    setSelectedMenuItem(menuItem);
    setIsModalOpen(true);
  };

  return (
    <>
      {menuItemsArray.length === 0 || isLoading 
        ?
        <Spin aria-label="loading-spinner" size="large" style={{ width: '100%', marginTop: '7%' }}/>
        :
        <div style={layoutStyle}>
          <Anchor
            className={isDarkMode ? 'anchor-dark' : 'anchor'}
            direction={isScreenLG ? 'vertical': 'horizontal'}
            offsetTop={75}
            targetOffset={125}
            items={navMenuItems}
          />
          <div>
            {navMenuItems.map(navItem => {
              return (
                <div id={navItem.key} key={navItem.key}>
                  <Title level={2} style={menuTitleStyle}>{navItem.title}</Title>
                  <img style={lineStyle} alt="line" src={lineImg} />
                  <Row>
                    {menuItemsArray.filter((item: MenuItem) => item.category === navItem.key).map((menuItem: MenuItem) => {
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
      }
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