import React, { useState, useEffect, useContext } from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { Input, Divider, Button, Row, Col, InputNumber, Modal, Typography, Space } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import MenuRadioOptions from './MenuRadioOptions';
import { BagContext } from '../BagContext';
import { MenuItem, MenuItemFormValues, BagItem, BagContextType, BagItemOptions } from '../types';
import { defaultMenuItemFormValues } from '../assets/defaultData';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

type MenuItemModalProps = {
  isEdit: boolean,
  editItemOptions?: BagItemOptions,
  menuItem: MenuItem,
  isModalOpen: boolean,
  handleModalClose: () => void
}

const MenuItemModal: React.FC<MenuItemModalProps> = (props) => {

  const titleStyle: React.CSSProperties = {
    overflow: 'hidden',
    height: '175px',
    width: '100%',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px'
  }

  const imgTitleStyle: React.CSSProperties = {
    transform: 'translate(0, -200px)',
    width: '100%',
  }

  const footerButtonStyle: React.CSSProperties = {
    borderRadius: 0,
    fontWeight: 600
  }

  const { addItem, updateItem } = useContext(BagContext) as BagContextType;
  const [totalItemPrice, setTotalItemPrice] =  useState<string>('0.00');

  const { control, handleSubmit, setValue, getValues, reset, formState: { errors } } = useForm<MenuItemFormValues>({
    defaultValues: defaultMenuItemFormValues
  });

  const radioChange = useWatch({ control, name: 'radio' });
  const quantityChange = useWatch({ control, name: 'quantity' });

  const placeHolderText = 'Food allergy? Need something put on the side? Let us know. (additional charges may apply and not all changes are possible)'

  useEffect(() => {
    if (props.isEdit && props.editItemOptions) {
      if (props.editItemOptions.radioOption) {
        let radioOption = props.editItemOptions.radioOption && props.editItemOptions.radioOption;
        if (props.menuItem.hasOwnProperty('soup')) {
          let soupItem = props.menuItem.soup && props.menuItem.soup.find( item => item.id === radioOption)
          setValue('radio', radioOption + '+' + soupItem?.price);
        } else if (props.menuItem.hasOwnProperty('protein')) {
          let proteinItem = props.menuItem.protein && props.menuItem.protein.find( item => item.id === radioOption)
          setValue('radio', radioOption + '+' + proteinItem?.price);
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
      let price = radioChange.split('+')[1] ? radioChange.split('+')[1] : props.menuItem.price;
      let priceInt = parseFloat(price);
      let calcPrice = (priceInt * quantityChange).toFixed(2);
      setTotalItemPrice(calcPrice);
    } else {
      setTotalItemPrice(props.menuItem.price);
    }
  }, [radioChange, quantityChange, props.menuItem.price]);

  const closeModal = () => {
    reset();
    props.handleModalClose();
  }

  const onSubmit = (values: MenuItemFormValues) => {
    let price = values.radio.split('+')[1] ? values.radio.split('+')[1] : props.menuItem.price;
    let priceInt = parseFloat(price);
    let calcPrice = (priceInt * values.quantity).toFixed(2);
    let newId: string = '';
    if (props.isEdit && props.editItemOptions?.bagItemId) {
      newId = props.editItemOptions.bagItemId;
    } else {
      newId = uuidv4();
    }
    
    const bagItem: BagItem = {
      bagItemId: newId,
      totalItemPrice: calcPrice,
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
  }

  const renderModalTitle = props.menuItem.id && (
    <div style={titleStyle}>
      <img
        style={imgTitleStyle}
        alt={props.menuItem.name}
        src={props.menuItem.imgSrc}
      />
    </div>
  );

  const renderBowlOptions = props.menuItem.hasOwnProperty('bowl') && (
    <MenuRadioOptions
      control={control}
      errors={errors}
      type={"bowl"}
      title={"Rice Choice"}
      options={props.menuItem.bowl}
    />
  );

  const renderDumplingOptions = props.menuItem.hasOwnProperty('dumpling') && (
    <MenuRadioOptions
      control={control}
      errors={errors}
      type={"dumpling"}
      title={"Dumpling Type"}
      options={props.menuItem.dumpling}
    />
  );

  const renderSoupOptions = props.menuItem.hasOwnProperty('soup') && (
    <MenuRadioOptions
      control={control}
      errors={errors}
      type={"soup" }
      title={"Soup Size"}
      options={props.menuItem.soup}
    />
  );

  const renderTeaOptions = props.menuItem.hasOwnProperty('tea') && (
    <MenuRadioOptions
      control={control}
      errors={errors}
      type={"tea" }
      title={"Tea Choice"}
      options={props.menuItem.tea}
    />
  );

  const renderCokeOptions = props.menuItem.hasOwnProperty('coke') && (
    <MenuRadioOptions
      control={control}
      errors={errors}
      type={"coke" }
      title={"Soda Choice"}
      options={props.menuItem.coke}
    />
  );

  const renderProteinOptions = props.menuItem.hasOwnProperty('protein') && (
    <MenuRadioOptions
      control={control}
      errors={errors}
      type={"protein"}
      title={"Protein Choice"}
      options={props.menuItem.protein}
    />
  );

  const renderFooter = (
    <div style={{padding: '0px 24px 24px 24px'}}>
      <Divider />
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

      {renderBowlOptions}
      {renderDumplingOptions}
      {renderSoupOptions}
      {renderProteinOptions}
      {renderTeaOptions}
      {renderCokeOptions}

      <Divider />
      <Row>
        <Col span={4}>
          <Title level={4} style={{ marginTop: '10px'}}>Quantity</Title>
        </Col>     
        <Controller
          name="quantity"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Col span={4} style={{ alignSelf: 'center' }}>
              <Space.Compact style={{display: 'flex', marginLeft: '20px'}}>
                <InputNumber
                  aria-label="qty-input"
                  type="number"
                  min={1}
                  value={value}
                  onChange={(e) => onChange(e)}
                />
              </Space.Compact>        
            </Col>
            )}
        />
      </Row>

      <Divider />
      <Title level={4} style={{ marginTop: '10px'}}>Special Instructions</Title>
      <Controller
        name="specialInstructions"
        control={control}
        render={({ field }) => (
          <TextArea
            {...field}
            styles={{ textarea: {
              color: 'rgba(0, 0, 0, 0.5)'}
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