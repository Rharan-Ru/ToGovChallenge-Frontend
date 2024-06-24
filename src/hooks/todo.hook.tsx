import { toast } from "react-toastify";
import { ToDoItem } from "../components/ToDo/ToDoCards";
import instance from "../config/api";

export const handleGetToDos = async () => {
  try {
    const response = await instance.get("/todo");
    return response;
  } catch (error) {
    const {
      data: { message },
      statusText,
    } = error.response;
    toast.error(`Erro: ${message || statusText}`);
    return error.response;
  }
};

export const handleDeleteToDo = async (id: string) => {
  try {
    const response = await instance.delete(`/todo/${id}`);
    return response;
  } catch (error) {
    const {
      data: { message },
      statusText,
    } = error.response;
    toast.error(`Erro: ${message || statusText}`);
    return error.response;
  }
};

export const handleCreateToDo = async (data: Partial<ToDoItem>) => {
  try {
    const response = await instance.post("/todo", data);
    return response;
  } catch (error) {
    const {
      data: { message },
      statusText,
    } = error.response;
    toast.error(`Erro: ${message || statusText}`);
    return error.response;
  }
};

export const handleEditToDoHook = async (
  id: string,
  data: Partial<ToDoItem>
) => {
  try {
    const response = await instance.put(`/todo/${id}`, data);
    return response;
  } catch (error) {
    const {
      data: { message },
      statusText,
    } = error.response;
    toast.error(`Erro: ${message || statusText}`);
    return error.response;
  }
};
