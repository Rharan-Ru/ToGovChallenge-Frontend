import { toast } from "react-toastify";
import instance from "../config/api";

export type TypeLoginData = {
  email: string;
  password: string;
  remember: boolean;
};

export const handleLogin = async ({
  email,
  password,
  remember,
}: TypeLoginData) => {
  try {
    const response = await instance.post("/auth/login", { email, password });
    const { data } = response;
    localStorage.setItem("token", data);
    if (remember) {
      localStorage.setItem("email", email);
      localStorage.setItem("remember", remember.toString());
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("remember");
    }
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

export const handleLogoutHook = () => {
  localStorage.removeItem("token");
};
