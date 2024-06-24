import { Card } from "antd";
import styled from "styled-components";

export const StyledDashCard = styled(Card)<{ backgroundColor?: string }>`
  width: 100%;
  min-height: 30vh;
  background: ${(props) => props.backgroundColor};
`;
