import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Select } from "antd";
import { ToDoItem } from "./ToDoCards";
import { Store } from "antd/es/form/interface";

interface TodoDetailsProps {
  todo: Partial<ToDoItem> | null;
  open: boolean;
  onClose: any;
  onSave: any;
}

const TodoDetailsModal: React.FC<TodoDetailsProps> = ({
  todo,
  open,
  onClose,
  onSave,
}) => {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    form.validateFields().then((values) => {
      const updatedTodo: Partial<ToDoItem> = {
        ...todo,
        title: values.title,
        description: values.description,
        status: values.status,
      };
      onSave(updatedTodo);
      form.resetFields();
      handleCancel();
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsEditing(false);
    onClose();
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    form.setFieldsValue(todo);
  }, [todo]);

  return (
    <Modal
      title={isEditing ? "Editar ToDo" : "Detalhes da ToDo"}
      open={open}
      onCancel={handleCancel}
      footer={[
        !isEditing && (
          <Button key="edit" onClick={handleEdit}>
            Editar
          </Button>
        ),
        <Button key="cancel" onClick={handleCancel}>
          Cancelar
        </Button>,
        isEditing && (
          <Button key="save" type="primary" onClick={handleSave}>
            Salvar
          </Button>
        ),
      ]}
    >
      <Form form={form} initialValues={todo as Store}>
        <Form.Item name="title" label="Título">
          <Input disabled={!isEditing} />
        </Form.Item>
        <Form.Item name="description" label="Descrição">
          <Input.TextArea disabled={!isEditing} />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select disabled={!isEditing}>
            <Select.Option value="pending">Pendente</Select.Option>
            <Select.Option value="canceled">Cancelado</Select.Option>
            <Select.Option value="done">Completado</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TodoDetailsModal;
