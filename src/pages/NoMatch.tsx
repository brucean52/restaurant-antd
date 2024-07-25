import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';

const NoMatch: React.FC = () => {

  const removeButtonStyle: React.CSSProperties = {
    borderRadius: 0,
    fontWeight: 600
  }

  const navigate = useNavigate();

  return (
    <div style={{ marginTop: '100px' }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" style={removeButtonStyle} onClick={() => navigate('/')}>BACK HOME</Button>}
      />
    </div>
  );
};

export default NoMatch;