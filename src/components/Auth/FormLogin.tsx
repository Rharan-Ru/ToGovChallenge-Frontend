import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { handleLogin, TypeLoginData } from "../../hooks/login.hook";
import { toast } from "react-toastify";
import { StyledLoginForm } from "./auth.styled";

const FormLogin: React.FC = () => {
  const onFinish = async (values: TypeLoginData) => {
    const { email, password, remember } = values;

    const { status } = await handleLogin({ email, password, remember });

    if (status === 201) {
      window.location.href = "/dashboard";
      return;
    }
  };

  return (
    <StyledLoginForm
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: localStorage.getItem("remember") === "true",
        email:
          localStorage.getItem("remember") === "true"
            ? localStorage.getItem("email")
            : "",
      }}
      onFinish={(values: unknown) => onFinish(values as TypeLoginData)}
    >
      <Typography.Title
        level={4}
        style={{ textAlign: "center", padding: "5px" }}
      >
        Faça login para acessar o sistema
      </Typography.Title>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Lembrar-me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: "100%", marginTop: "10px" }}
        >
          Entrar
        </Button>
      </Form.Item>
    </StyledLoginForm>
  );
};

export default FormLogin;
