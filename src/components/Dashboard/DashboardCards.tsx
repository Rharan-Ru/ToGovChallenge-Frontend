import React from "react";
import { Row, Col } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { StyledDashCard } from "./dashboard.styled";
import { StyledTitle } from "../Global/global.styled";
import { ToDoItem } from "../ToDo/ToDoCards";

export type ToDoDashProps = {
  listToDos: ToDoItem[];
};

const DashboardCards: React.FC<ToDoDashProps> = ({ listToDos }) => {
  const totalTasks = listToDos.length;
  const completedTasks = listToDos.filter(
    (item: ToDoItem) => item.status === "done"
  ).length;
  const pendingTasks = listToDos.filter(
    (item: ToDoItem) => item.status === "pending"
  ).length;
  const closedTasks = listToDos.filter(
    (item: ToDoItem) => item.status === "canceled"
  ).length;

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={12}>
        <StyledDashCard
          backgroundColor={"#f0f2f5"}
          title="Total Tasks"
          bordered={false}
        >
          <StyledTitle level={1}>{totalTasks}</StyledTitle>
          <ProfileOutlined style={{ fontSize: 24, color: "#595959" }} />
        </StyledDashCard>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <StyledDashCard
          backgroundColor={"#e6f7ff"}
          title="Completed Tasks"
          bordered={false}
        >
          <StyledTitle level={1}>{completedTasks}</StyledTitle>
          <CheckCircleOutlined style={{ fontSize: 24, color: "#52c41a" }} />
        </StyledDashCard>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <StyledDashCard
          backgroundColor={"#fff1b8"}
          title="Pending Tasks"
          bordered={false}
        >
          <StyledTitle level={1}>{pendingTasks}</StyledTitle>
          <ClockCircleOutlined style={{ fontSize: 24, color: "#1890ff" }} />
        </StyledDashCard>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <StyledDashCard
          backgroundColor={"#qff1b8"}
          title="Closed"
          bordered={false}
        >
          <StyledTitle level={1}>{closedTasks}</StyledTitle>
          <CloseCircleOutlined style={{ fontSize: 24, color: "#ff4d4f" }} />
        </StyledDashCard>
      </Col>
    </Row>
  );
};

export default DashboardCards;
