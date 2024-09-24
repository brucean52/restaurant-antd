import React, { useState, useEffect } from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { Input, Button, Row, Col, Modal, Typography, Space, theme } from 'antd';
import { PlusOutlined, MinusOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import MenuRadioOptions from './MenuRadioOptions';
import CustomDivider from './CustomDivider';
import { useAppStore } from '../store/useAppStore';
import { MenuItem, MenuItemFormValues, BagItem, BagItemOptions } from '../types';
import { defaultMenuItemFormValues } from '../assets/defaultData';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

type MenuItemModalProps = {
  isEdit: boolean,
  editItemOptions?: BagItemOptions,
  menuItem: MenuItem,
  isModalOpen: boolean,
  handleModalClose: () => void
};

const MenuItemModal = (props: MenuItemModalProps) => {
  const isScreenXXSCustom = useMediaQuery({maxWidth: 400});
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const {
    isDarkMode,
    addItem,
    updateItem
  } = useAppStore();
  const [totalItemPrice, setTotalItemPrice] =  useState<string>('0.00');

  const { control, handleSubmit, setValue, getValues, reset, formState: { errors } } = useForm<MenuItemFormValues>({
    defaultValues: defaultMenuItemFormValues
  });

  const radioChange = useWatch({ control, name: 'radio' });
  const quantityChange = useWatch({ control, name: 'quantity' });

  const titleStyle: React.CSSProperties = {
    overflow: 'hidden',
    height: '175px',
    width: '100%',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    borderBottom: `${colorPrimary} 6px solid`
  };

  const imgTitleStyle: React.CSSProperties = {
    transform: isScreenXXSCustom ? 'translate(0, -100px)' : 'translate(0, -200px)',
    width: '100%',
  };

  const footerButtonStyle: React.CSSProperties = {
    borderRadius: 0,
    fontWeight: 600
  };

  const placeHolderText = 'Food allergy? Need something put on the side? Let us know. (additional charges may apply and not all changes are possible)'

  useEffect(() => {
    if (props.isEdit && props.editItemOptions) {
      if (props.editItemOptions.radioOption) {
        let radioOption = props.editItemOptions.radioOption && props.editItemOptions.radioOption;
        if (Object.hasOwn(props.menuItem, 'soup')) {
          let soupItem = props.menuItem.soup && props.menuItem.soup.find( item => item.id === radioOption)
          setValue('radio', radioOption + '+' + soupItem?.price);
        } else if (Object.hasOwn(props.menuItem, 'protein')) {
          let proteinItem = props.menuItem.protein && props.menuItem.protein.find( item => item.id === radioOption)
          setValue('radio', radioOption + '+' + proteinItem?.price);
        } else if (Object.hasOwn(props.menuItem, 'rice')) {
          let riceItem = props.menuItem.rice && props.menuItem.rice.find( item => item.id === radioOption)
          let value = radioOption === 'white-rice' ? radioOption + '+' : radioOption + '+' + riceItem?.price
          setValue('radio', value);
        } else {
          setValue('radio', radioOption + '+');
        } 
      }
      setValue('quantity', props.editItemOptions.quantity);
      setValue('specialInstructions', props.editItemOptions.specialInstructions);
    }
  }, [props.isEdit, props.editItemOptions, props.menuItem, setValue]);

  useEffect(() => {
    if (radioChange || quantityChange) {
      let newTotalPrice = calculatePrice();
      setTotalItemPrice(newTotalPrice);
    } else {
      setTotalItemPrice(props.menuItem.price);
    }
  }, [radioChange, quantityChange, props.menuItem.price]);

  const calculatePrice = () => {
    let price = '';
    let priceInt = 0;
    let calcPrice = '';

    if (props.menuItem.category === 'bowls') {
      let addPrice = radioChange.split('+')[1] ? radioChange.split('+')[1] : '';
      price = props.menuItem.price;
      priceInt = addPrice ? parseFloat(price) + parseFloat(addPrice) : parseFloat(price) ;
      calcPrice = (priceInt * quantityChange).toFixed(2);
    } else {
      price = radioChange.split('+')[1] ? radioChange.split('+')[1] : props.menuItem.price;
      priceInt = parseFloat(price);
      calcPrice = (priceInt * quantityChange).toFixed(2);
    }
    return calcPrice;
  }

  const updateInputQty = (event: React.FormEvent<HTMLInputElement>) => {
    if (!/(^[0-9]+$|^$)/.test(event.currentTarget.value)) {
      event.preventDefault();
    } else {
      setValue('quantity', parseInt(event.currentTarget.value) || 0);
    }   
  };

  const updateQty = (action: string) => {
    let qty = getValues('quantity');
    if (action === 'increment') {
      qty = qty + 1;
    } else if (action === 'decrement' && qty !== 0) {
      qty = qty === 1 ? 1 : qty - 1;
    }
    setValue('quantity', qty);
  };

  const closeModal = () => {
    reset();
    props.handleModalClose();
  };

  const onSubmit = (values: MenuItemFormValues) => {
    let newId: string = '';

    if (props.isEdit && props.editItemOptions?.bagItemId) {
      newId = props.editItemOptions.bagItemId;
    } else {
      newId = uuidv4();
    }
    
    const bagItem: BagItem = {
      bagItemId: newId,
      totalItemPrice: totalItemPrice,
      quantity: values.quantity,
      specialInstructions: values.specialInstructions,
      ...props.menuItem,
      ...(values.radio && { radioOption: values.radio.split('+')[0]})
    }

    if (props.isEdit) {
      updateItem(bagItem);
    } else {
      addItem(bagItem);
    }
    
    closeModal();
  };

  const renderModalTitle = props.menuItem.id && (
    <div style={titleStyle}>
      <img
        style={imgTitleStyle}
        alt={props.menuItem.name}
        src={props.menuItem.imgSrc}
      />
    </div>
  );

  const renderOptions = () => {
    if (Object.hasOwn(props.menuItem, 'rice')) {
      return (
        <MenuRadioOptions
          control={control}
          errors={errors}
          type={"rice"}
          title={"Rice Choice"}
          options={props.menuItem.rice}
        />
      )
    } else if (Object.hasOwn(props.menuItem, 'dumpling')) {
        return (
          <MenuRadioOptions
            control={control}
            errors={errors}
            type={"dumpling"}
            title={"Dumpling Type"}
            options={props.menuItem.dumpling}
          />
        )
    } else if (Object.hasOwn(props.menuItem, 'soup')) {
        return (
          <MenuRadioOptions
            control={control}
            errors={errors}
            type={"soup"}
            title={"Soup Size"}
            options={props.menuItem.soup}
          />
        )
    } else if (Object.hasOwn(props.menuItem, 'tea')) {
        return (
          <MenuRadioOptions
            control={control}
            errors={errors}
            type={"tea"}
            title={"Tea Choice"}
            options={props.menuItem.tea}
          />
        )
    } else if (Object.hasOwn(props.menuItem, 'soda')) {
        return (
          <MenuRadioOptions
            control={control}
            errors={errors}
            type={"soda"}
            title={"Soda Choice"}
            options={props.menuItem.soda}
          />
        )
    } else if (Object.hasOwn(props.menuItem, 'protein')) {
        return (
          <MenuRadioOptions
            control={control}
            errors={errors}
            type={"protein"}
            title={"Protein Choice"}
            options={props.menuItem.protein}
          />
        )
    }
  }

  const renderFooter = (
    <div style={{padding: '0px 24px 24px 24px'}}>
      <CustomDivider />
      <Button
        style={footerButtonStyle}
        aria-label="submit-button"
        type="primary"
        size="large"
        htmlType="submit"
        onClick={handleSubmit(onSubmit)}
      >{props.isEdit ? 'Update Item' : 'Add to Bag'} ${totalItemPrice}</Button>
    </div>
  );

  return (
    <Modal
      styles={{content: { padding: 0 }, body: { padding: '0 24px' }}}
      centered
      open={props.isModalOpen}
      onCancel={closeModal}
      title={renderModalTitle}
      width={800}
      closeIcon={<CloseCircleOutlined aria-label="close-item-modal-btn" className="modal-close-icon"/>}
      footer={renderFooter}
    >
      <Title level={2}>{props.menuItem.name}</Title>
      <Paragraph>{props.menuItem.description}</Paragraph>

      {renderOptions()}

      <CustomDivider />
      <Row>
        <Col xs={10} sm={6} md={4}>
          <Title level={4} style={{ marginTop: '10px'}}>Quantity</Title>
        </Col>     
        <Controller
          name="quantity"
          control={control}
          rules={{ required: true, min: 1 }}
          render={({ field: { value } }) => (
            <>
              <Col xs={12} sm={6} md={4} style={{ alignSelf: 'center' }}>
                <Space.Compact style={{ display: 'flex', marginLeft: '20px' }}>
                  <Button
                    aria-label="qty-minus-button"
                    icon={<MinusOutlined />} 
                    onClick={() => updateQty('decrement')} 
                  />
                  <Input
                    aria-label="qty-input"
                    style={{ textAlign: 'center' }}
                    value={value}
                    onChange={(e) => updateInputQty(e)}
                  />
                  <Button
                    aria-label="qty-add-button"
                    icon={<PlusOutlined />}
                    onClick={() => updateQty('increment')}
                  />
                </Space.Compact>       
              </Col>
              {value < 1 && <span style={{ color: colorPrimary, padding: '12px 0 0 12px' }}>Please enter a valid quantity</span>}
            </>
          )}
        />
      </Row>

      <CustomDivider />
      <Title level={4} style={{ marginTop: '10px'}}>Special Instructions</Title>
      <Controller
        name="specialInstructions"
        control={control}
        render={({ field }) => (
          <TextArea
            {...field}
            styles={{ textarea: {
              color: isDarkMode ? '#FFFFFF' : '#000000'}
            }}
            aria-label="special-instructions-textarea"
            rows={2}
            placeholder={placeHolderText}
          /> 
        )}
      />
    </Modal>
  );
};

export default MenuItemModal;