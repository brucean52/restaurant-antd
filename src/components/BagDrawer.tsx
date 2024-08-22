import React, {useState, useContext, Dispatch, SetStateAction} from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfigProvider, Button, Drawer, List, Space, Card, theme, Divider, Select, InputNumber } from 'antd';
import { PhoneFilled, EnvironmentFilled, CloseOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import MenuItemModal from './MenuItemModal';
import DeleteConfirmModal from './DeleteConfirmModal';
import { BagContext } from '../BagContext';
import { BagContextType, BagItem, MenuItem, BagItemOptions } from '../types';
import { defaultMenuItem, defaultBagItemOptions, TAX_RATE, maxWidthXXS } from '../assets/defaultData';

type BagDrawerProps = {
  openDrawer: boolean,
  setOpenDrawer: Dispatch<SetStateAction<boolean>>
};

const defaultDeleteOptions = {
  bagId: '',
  name: ''
};

const BagDrawer: React.FC<BagDrawerProps> = (props) => {
  const isScreenXXS = useMediaQuery({maxWidth: maxWidthXXS});

  const {
    token: { colorPrimary },
  } = theme.useToken();

  const emptyTextStyle: React.CSSProperties = {
    fontSize: '28px',
    color: '#000000',
    marginBottom: '25px'
  };

  const listItemStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  };

  const boldFontStyle: React.CSSProperties = {
    fontWeight: 500
  };

  const mainButtonStyle: React.CSSProperties = {
    borderRadius: 0,
    fontWeight: 600
  };

  const listBtnRowStyle: React.CSSProperties = {
    justifyContent: 'flex-start',
    gap: '10px',
    marginTop: '8px'
  };

  const drawerHeaderStyle: React.CSSProperties = {
    borderBottom: '1px solid rgba(5, 5, 5, 0.12)'
  };

  const drawerBodyStyle: React.CSSProperties = {
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const dividerStyle: React.CSSProperties = {
    borderBlockStart: '1px solid rgba(5, 5, 5, 0.12)'
  };

  const { bag, subtotalText, taxText, totalText, updateItem } = useContext(BagContext) as BagContextType;
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>(defaultMenuItem);
  const [itemOptions, setItemOptions] = useState<BagItemOptions>(defaultBagItemOptions);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteOptions, setDeleteOptions] = useState(defaultDeleteOptions);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [customQuantityValue, setCustomQuantityValue] = useState<number| null>(null);
  const [isCustomQuantityId, setIsCustomQuantityId] = useState('');
  const navigate = useNavigate();

  const closeDrawer = () => {
    setIsCustomQuantityId('');
    props.setOpenDrawer(false);
  };

  const checkoutClicked = () => {
    setIsCustomQuantityId('');
    props.setOpenDrawer(false);
    navigate('/checkout');
  };

  const startOrderClicked = () => {
    setIsCustomQuantityId('');
    props.setOpenDrawer(false);
    navigate('/menu');
  };

  const handleEditModalClose = () => {
    setItemOptions(defaultBagItemOptions);
    setSelectedMenuItem(defaultMenuItem);
    setIsEditModalOpen(false);
  };

  const handleEditItemClicked = (item: BagItem) => {
    const itemOptions: BagItemOptions = {
      bagItemId: item.bagItemId,
      totalItemPrice: item.totalItemPrice,
      quantity: item.quantity,
      specialInstructions: item.specialInstructions,
      radioOption: item.radioOption
    };

    let menuOptions: MenuItem = {
      id: item.id,
      category: item.category,
      imgSrc: item.imgSrc,
      name: item.name,
      description: item.description,
      price: item.price,
      ...(item.dumpling && { dumpling: item.dumpling }),
      ...(item.soup && { soup: item.soup }),
      ...(item.bowl && { bowl: item.bowl }),
      ...(item.protein && { protein: item.protein }),
      ...(item.tea && { tea: item.tea }),
      ...(item.coke && { coke: item.coke })
    };

    setIsCustomQuantityId('');
    setItemOptions(itemOptions);
    setSelectedMenuItem(menuOptions);
    setIsEditModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteOptions(defaultDeleteOptions)
    setIsDeleteModalOpen(false);
  };

  const handleDeleteItemClicked = (item: BagItem) => {
    setIsCustomQuantityId('');
    setDeleteOptions({ bagId: item.bagItemId, name: item.name });
    setIsDeleteModalOpen(true);
  };

  const parseRadioText = (text: string) => {
    let newText = text === 'half-rice' ? '1/2 White, 1/2 Brown Rice' : (
      text.split('-').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ') 
    )
    return newText;
  };

  const submitCustomInputQty = (item: BagItem) => {
    if (customQuantityValue !== null) {
      let updatedItem = {...item}
      let itemPrice = parseFloat(item.price);

      if (item.hasOwnProperty('soup')) {
        let soupItem = item.soup && item.soup.find( option => option.id === item.radioOption)
        itemPrice = parseFloat(soupItem?.price || '')
      } else if (item.hasOwnProperty('protein')) {
        let proteinItem = item.protein && item.protein.find( option => option.id === item.radioOption)
        itemPrice = parseFloat(proteinItem?.price || '')
      }

      updatedItem.quantity = customQuantityValue;
      updatedItem.totalItemPrice = (itemPrice * customQuantityValue).toFixed(2);
      updateItem(updatedItem);
      setCustomQuantityValue(null);
    }
    setIsCustomQuantityId('');
  };

  const qtyValueChange = (item: BagItem, value: string) => {
    if (value !== 'custom') {
      let updatedItem = {...item}
      let itemPrice = parseFloat(item.price);

      if (item.hasOwnProperty('soup')) {
        let soupItem = item.soup && item.soup.find( option => option.id === item.radioOption)
        itemPrice = parseFloat(soupItem?.price || '')
      } else if (item.hasOwnProperty('protein')) {
        let proteinItem = item.protein && item.protein.find( option => option.id === item.radioOption)
        itemPrice = parseFloat(proteinItem?.price || '')
      }

      updatedItem.quantity = parseInt(value);
      updatedItem.totalItemPrice = (itemPrice * parseInt(value)).toFixed(2);
      updateItem(updatedItem);
    } else {
      setCustomQuantityValue(item.quantity);
      setIsCustomQuantityId(item.bagItemId);
    }
  };
 
  const renderDrawerTitle = (
    <Space style={{ justifyContent: 'space-between', width: '100%'}}>
      <span style={{ fontSize: '24px'}}>My Bag</span>
      <Button
        aria-label="close-drawer-button"
        shape="circle"
        size="large"
        icon={<CloseOutlined />}
        onClick={closeDrawer}
      />
    </Space>
  );

  const renderListHeader = (
    <div>
      <div style={{ ...boldFontStyle, fontSize: '20px'}}>New Chopstix Restaurant</div>
      <div><EnvironmentFilled style={{color: colorPrimary}}/> 123 Fake Street, Hayward, CA 94544</div>
      <div><PhoneFilled style={{color: colorPrimary}}/> (510) 555-1234</div>
    </div>
  );

  const renderCostFooter = (
    <Card
      style={{ borderTop: '1px solid rgba(5, 5, 5, 0.12)' }}
      styles={{ body: { padding: 0 }}}
    >
      <div style={{ padding: '16px 16px 0 16px' }}><span style={{...boldFontStyle, fontSize: '18px'}}>Subtotal: ${subtotalText}</span> </div>
      <div style={{ padding: '0 16px 16px 16px' }}>Tax ({TAX_RATE}%): ${taxText}</div>
      <Divider style={{ margin: '6px 0', ...dividerStyle}}/>
      <div style={{ padding: '12px' }}><span style={{ ...boldFontStyle, fontSize: '18px' }}>Total: ${totalText}</span> </div>
    </Card>
  );

  const customRenderEmpty = () => (
    <div style={{ textAlign: 'center', marginTop: '10vh' }}>
      <div style={emptyTextStyle}>Your bag is empty</div>
      <Button
        style={mainButtonStyle}
        aria-label="start-order-button"
        type="primary"
        size="large"
        onClick={() => startOrderClicked()}
      >START YOUR ORDER</Button>
    </div>
  );

  return (
    <>
      <Drawer
        title={renderDrawerTitle}
        placement={'right'}
        closable={false}
        onClose={closeDrawer}
        open={props.openDrawer}
        key={'bag-drawer'}
        styles={{
          header: drawerHeaderStyle,
          body: drawerBodyStyle
        }}
        width={isScreenXXS ? 300 : 378}
      >
        <ConfigProvider renderEmpty={customRenderEmpty}>
          <List
            className="bag-list"
            size="large"
            header={renderListHeader}
            bordered
            dataSource={bag}
            renderItem={(item, index) => (
              <List.Item style={{ display: 'block', borderBottom: '1px solid rgba(5, 5, 5, 0.12)' }}>
                <div style={listItemStyle}>
                  <div style={{ ...boldFontStyle, fontSize: '16px' }}>{item.name}</div>
                  <div style={{ marginTop: '4px' }}>${item.totalItemPrice}</div>
                </div>
                {item.radioOption && <div>{parseRadioText(item.radioOption)}</div>}
                {item.specialInstructions && <div>Note: {item.specialInstructions}</div>}
                <div style={{...listItemStyle, ...listBtnRowStyle}}>
                  {isCustomQuantityId === item.bagItemId ?
                    <Space.Compact style={{ width: '100px' }}>
                      <InputNumber
                        aria-label={`custom-input-qty-${index}`}
                        size="small"
                        controls={false}
                        min={1}
                        value={customQuantityValue}
                        onChange={(value) => setCustomQuantityValue(value)}
                      />
                      <Button
                        aria-label={`update-qty-btn-${index}`}
                        type="primary"
                        size="small"
                        onClick={() => submitCustomInputQty(item)}
                      >Update</Button>
                    </Space.Compact>
                    :
                    <Select
                      aria-label={`select-qty-${index}`}
                      value={`Qty: ${item.quantity}`}
                      onChange={(value) => qtyValueChange(item, value)}
                      size="small"
                      options={[
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                        { value: '3', label: '3' },
                        { value: '4', label: '4' },
                        { value: '5', label: '5' },
                        { value: 'custom', label: '6+' },
                      ]}
                    />
                  }
                  <div aria-label={`edit-item-${index}`} className="bag-modify-text" onClick={() => handleEditItemClicked(item)}>Edit</div>
                  <div aria-label={`delete-item-${index}`} className="bag-modify-text" onClick={() => handleDeleteItemClicked(item)}>Remove</div>
                </div>
              </List.Item>
            )}
          />
        </ConfigProvider>
        {bag.length > 0 &&
          <div>     
            {renderCostFooter}  
            <div>
              <Button
                block
                style={mainButtonStyle}
                aria-label="checkout-button"
                type="primary"
                size="large"
                onClick={() => checkoutClicked()}
              >CHECKOUT</Button>
            </div>
          </div>
        }
      </Drawer>
      <MenuItemModal
        isEdit={true}
        editItemOptions={itemOptions}
        menuItem={selectedMenuItem}
        isModalOpen={isEditModalOpen}
        handleModalClose={handleEditModalClose}
      />
      <DeleteConfirmModal
        deleteItemOptions={deleteOptions}
        isModalOpen={isDeleteModalOpen}
        handleModalClose={handleDeleteModalClose}
      />
    </>
  );
};

export default BagDrawer;