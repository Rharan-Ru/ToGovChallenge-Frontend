import React from "react";
import { Modal } from "antd";

interface ConfirmationModalProps {
  open: boolean;
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  title,
  content,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      open={open}
      title={title}
      onCancel={onCancel}
      onOk={onConfirm}
      okText="Confirmar"
      cancelText="Cancelar"
    >
      <p>{content}</p>
    </Modal>
  );
};

export default ConfirmationModal;
