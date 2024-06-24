import React from "react";
import { Image, Typography } from "antd";
import loginImage from "../../assets/login.png";

const ImageLogin: React.FC = () => {
  return (
    <>
      <Typography.Title level={2}>Bem-Vindo de volta!</Typography.Title>
      <Image src={loginImage} preview={false} />
    </>
  );
};

export default ImageLogin;
