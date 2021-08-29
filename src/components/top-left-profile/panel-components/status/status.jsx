import { React, useState, useEffect } from "react";

import { Image, Modal, Button, Typography } from "antd";

import { CloseOutlined, ContactsOutlined } from "@ant-design/icons";
import ColorPallete from "../../../color-pallete/index";
import PersonStatusRow from "./helper/status-view-row";
import LeftPanel from "./helper/left-panel";

const { Title, Text } = Typography;

export default function StatusView({ isModalVisible, setModalVisible }) {
  const styles = {
    leftPanel: {
      height: "120%",
      width: "30%",
      backgroundColor: ColorPallete.tertiary,
    },
    rightPanel: {
      height: "120%",
      width: "70%",
      backgroundColor: ColorPallete.background,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    modal: {
      top: 0,
      left: 0,
      overflow: "hidden",
      height: "100vh",
      paddingTop: "0px",
      paddingLeft: "0px",
      marginTop: "0",
    },
    panelContainer: {
      height: "100vh",
      display: "flex",
      flexDirection: "row",
      width: "110%",
      position: "relative",
      top: -30,
      left: -25,
    },
  };

  return (
    <div>
      <Modal
        visible={isModalVisible}
        onCancel={() => {
          setModalVisible(false);
        }}
        closeIcon={<CloseOutlined style={{ color: "white" }} />}
        okButtonProps={{
          disabled: true,
          style: { display: "none" },
        }}
        cancelButtonProps={{
          disabled: true,
          style: { display: "none" },
        }}
        width={"100vw"}
        style={styles.modal}
      >
        <div style={styles.panelContainer}>
          <span style={styles.leftPanel}>
            <LeftPanel />
          </span>
          <span style={styles.rightPanel}>
            <ContactsOutlined
              style={{ color: ColorPallete.borders, fontSize: "13vw" }}
            />
            <Title
              level={4}
              style={{
                color: ColorPallete.borders,
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              Click On Contact To Check Their Status
            </Title>
          </span>
        </div>
      </Modal>
    </div>
  );
}
