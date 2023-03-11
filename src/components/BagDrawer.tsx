import React, {useState, useContext, Dispatch, SetStateAction} from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfigProvider, Button, Drawer, List, Space, Card, theme, Divider } from 'antd';
import { PhoneFilled, EnvironmentFilled, CloseOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import MenuItemModal from './MenuItemModal';
import DeleteConfirmModal from './DeleteConfirmModal';
import { BagContext } from '../BagContext';
import { BagContextType, BagItem, MenuItem, BagItemOptions } from '../types';
import { defaultMenuItem, defaultBagItemOptions, TAX_RATE } from '../assets/defaultData';

type BagDrawerProps = {
  openDrawer: boolean,
  setOpenDrawer: Dispatch<SetStateAction<boolean>>
}

const defaultDeleteOptions = {
  bagId: '',
  name: ''
}

const BagDrawer: React.FC<BagDrawerProps> = (props) => {

  const isScreenXXS = useMediaQuery({maxWidth: 350});

  const {
    token: { colorPrimary },
  } = theme.useToken();

  const emptyTextStyle = {
    fontSize: '28px',
    color: '#000000',
    marginBottom: '25px'
  };

  const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  };

  const boldFontStyle = {
    fontWeight: 500
  }

  const { bag, subtotalText, taxText, totalText } = useContext(BagContext) as BagContextType;
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>(defaultMenuItem);
  const [itemOptions, setItemOptions] = useState<BagItemOptions>(defaultBagItemOptions);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteOptions, setDeleteOptions] = useState(defaultDeleteOptions);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  const checkoutClicked = () => {
    props.setOpenDrawer(false)
    navigate('/checkout');
  };

  const startOrderClicked = () => {
    props.setOpenDrawer(false)
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

    setItemOptions(itemOptions);
    setSelectedMenuItem(menuOptions);
    setIsEditModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteOptions(defaultDeleteOptions)
    setIsDeleteModalOpen(false);
  };

  const handleDeleteItemClicked = (item: BagItem) => {
    setDeleteOptions({ bagId: item.bagItemId, name: item.name });
    setIsDeleteModalOpen(true);
  };

  const parseRadioText = (text: string) => {
    let newText = text === 'half-rice' ? '1/2 White, 1/2 Brown Rice' : (
      text.split('-').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ') 
    )
    return newText;
  };
 
  const renderDrawerTitle = (
    <Space style={{ justifyContent: 'space-between', width: '100%'}}>
      <span style={{ fontSize: '24px'}}>My Bag</span>
      <Button
        aria-label="close-drawer-button"
        shape="circle"
        size="large"
        icon={<CloseOutlined />}
        onClick={() => props.setOpenDrawer(false)}
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
    <Card>
      <div><span style={boldFontStyle}>Subtotal:</span> ${subtotalText}</div>
      <div>Tax ({TAX_RATE}%): ${taxText}</div>
      <Divider style={{ margin: '6px 0'}}/>
      <div><span style={{ ...boldFontStyle, fontSize: '16px' }}>Total:</span> ${totalText}</div>
    </Card>
  );

  const customRenderEmpty = () => (
    <div style={{ textAlign: 'center', marginTop: '10vh' }}>
      <div style={emptyTextStyle}>Your bag is empty</div>
      <Button
        className="primary-btn"
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
        onClose={() => props.setOpenDrawer(false)}
        open={props.openDrawer}
        key={'bag-drawer'}
        bodyStyle={{padding: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
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
              <List.Item style={{ display: 'block'}}>
                <div style={listItemStyle}>
                  <div style={{ ...boldFontStyle, fontSize: '16px' }}>{item.name}</div>
                  <div>${item.totalItemPrice}</div>
                </div>
                {item.radioOption && <div>{parseRadioText(item.radioOption)}</div>}
                {item.specialInstructions && <div>Note: {item.specialInstructions}</div>}
                <div style={{...listItemStyle, justifyContent: 'flex-start', gap: '10px'}}>
                  <div>Quantity: {item.quantity}</div>
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
                className="primary-btn"
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