import React from 'react';
import { Divider } from 'antd';
import { useAppStore } from '../store/useAppStore';

type CustomDividerProps = {
  style?: React.CSSProperties,
};

const CustomDivider = (props: CustomDividerProps) => {
  const { isDarkMode } = useAppStore();

  const dividerStyle: React.CSSProperties = {
    borderBlockStart: isDarkMode ? '1px solid rgba(250, 250, 250, 0.12)' :'1px solid rgba(5, 5, 5, 0.12)'
  };

  return (
    <Divider aria-label="divider" style={{ ...dividerStyle, ...props.style }}/>
  );
};

export default CustomDivider;