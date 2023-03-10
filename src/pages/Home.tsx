import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { Button, Typography, Space, theme } from 'antd';
import { PhoneFilled, EnvironmentFilled } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {

  const {
    token: { colorPrimary },
  } = theme.useToken();
  const isScreenXS = useMediaQuery({maxWidth: 576});
  const isScreenMD = useMediaQuery({minWidth: 768});
  const isScreenXL = useMediaQuery({minWidth: 1200});
  const isScreen4K = useMediaQuery({minWidth: 2500});

  const titleStyle: React.CSSProperties = {
    padding: isScreenMD ? '75px 50px' : '50px 25px',
    width: '100%',
    marginTop: isScreen4K ? '50px' : isScreenXL ? '10px' : isScreenMD ? '40px' :'25px'
  }

  const titleTextStyle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: isScreenXL ? '52px' : isScreenMD ? '42px' : '28px'
  }
  
  const aboutStyle: React.CSSProperties = {
    backgroundColor: '#0d0d0d',
    textAlign: 'center',
    padding: isScreen4K ? '24px 20%' : '24px 12%'
  }

  const textStyle: React.CSSProperties = {
    fontSize: '16px'
  }

  const whiteTextStyle: React.CSSProperties = {
    color: '#FFFFFF'
  }

  const subHeaderTextStyle: React.CSSProperties = {
    fontSize: isScreenXL ? '30px' : isScreenMD ? '24px' : '20px'
  }

  const businessMarginStyle: React.CSSProperties = {
    marginLeft: isScreenXS ? '80px' : '95px'
  }

  const locationMarginStyle: React.CSSProperties = {
    marginLeft: isScreenXS ? '50px' : '80px'
  }

  const navigate = useNavigate();

  const aboutText = "New Chopstix is a restaurant that is dedicated to serving fresh asian cuisine. " +
  "Since inception, our chefs have been hand chopping and slicing every vegetable and meat, scratch cooking every sauce and wok-cooking each dish with the same standard of perfection. " +
  "Our menu is full of high quality, never frozen items that feature bold, authentic flavors. Come and experience our exceptional service in our contemporary dining room. ";

  return (
    <>
      <div className="home-banner">
        <Space direction="vertical" align="center" style={titleStyle}>
          <Title level={1} style={{ ...whiteTextStyle, ...titleTextStyle }}>NEW CHOPSTIX RESTAURANT</Title>
          <Button
            className="primary-btn"
            type="primary"
            size="large"
            onClick={() => navigate('/menu')}
          >ORDER NOW</Button>
        </Space>
      </div>
      <div style={aboutStyle}>
        <Title className="header" level={2} style={{ ...whiteTextStyle, marginTop: 0, ...subHeaderTextStyle }}>ABOUT</Title>
        <Paragraph style={{ ...textStyle, ...whiteTextStyle }}>{aboutText}</Paragraph>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <div style={businessMarginStyle}>
        <Title level={2} style={subHeaderTextStyle}>BUSINESS HOURS</Title>
          <Paragraph style={textStyle}>Mon: Closed</Paragraph>
          <Paragraph style={textStyle}>Tues - Sun: 11:00AM - 9:30PM</Paragraph>
        </div>
        <div style={locationMarginStyle}>
        <Title level={2} style={subHeaderTextStyle}>LOCATION</Title>
          <Paragraph style={textStyle}><EnvironmentFilled style={{color: colorPrimary}}/> 123 Fake Street, Hayward, CA 94544</Paragraph>
          <Paragraph style={textStyle}><PhoneFilled style={{color: colorPrimary}}/> (510) 555-1234</Paragraph>
        </div>
      </div>
    </>
  );
};

export default Home;