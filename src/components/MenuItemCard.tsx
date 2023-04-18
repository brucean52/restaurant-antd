import React from 'react';
import { Col, Card, Typography, theme } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { MenuItem } from '../types';

const { Title, Paragraph } = Typography;

type MenuItemCardProps = {
  menuItem: MenuItem,
  handleMenuItemClicked: (menuItem: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = (props) => {

  const {
    token: { boxShadowTertiary },
  } = theme.useToken();
  const isScreenXL = useMediaQuery({minWidth: 1200});

  const cardStyle: React.CSSProperties = {
    width: '90%',
    marginLeft: '5%',
    marginBottom: '20px',
    boxShadow: boxShadowTertiary
  }

  const titleTextStyle: React.CSSProperties = {
    margin: 0,
    fontSize: isScreenXL ? '20px' : '16px'
  }

  const priceTextStyle: React.CSSProperties = {
    margin: 0,
    fontSize: isScreenXL ? '14px' : '12px'
  }

  return (
    <Col span={24} sm={12} md={8} style={{border: '1px'}}>
      <Card
        className="menu-item-card"
        aria-label={`${props.menuItem.id}-card`}
        style={cardStyle}
        cover={<img alt={props.menuItem.name} src={props.menuItem.imgSrc} />}
        onClick={() => props.handleMenuItemClicked(props.menuItem)}
      >
        <Title level={4} style={titleTextStyle}>{props.menuItem.name}</Title>
        {props.menuItem.price !== '0.00' &&  <Paragraph style={priceTextStyle}>{"$"+ props.menuItem.price}</Paragraph>}
      </Card>
    </Col>
  );
};

export default MenuItemCard;