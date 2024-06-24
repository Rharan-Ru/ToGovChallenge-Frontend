import { Col, Form, Row } from "antd";
import styled from "styled-components";

export const StyledLoginRow = styled(Row)`
  margin: 0;
  height: 100vh;
`;

export const StyledLoginCol = styled(Col)<{
  backgroundColor?: string;
  hidden?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.backgroundColor};
  @media (max-width: 575px) {
    display: ${(props) => props.hidden && "none"};
  }
`;

export const StyledLoginForm = styled(Form)`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  padding: 20px;
  background-color: #fff;
`;
