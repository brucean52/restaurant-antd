import React from 'react';
import { Anchor, Typography, theme } from 'antd';
import NutritionTable from '../components/NutritionTable';
import { useMediaQuery } from 'react-responsive';
import { minWidthXL } from '../assets/defaultData';
import { nutritionDataArray } from '../assets/nutritionData';

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

const Nutrition: React.FC = () => {
  const isScreenXL = useMediaQuery({minWidth: minWidthXL});
  const {
    token: {
      colorBgLayout,
      boxShadowSecondary
    }
  } = theme.useToken();

  const layoutStyle: React.CSSProperties = {
    display: 'block',
    padding: isScreenXL ? '0 10%' : '0',
    margin: '0 1%'
  }

  const nutritionTitleStyle: React.CSSProperties = {
    fontWeight: 600,
    lineHeight: 0.5,
    textAlign: 'center',
    position: 'relative',
    marginBottom: '30px'
  }

  const emptySpaceStyle: React.CSSProperties = {
    width: '100%',
    height: '175px'
  }

  return (
    <>
    <Anchor
      className="anchor nutri-anchor"
      style={{ backgroundColor: colorBgLayout, boxShadow: boxShadowSecondary }}
      direction="horizontal"
      offsetTop={80}
      targetOffset={135}
      items={navNutritionItems}
    />
    <div style={layoutStyle}>
      <div>
        {navNutritionItems.map(category => {
          return (
            <div className="nutri-category-section" id={category.key} key={category.key}>
              <Title level={2} style={nutritionTitleStyle}>{category.title}</Title>
              <NutritionTable nutritionDataArray={nutritionDataArray.filter((item)=> item.category === category.key)}/>
            </div>
          )
        })}
        <div style={emptySpaceStyle}></div>
      </div>
    </div>
    </>

  );
};

export default Nutrition;
