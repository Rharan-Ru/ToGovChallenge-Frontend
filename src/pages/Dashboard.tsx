import React, { useCallback, useEffect, useState } from "react";
import DashboardCards from "../components/Dashboard/DashboardCards";
import { StyledSpace } from "../components/Global/global.styled";
import { handleGetToDos } from "../hooks/todo.hook";
import { ToDoItem } from "../components/ToDo/ToDoCards";

const Dashboard: React.FC = () => {
  const [todos, setTodos] = useState<ToDoItem[]>([]);

  const handleGetToDosCallback = useCallback(async () => {
    const { data, status } = await handleGetToDos();
    if (status === 200) {
      setTodos(data);
    }
  }, []);

  useEffect(() => {
    handleGetToDosCallback();
  }, [handleGetToDosCallback]);
  return (
    <StyledSpace direction="vertical" size="middle">
      <h1>Dashboard</h1>
      <DashboardCards listToDos={todos} />
    </StyledSpace>
  );
};

export default Dashboard;
