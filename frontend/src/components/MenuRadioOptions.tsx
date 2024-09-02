import React, { useEffect, useState } from 'react';
import { Row, Col, Radio, Typography, theme } from 'antd';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import CustomDivider from './CustomDivider';
import { defaultCustomOption } from '../assets/defaultData';
import { CustomOption, MenuItemFormValues, ProteinType } from '../types';

const { Title } = Typography;

type MenuRadioOptionsProps = {
  type: string,
  title: string,
  errors: FieldErrors,
  options: CustomOption[] | undefined,
  control: Control<MenuItemFormValues>
};

const MenuRadioOptions: React.FC<MenuRadioOptionsProps> = (props) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const [sortedRadioOptions, setSortedRadioOptions] = useState<CustomOption[]>([]);

  useEffect(() => {
    if (props.options) {
      let newSortedOptions: CustomOption[] = [...props.options]
      switch(props.type) {
        case 'rice':
        case 'soup':
          let lastOption = newSortedOptions.pop() || defaultCustomOption;
          newSortedOptions.unshift(lastOption)
          break;
        case 'protein':
          let orderMap: Record<ProteinType, number> = {
            vegetable: 0,
            chicken: 1, 
            shrimp: 2,  
            beef: 3,
            pork: 4,
            combo: 5
          };
          newSortedOptions.sort((a, b) => orderMap[a.id as ProteinType] - orderMap[b.id as ProteinType]);
          break;
        default:
      }
      setSortedRadioOptions(newSortedOptions);
    }
  }, [props.options]);

  return (
    <>
      <CustomDivider />
      <Title level={4} style={{ marginTop: '10px'}}>{props.title}</Title>
      <span>Required | {props.type === 'rice' ? 'Substitute white rice at an additional cost' : 'Select 1 option: '}</span>
      {Object.hasOwn(props.errors, 'radio') && <span style={{color: colorPrimary, marginLeft: '8px'}}>Please make the required selection</span>}
      <Controller
        control={props.control}
        name="radio"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Radio.Group value={value} onChange={(e) => onChange(e.target.value)} style={{ width: '100%', marginTop: '16px' }}>
            <Row gutter={[16, 24]}> 
              {sortedRadioOptions.map(option => {
                const price = option.price !== '0.00' ? option.price : ''
                const radioValue = option.id + '+' + price;
                return (       
                  <Col key={option.id} span={8}>      
                    <Radio aria-label={`${option.id}-radio`} value={radioValue} style={{userSelect: 'none'}}>
                      {option.name} {price && '$' + option.price}
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