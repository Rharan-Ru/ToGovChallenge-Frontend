import { Space, Typography } from "antd";
import styled from "styled-components";

export const StyledSpace = styled(Space)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const StyledTitle = styled(Typography.Title)`
  text-align: center;
`;

export const StyledText = styled(Typography.Text)<{ color?: string }>`
  color: ${(props) => props.color || "#888"};
  font-size: 16px;
  display: block;
`;
