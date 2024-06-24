import React, { useCallback, useEffect, useState } from "react";
import { StyledSpace } from "../components/Global/global.styled";
import { Button } from "antd";
import ToDoCards, { ToDoItem } from "../components/ToDo/ToDoCards";
import { handleCreateToDo, handleGetToDos } from "../hooks/todo.hook";
import { toast } from "react-toastify";
import TodoCreateModal from "../components/ToDo/TodoCreate";

const ToDo: React.FC = () => {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const [toDoModalData, setToDoModalData] = useState({
    open: false,
    onClose: null as any,
    onSave: null as any,
  });

  const getTodosCallback = useCallback(async () => {
    const { data } = await handleGetToDos();
    setTodos(data);
  }, []);

  useEffect(() => {
    getTodosCallback();
  }, [getTodosCallback]);

  const handleCreateTodo = async () => {
    setToDoModalData({
      open: true,
      onClose: () => setToDoModalData({ ...toDoModalData, open: false }),
      onSave: async (todo: Partial<ToDoItem>) => {
        const { status } = await handleCreateToDo(todo);
        if (status === 201) {
          getTodosCallback();
          toast.success("ToDo criado com sucesso!");
        }
      },
    });
  };

  const handleRemoveToDo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEditToDo = (id: string, data: Partial<ToDoItem>) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...data } : todo))
    );
  };

  return (
    <StyledSpace direction="vertical" size="middle">
      <h1>ToDo</h1>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button onClick={handleCreateTodo}>Create New Todo</Button>
      </div>
      {todos.length > 0 && (
        <ToDoCards
          listItems={todos}
          handleRemoveToDo={handleRemoveToDo}
          handleEditToDo={handleEditToDo}
        />
      )}
      <TodoCreateModal
        open={toDoModalData.open}
        onClose={toDoModalData.onClose}
        onSave={toDoModalData.onSave}
      />
    </StyledSpace>
  );
};

export default ToDo;
