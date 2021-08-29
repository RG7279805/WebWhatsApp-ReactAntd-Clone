import { React, useState } from "react";

import { Image, Modal, Button, Drawer, Input, Menu, Typography } from "antd";
import ColorPallete from "../../../color-pallete/index";

import { SearchOutlined } from "@ant-design/icons";
// import StatusView from "./panel-components/status/status";
const { SubMenu } = Menu;

export default function ContactPanel({}) {
  const styles = {
    container: {
      marginTop: "10px",
    },
    menu: {
      //   backgroundColor: "red",
      paddingTop: "0",
      paddingBottom: "0",
    },
    menuItem: {
      marginTop: "0",
      //   backgroundColor: "green",
      height: "100%",
      display: "flex",
      flexDirection: "row",
    },
    profile: { borderRadius: "50%", marginTop: "15px", marginRight: "20px" },
  };
  return (
    <div style={styles.container}>
      <Menu
        style={styles.menu}
        defaultSelectedKeys={["1"]}
        // mode="inline"
        theme="dark"
      >
        <Menu.Item key="2" style={styles.menuItem}>
          <span>
            <Image
              height="80%"
              width="15%"
              style={styles.profile}
              preview={false}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </span>
          hello
        </Menu.Item>
      </Menu>
    </div>
  );
}
