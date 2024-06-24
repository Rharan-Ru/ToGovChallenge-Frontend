import { Card } from "antd";
import styled from "styled-components";

export const StyledToDoCard = styled(Card)<{ backgroundColor?: string }>`
  width: 100%;
  min-height: 20vh;
  background: ${(props) => props.backgroundColor};
`;
