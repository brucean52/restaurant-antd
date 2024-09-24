import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Row, Button, Col, Input, Card, List, theme } from 'antd';
import { PhoneFilled, EnvironmentFilled } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import CustomDivider from '../components/CustomDivider';
import { useAppStore } from '../store/useAppStore';
import { TAX_RATE, minWidthMD, minWidthLG } from '../assets/defaultData';
import useBagDrawer from '../hooks/UseBagDrawer';
import lineImg from '../assets/images/line.png';

const { Title } = Typography;

const Checkout = () => {
  const isScreenMD = useMediaQuery({minWidth: minWidthMD});
  const isScreenLG = useMediaQuery({minWidth: minWidthLG});
  const {
    token: { colorPrimary, boxShadowSecondary },
  } = theme.useToken();
  const {
    isDarkMode,
    bag,
    subtotalText,
    taxText,
    totalText
  } = useAppStore();
  const {setOpenDrawer} = useBagDrawer();

  const borderStyle = isDarkMode ? '1px solid rgba(250, 250, 250, 0.12)' :'1px solid rgba(5, 5, 5, 0.12)';

  const layoutStyle: React.CSSProperties = {
    padding: isScreenLG ? '0 15%' : '0 5%'
  };

  const cardStyle: React.CSSProperties = {
    width: '100%',
    marginBottom: '30px',
    boxShadow: boxShadowSecondary 
  };

  const cardHeaderStyle: React.CSSProperties = {
    borderBottom: borderStyle
  };

  const listItemStyle: React.CSSProperties = {
    display: 'block',
    padding: '16px 22px',
    borderBottom: borderStyle
  };

  const listItemTextStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  };

  const boldFontStyle: React.CSSProperties = {
    fontWeight: 500
  };

  const titleTextStyle: React.CSSProperties = {
    fontSize: isScreenMD ? '38px' : '32px',
    lineHeight: 0.5,
    textAlign: 'center',
    position: 'relative'
  };

  const orderButtonStyle: React.CSSProperties = {
    borderRadius: 0,
    fontWeight: 600,
    width: '100%'
  };

  const lineStyle: React.CSSProperties = {
    display: 'flex',
    margin: 'auto',
    height: '18px',
    marginBottom: '48px'
  };

  const parseRadioText = (text: string) => {
    let newText = text === 'half-rice' ? '1/2 White, 1/2 Brown Rice' : (
      text.split('-').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    )
    return newText;
  };

  return (
    <div style={layoutStyle}>
      <Title level={1} style={titleTextStyle}>CHECKOUT</Title>
      <img style={lineStyle} alt="line" src={lineImg} />
      <Row>
        <Col span={24} lg={12}>
          <Card
            title={<Title level={3}>Guest Information</Title>}
            style={cardStyle}
            styles={{header: cardHeaderStyle}}
          >
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

          <Card
            title={<Title level={3}>Credit Card Information</Title>}
            style={cardStyle}
            styles={{header: cardHeaderStyle}}
          >
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
            styles={{header: cardHeaderStyle, body: { padding: 0 }}}
          >
            <div style={{ padding: '22px'}}>
              <div style={{ ...boldFontStyle, fontSize: '20px'}}>New Chopstix Restaurant</div>
              <div><EnvironmentFilled style={{color: colorPrimary}}/> 123 Fake Street, Hayward, CA 94544</div>
              <div><PhoneFilled style={{color: colorPrimary}}/> (510) 555-1234</div>
            </div>
            <CustomDivider style={{ margin: '6px 0' }}/>
            <List
              style={{border: 'none'}}
              size="large"
              bordered
              dataSource={bag}
              renderItem={(item) => (
                <List.Item style={listItemStyle}>
                  <div style={listItemTextStyle}>
                    <div style={{ ...boldFontStyle, fontSize: '16px' }}>{item.name}</div>
                    <div>${item.totalItemPrice}</div>
                  </div>
                  {item.radioOption && <div>{parseRadioText(item.radioOption)}</div>}
                  {item.specialInstructions && <div>Note: {item.specialInstructions}</div>}
                  <div style={{...listItemTextStyle, justifyContent: 'flex-start', gap: '10px'}}>
                    <div>Qty : {item.quantity}</div>
                  </div>
                </List.Item>
              )}
            />
            <div style={{ padding: '8px 22px 0 22px'}}>
              <span style={{ ...boldFontStyle, fontSize: '18px' }}>Subtotal: ${subtotalText}</span>
            </div>
            <div style={{ padding: '0 22px 8px 22px'}}>Tax ({TAX_RATE}%): ${taxText}</div>
            <CustomDivider style={{ margin: '6px 0' }}/>
            <div style={{ padding: '16px 22px' }}>
              <span style={{ ...boldFontStyle, fontSize: '18px' }}>Total: ${totalText}</span>
            </div>
            <Button
              style={orderButtonStyle}
              type="primary"
              size="large"
            >PLACE ORDER</Button>
          </Card>
        </Col>
      </Row>      
    </div>
  );
};

export default Checkout;