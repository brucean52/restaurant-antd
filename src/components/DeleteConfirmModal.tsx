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
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = (props) => {

  const { deleteItem } = useContext(BagContext) as BagContextType;

  const onSubmit = () => {
    deleteItem(props.deleteItemOptions.bagId);
    props.handleModalClose();
  }

  const renderFooter = (
    <div>
      <Button
        className="cancel-btn-text"
        aria-label="cancel-button"
        type="text"
        onClick={() => props.handleModalClose()}
      >CANCEL</Button>
      <Button
        className="primary-btn"
        aria-label="remove-button"
        type="primary"
        htmlType="submit"
        onClick={() => onSubmit()}
      >REMOVE</Button>
    </div>
  );

  return (
    <Modal
      style={{ top: 200 }}
      open={props.isModalOpen}
      onCancel={() => props.handleModalClose()}
      title="Remove Item"
      width={500}
      closable
      footer={renderFooter}
    >
      <Paragraph style={{padding: '24px 0'}}>Are you sure you want to remove {props.deleteItemOptions.name}?</Paragraph>
    </Modal>
  );
};

export default DeleteConfirmModal;