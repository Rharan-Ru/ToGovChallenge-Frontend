import React, { useState } from "react";
import { Modal, Form, Input, Button, Select } from "antd";
import { ToDoItem } from "./ToDoCards";

interface TodoCreateProps {
  open: boolean;
  onClose: any;
  onSave: any;
}

const TodoCreateModal: React.FC<TodoCreateProps> = ({
  open,
  onClose,
  onSave,
}) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      const newTodo: Partial<ToDoItem> = {
        title: values.title,
        description: values.description,
        status: values.status,
      };
      onSave(newTodo);
      form.resetFields();
      handleCancel();
    });
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Criar ToDo"
      open={open}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancelar
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Salvar
        </Button>,
      ]}
    >
      <Form form={form}>
        <Form.Item name="title" label="Título" required>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Descrição" required>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="status" label="Status" required>
          <Select>
            <Select.Option value="pending">Pendente</Select.Option>
            <Select.Option value="canceled">Cancelado</Select.Option>
            <Select.Option value="done">Completado</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TodoCreateModal;
