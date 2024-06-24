import React, { useState, useEffect } from "react";
import {
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { handleLogoutHook } from "../../hooks/login.hook";

const showNavigationPaths = ["/dashboard", "/todo"];

type MenuItem = Required<MenuProps>["items"][number] & {
  link: string;
  label: string;
  icon: React.ReactNode;
};

const items: MenuItem[] = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Dashboard",
    link: "/dashboard",
  },
  { key: "2", icon: <DesktopOutlined />, label: "ToDo List", link: "/todo" },
];

const NavigationMenu: React.FC<{
  collapsed: boolean;
  toggleCollapsed: () => void;
  isMobile: boolean;
}> = ({ collapsed, toggleCollapsed, isMobile }) => {
  const location = useLocation();

  const handleLogout = () => {
    handleLogoutHook();
  };

  return (
    <div
      style={{
        width: collapsed ? 80 : 256,
        position: "fixed",
        height: "100%",
        zIndex: 1,
        transition: "width 0.2s",
        overflow: "hidden",
        backgroundColor: isMobile && collapsed ? "" : "#001529",
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          margin: "16px 0",
          width: "100%",
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      {isMobile && collapsed ? null : (
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          style={{
            height: "calc(100vh - 64px)",
            display: "block",
          }}
        >
          {items.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              style={{
                backgroundColor:
                  location.pathname === item.link ? "#1677ff" : "",
                color: location.pathname === item.link ? "#fff" : "",
              }}
            >
              <Link to={item.link}>{item.label}</Link>
            </Menu.Item>
          ))}
          <Menu.Item
            key={"logout"}
            icon={<LogoutOutlined />}
            style={{
              position: "absolute",
              bottom: 0,
            }}
          >
            <Link to="/" onClick={() => handleLogout()}>
              LogOut
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const path = useLocation().pathname;
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const showNavigation = (path: string) => {
    if (showNavigationPaths.includes(path)) {
      return true;
    }
    return false;
  };

  return (
    <div style={{ display: "flex" }}>
      {showNavigation(path) && (
        <>
          <NavigationMenu
            collapsed={collapsed}
            toggleCollapsed={toggleCollapsed}
            isMobile={isMobile}
          />
          <div
            style={{
              marginLeft: isMobile ? 0 : collapsed ? 80 : 256,
              transition: "margin-left 0.2s",
              padding: "24px",
              width: "100%",
            }}
          >
            {children}
          </div>
        </>
      )}
      {!showNavigation(path) && <div style={{ width: "100%" }}>{children}</div>}
    </div>
  );
};

export default AppLayout;
