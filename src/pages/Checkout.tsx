import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Row, Button, Col, Input, Card, Divider, List, theme } from 'antd';
import { PhoneFilled, EnvironmentFilled } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { BagContext } from '../BagContext';
import { BagContextType } from '../types';
import { TAX_RATE, minWidthMD, minWidthLG } from '../assets/defaultData';
import useBagDrawer from '../hooks/UseBagDrawer';

const { Title } = Typography

const Checkout: React.FC = () => {
  const isScreenMD = useMediaQuery({minWidth: minWidthMD});
  const isScreenLG = useMediaQuery({minWidth: minWidthLG});
  const {
    token: { colorPrimary, boxShadowTertiary },
  } = theme.useToken();

  const layoutStyle: React.CSSProperties = {
    padding: isScreenLG ? '0 15%' : '0 5%'
  };

  const cardStyle: React.CSSProperties = {
    width: '100%',
    marginBottom: '20px',
    boxShadow: boxShadowTertiary
  }

  const listItemStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  };

  const boldFontStyle: React.CSSProperties = {
    fontWeight: 500
  }

  const titleTextStyle: React.CSSProperties = {
    fontSize: isScreenMD ? '38px' : '32px',
    lineHeight: 0.5,
    textAlign: 'center',
    position: 'relative',
    marginBottom: '30px'
  }

  const orderButtonStyle: React.CSSProperties = {
    borderRadius: 0,
    fontWeight: 600
  }

  const { bag, subtotalText, taxText, totalText } = useContext(BagContext) as BagContextType;
  const {setOpenDrawer} = useBagDrawer();

  const parseRadioText = (text: string) => {
    let newText = text === 'half-rice' ? '1/2 White, 1/2 Brown Rice' : (
      text.split('-').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    )
    return newText;
  };

  return (
    <div style={layoutStyle}>
      <Title level={1} style={titleTextStyle}>CHECKOUT</Title>
      <Row>
        <Col span={24} lg={12}>
          <Card title={<Title level={3}>Guest Information</Title>} style={cardStyle}>
            <Row gutter={[24, 24]}>
              <Col span={11} >
                <Input disabled placeholder="First Name"/>
              </Col>
              <Col span={11} offset={1}>
                <Input disabled placeholder="Last Name"/>
              </Col>
              <Col span={11}>
                <Input disabled placeholder="Email"/>
              </Col>
              <Col span={11} offset={1}>
                <Input disabled placeholder="Phone"/>
              </Col>
            </Row>
          </Card>

          <Card title={<Title level={3}>Credit Card Information</Title>} style={cardStyle}>
            <Row gutter={[24, 24]}>
              <Col span={11} >
                <Input disabled placeholder="Credit Card Number"/>
              </Col>
              <Col span={11} offset={1}>
                <Input disabled placeholder="MM/YY"/>
              </Col>
              <Col span={11}>
                <Input disabled placeholder="CVV"/>
              </Col>
              <Col span={11} offset={1}>
                <Input disabled placeholder="Zip Code"/>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={24} offset={isScreenLG ? 3 : 0} lg={9}>
          <Card
            title={<Title level={3}>Order Details</Title>}
            extra={<Link to="/menu" onClick={() => setOpenDrawer(true)}>Edit Order</Link>}
            style={{...cardStyle}}
          >
            <div>
              <div style={{ ...boldFontStyle, fontSize: '20px'}}>New Chopstix Restaurant</div>
              <div><EnvironmentFilled style={{color: colorPrimary}}/> 123 Fake Street, Hayward, CA 94544</div>
              <div><PhoneFilled style={{color: colorPrimary}}/> (510) 555-1234</div>
            </div>
            <Divider style={{ margin: '6px 0'}}/>

            <List
              style={{border: 'none'}}
              size="large"
              bordered
              dataSource={bag}
              renderItem={(item) => (
                <List.Item style={{ display: 'block', padding: '18px 0'}}>
                  <div style={listItemStyle}>
                    <div style={{ ...boldFontStyle, fontSize: '16px' }}>{item.name}</div>
                    <div>${item.totalItemPrice}</div>
                  </div>
                  {item.radioOption && <div>{parseRadioText(item.radioOption)}</div>}
                  {item.specialInstructions && <div>Note: {item.specialInstructions}</div>}
                  <div style={{...listItemStyle, justifyContent: 'flex-start', gap: '10px'}}>
                    <div>Quantity: {item.quantity}</div>
                  </div>
                  
                </List.Item>
              )}
            />

            <Divider style={{ margin: '6px 0'}}/>
            <div><span style={boldFontStyle}>Subtotal:</span> ${subtotalText}</div>
            <div>Tax ({TAX_RATE}%): ${taxText}</div>
            <Divider style={{ margin: '6px 0'}}/>
            <div style={{ marginBottom: '18px' }}><span style={{ ...boldFontStyle, fontSize: '16px', }}>Total:</span> ${totalText}</div>
            <Button
              style={orderButtonStyle}
              type="primary"
              size="large"
              disabled
            >PLACE ORDER</Button>
          </Card>
        </Col>
      </Row>      
    </div>
  );
};

export default Checkout;