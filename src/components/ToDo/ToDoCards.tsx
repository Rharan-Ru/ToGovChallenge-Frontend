import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { StyledToDoCard } from "./todo.styled";
import { StyledText } from "../Global/global.styled";
import ConfirmationModal from "../Global/ConfirmationModal";
import { handleDeleteToDo, handleEditToDoHook } from "../../hooks/todo.hook";
import TodoDetailsModal from "./TodoDetails";
import { toast } from "react-toastify";
import { ToDoCardsProps, ToDoItem } from "../../types/ToDoTypes";

const statusColor = {
  done: "#52c41a",
  pending: "#faad14",
  canceled: "#f5222d",
};

const statusToPtBr = {
  done: "Concluído",
  pending: "Pendente",
  canceled: "Cancelado",
};

const ToDoCards: React.FC<ToDoCardsProps> = ({
  listItems,
  handleRemoveToDo,
  handleEditToDo,
}) => {
  const [modalDataDelete, setModalDataDelete] = useState({
    open: false,
    title: "",
    content: "",
    onConfirm: () => {},
    onCancel: () => {},
  });

  const [toDoModalDataDetails, setToDoModalDataDetails] = useState({
    open: false,
    todo: null as Partial<ToDoItem> | null,
    onClose: null as any,
    onSave: null as any,
  });

  const handleDetails = async (item: ToDoItem) => {
    setToDoModalDataDetails({
      open: true,
      todo: item,
      onClose: () =>
        setToDoModalDataDetails({ ...toDoModalDataDetails, open: false }),
      onSave: async (todo: Partial<ToDoItem>) => {
        const { status } = await handleEditToDoHook(item.id, todo);
        if (status === 200) {
          toast.success("ToDo atualizado com sucesso!");
          handleEditToDo(item.id, todo);
        }
        setToDoModalDataDetails({ ...toDoModalDataDetails, open: false });
      },
    });
  };

  const handleDelete = async (item: ToDoItem) => {
    setModalDataDelete({
      open: true,
      title: "Delete ToDo",
      content: `Deseja deletar: ${item.title}?`,
      onConfirm: async () => {
        const { status } = await handleDeleteToDo(item.id);
        if (status === 200) {
          handleRemoveToDo(item.id);
          toast.success("ToDo deletado com sucesso!");
        }
        setModalDataDelete({ ...modalDataDelete, open: false });
      },
      onCancel: () => {
        setModalDataDelete({ ...modalDataDelete, open: false });
      },
    });
  };

  return (
    <Row gutter={[16, 16]}>
      {listItems.map((item: ToDoItem) => (
        <Col xs={24} sm={24} md={8}>
          <StyledToDoCard
            backgroundColor={"#f0f2f5"}
            title={item.title}
            bordered={true}
            actions={[
              <Button
                type="text"
                icon={<EditOutlined />}
                onClick={() => handleDetails(item)}
              />,
              <Button
                type="text"
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(item)}
              />,
            ]}
          >
            <StyledText>{item.description}</StyledText>
            <StyledText color={statusColor[item.status]}>
              Status: {statusToPtBr[item.status]}
            </StyledText>
            <StyledText>
              Criado Em: {new Date(item.createdAt).toLocaleString()}
            </StyledText>
            <StyledText>
              Atualizado Em: {new Date(item.updatedAt).toLocaleString()}
            </StyledText>
          </StyledToDoCard>
        </Col>
      ))}
      <ConfirmationModal
        content={modalDataDelete.content}
        onCancel={modalDataDelete.onCancel}
        onConfirm={modalDataDelete.onConfirm}
        open={modalDataDelete.open}
        title={modalDataDelete.title}
      />
      <TodoDetailsModal
        todo={toDoModalDataDetails.todo}
        open={toDoModalDataDetails.open}
        onClose={toDoModalDataDetails.onClose}
        onSave={toDoModalDataDetails.onSave}
      />
    </Row>
  );
};

export default ToDoCards;
