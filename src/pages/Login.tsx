import React from "react";
import FormLogin from "../components/Auth/FormLogin";
import ImageLogin from "../components/Auth/ImageLogin";
import { StyledLoginCol, StyledLoginRow } from "../components/Auth/auth.styled";

const LoginPage: React.FC = () => {
  return (
    <StyledLoginRow
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{ margin: 0 }}
    >
      <StyledLoginCol
        backgroundColor="#fec2de"
        md={14}
        sm={14}
        lg={14}
        xl={14}
        hidden={true}
      >
        <ImageLogin />
      </StyledLoginCol>
      <StyledLoginCol
        backgroundColor="#e2f9ff"
        xs={24}
        md={10}
        sm={10}
        lg={10}
        xl={10}
      >
        <FormLogin />
      </StyledLoginCol>
    </StyledLoginRow>
  );
};

export default LoginPage;
