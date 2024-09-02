import React, { useContext } from 'react';
import { Divider } from 'antd';
import { BagContext } from '../BagContext';
import { BagContextType } from '../types';

type CustomDividerProps = {
  style?: React.CSSProperties,
};

const CustomDivider: React.FC<CustomDividerProps> = (props) => {
  const { isDarkMode } = useContext(BagContext) as BagContextType; 

  const dividerStyle: React.CSSProperties = {
    borderBlockStart: isDarkMode ? '1px solid rgba(250, 250, 250, 0.12)' :'1px solid rgba(5, 5, 5, 0.12)'
  };

  return (
    <Divider aria-label="divider" style={{ ...dividerStyle, ...props.style }}/>
  );
};

export default CustomDivider;