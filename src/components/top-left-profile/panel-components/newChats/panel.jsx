import { React, useState } from "react";

import { Image, Modal, Button, Drawer, Input } from "antd";
import ColorPallete from "../../../color-pallete/index";
import ContactPanel from "./drawer-chat-item";
import { ArrowLeftOutlined, SearchOutlined } from "@ant-design/icons";
// import StatusView from "./panel-components/status/status";

export default function ChatsDrawer({
  isChatsDrawerVisible,
  setIsChatsDrawerVisible,
}) {
  const styles = {
    container: {
      // height: "92vh",
    },
    drawer: {
      // top: "8vh",
      // left: 0,
      width: "300px",
      backgroundColor: ColorPallete.primary,
    },
    drawerContainer: {
      color: ColorPallete.textWhite,
    },
    drawerHeader: {
      display: "flex",
      flexDirection: "row",
      color: ColorPallete.textWhite,

      backgroundColor: ColorPallete.secondary,
      height: "10%",
      paddingTop: "8%",
      border: "0",
    },
    drawerItems: {},
    drawerBody: {
      paddingTop: 5,
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      display: "flex",
      flexDirection: "row",
    },
    inputStyle: {
      height: "35px",
      width: "250px",
      borderRadius: "20px",
      backgroundColor: ColorPallete.secondary,
      color: ColorPallete.textWhite,
      paddingLeft: "10px",
    },
    inputContainer: {
      paddingTop: "5px",
      display: "flex",
      justifyContent: "center",
      paddingBottom: "5px",
      width: "300px",
      borderBottom: "1px solid white",
    },
  };
  return (
    <div style={styles.container}>
      <Drawer
        placement="left"
        closable={true}
        onClose={() => {
          setIsChatsDrawerVisible(false);
        }}
        visible={isChatsDrawerVisible ? isChatsDrawerVisible : false}
        getContainer={true}
        width={"300px"}
        // style={styles.drawer}
        headerStyle={styles.drawerHeader}
        drawerStyle={styles.drawer}
        bodyStyle={styles.drawerBody}
        title={"New Chat"}
        closeIcon={<ArrowLeftOutlined style={{ color: "white" }} />}
      >
        <section style={styles.drawerContainer}>
          <header style={styles.inputContainer}>
            <Input
              size="small"
              style={styles.inputStyle}
              bordered={false}
              placeholder="Search For Contact"
              prefix={
                <SearchOutlined style={{ color: ColorPallete.textWhite }} />
              }
            />
          </header>
          <header style={styles.drawerItems}>
            <ContactPanel />
          </header>
        </section>
      </Drawer>
    </div>
  );
}

// layout height values
//  top header with options = 8vh
//  Total drawer  = 92vh
// drawerHeader = 10vh
// drawerItems = 82vh
