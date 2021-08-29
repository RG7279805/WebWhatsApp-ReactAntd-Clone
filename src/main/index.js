import { React } from "react";

import { Layout, Menu, Row, Col } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import TopLeftProfileBar from "../components/top-left-profile/index";
import ColorPallete from "../components/color-pallete/index";

const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        style={{
          width: "300px",
          height: "100vh",
        }}
      >
        {/* <div className="logo" /> */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          style={{
            width: "300px",
            height: "100vh",
            borderRight: "0.5px solid white",
            paddingTop: 0,
            backgroundColor: ColorPallete.primary,
          }}
        >
          <div
            style={{
              width: "100%",
              backgroundColor: ColorPallete.secondary,
              height: "8vh",
            }}
          >
            <TopLeftProfileBar />
          </div>

          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>
            nav 4
          </Menu.Item>
          <Menu.Item key="5" icon={<CloudOutlined />}>
            nav 5
          </Menu.Item>
          <Menu.Item key="6" icon={<AppstoreOutlined />}>
            nav 6
          </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            nav 7
          </Menu.Item>
          <Menu.Item key="8" icon={<ShopOutlined />}>
            nav 8
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 0 }}>
        <Header
          className="site-layout-background"
          style={{ padding: 0, backgroundColor: ColorPallete.secondary }}
        />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          ></div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}></Footer> */}
      </Layout>
    </Layout>
  );
};

export default Main;
