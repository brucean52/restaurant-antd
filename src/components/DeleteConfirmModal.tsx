import React, { useContext } from 'react';
import { Button, Modal, Typography } from 'antd';
import { BagContext } from '../BagContext';
import { BagContextType } from '../types';

const { Paragraph } = Typography;

type DeleteConfirmModalProps = {
  deleteItemOptions: {
    bagId: string;
    name: string;
  },
  isModalOpen: boolean,
  handleModalClose: () => void
};

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = (props) => {

  const removeButtonStyle: React.CSSProperties = {
    borderRadius: 0,
    fontWeight: 600
  };

  const paragraphStyle: React.CSSProperties = {
    margin: '36px 0 30px 0',
    fontSize: '18px'
  };

  const { deleteItem } = useContext(BagContext) as BagContextType;

  const onSubmit = () => {
    deleteItem(props.deleteItemOptions.bagId);
    props.handleModalClose();
  };

  const renderFooter = (
    <div>
      <Button
        style={{ borderRadius: 0 }}
        aria-label="cancel-button"
        type="text"
        onClick={() => props.handleModalClose()}
      >CANCEL</Button>
      <Button
        style={removeButtonStyle}
        aria-label="remove-button"
        type="primary"
        htmlType="submit"
        onClick={() => onSubmit()}
      >REMOVE</Button>
    </div>
  );

  return (
    <Modal
      style={{ top: 300 }}
      open={props.isModalOpen}
      onCancel={() => props.handleModalClose()}
      width={600}
      closable={false}
      footer={renderFooter}
    >
      <Paragraph style={paragraphStyle}>Are you sure you want to remove <span style={{ fontWeight: 500 }}>{props.deleteItemOptions.name}</span>?</Paragraph>
    </Modal>
  );
};

export default DeleteConfirmModal;