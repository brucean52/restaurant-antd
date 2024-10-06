import React, { useEffect, useState } from 'react';
import { Anchor, Typography, Spin, theme } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { animateScroll } from 'react-scroll';
import NutritionTable from '../components/NutritionTable';
import { minWidthXL, minWidthLG } from '../assets/defaultData';
import { useAppStore } from '../store/UseAppStore';
import { NutritionItem } from '../types';

const { Title } = Typography;

const navNutritionItems = [
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
    title: 'BOWLS'
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
  }
];

const Nutrition = () => {
  const isScreenXL = useMediaQuery({minWidth: minWidthXL});
  const isScreenLG = useMediaQuery({minWidth: minWidthLG});
  const {
    token: {
      boxShadowSecondary
    }
  } = theme.useToken();
  const { isDarkMode } = useAppStore();
  const [nutritionItemsArray, setNutritionItemsArray] = useState<NutritionItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const layoutStyle: React.CSSProperties = {
    display: 'block',
    padding: isScreenXL ? '0 10%' : '0',
    margin: '0 1%'
  };

  const anchorStyle: React.CSSProperties = {
    backgroundColor: isDarkMode ? '#141414': '#FFFFFF',
    boxShadow: boxShadowSecondary
  };

  const nutritionTitleStyle: React.CSSProperties = {
    fontWeight: 600,
    lineHeight: 0.5,
    textAlign: 'center',
    position: 'relative',
    marginBottom: '30px'
  };

  const emptySpaceStyle: React.CSSProperties = {
    width: '100%',
    height: '175px'
  };

  useEffect(() => {
    animateScroll.scrollTo( 2, { duration: 0 });

    const fetchData = async () => {
      let apiUrl =  import.meta.env.VITE_API_URL;
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/nutrition`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setNutritionItemsArray(result);
      } catch (err) {
        console.log('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (nutritionItemsArray.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <>
      {nutritionItemsArray.length === 0 || isLoading 
        ?
        <Spin aria-label="loading-spinner" size="large" style={{ width: '100%', marginTop: '7%' }}/>
        :
        <>
          <Anchor
            className={`${isDarkMode ? 'anchor-dark' : 'anchor'} nutri-anchor`}
            style={anchorStyle}
            direction="horizontal"
            offsetTop={isScreenLG ? 80 : 79}
            targetOffset={135}
            items={navNutritionItems}
          />
          <div style={layoutStyle}>
            <div>
              {navNutritionItems.map(category => {
                return (
                  <div className="nutri-category-section" id={category.key} key={category.key}>
                    <Title level={2} style={nutritionTitleStyle}>{category.title}</Title>
                    <NutritionTable nutritionDataArray={nutritionItemsArray.filter((item)=> item.category === category.key)}/>
                  </div>
                )
              })}
              <div style={emptySpaceStyle}></div>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default Nutrition;
