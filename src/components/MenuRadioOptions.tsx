import React from 'react';
import { Row, Col, Radio, Divider, Typography, theme } from 'antd';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { CustomOption, MenuItemFormValues } from '../types';

const { Title } = Typography;

type MenuRadioOptionsProps = {
  type: string,
  title: string,
  errors: FieldErrors,
  options: CustomOption[] | undefined,
  control: Control<MenuItemFormValues>
}

const MenuRadioOptions: React.FC<MenuRadioOptionsProps> = (props) => {

  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <>
      <Divider />
      <Title level={4} style={{ marginTop: '10px'}}>{props.title}</Title>
      <span>Required | Select 1 option: </span>
      {props.errors.hasOwnProperty('radio') && <span style={{color: colorPrimary}}>Please make the required selection</span>}
      <Controller
        control={props.control}
        name="radio"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Radio.Group value={value} onChange={(e) => onChange(e.target.value)} style={{ width: '100%', marginTop: '16px' }}>
            <Row gutter={[16, 24]}> 
              {props.options && props.options.map(option => {
                const price = option.price ? option.price : ''
                const radioValue = option.id + '+' + price;
                return (       
                  <Col key={option.id} span={8}>      
                    <Radio aria-label={`${option.id}-radio`} value={radioValue} style={{userSelect: 'none'}}>
                      {option.name} {option.price && '$' + option.price}
                    </Radio>
                  </Col> 
                )
              })}
            </Row>
          </Radio.Group>
        )}
      />
    </>
  );
};

export default MenuRadioOptions;