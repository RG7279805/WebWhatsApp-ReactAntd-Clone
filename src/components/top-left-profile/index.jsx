import { React, useState } from "react";

import { Image, Modal, Button } from "antd";

import {
  MoreOutlined,
  WhatsAppOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import StatusView from "./panel-components/status/status";
import ChatsDrawer from "./panel-components/newChats/panel";

export default function TopLeftProfileBar() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isChatsDrawerVisible, setIsChatsDrawerVisible] = useState(false);
  const styles = {
    container: {
      height: "100%",
      width: "100%",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    imageContainer: {
      height: "100%",
      width: "14%",
      overflow: "hidden",

      alignSelf: "center",
      alignItems: "center",
    },
    image: {
      marginTop: "20%",
      borderRadius: "50%",
      alignSelf: "center",
      alignItems: "center",
    },
    iconsContainer: {
      alignSelf: "center",
      alignItems: "center",
      width: "35%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  };

  return (
    <div style={styles.container}>
      <span style={styles.imageContainer}>
        <Image
          height="80%"
          width="100%"
          style={styles.image}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </span>

      <span style={styles.iconsContainer}>
        <WhatsAppOutlined
          style={{ fontSize: "25px" }}
          onClick={() => {
            setModalVisible(true);
          }}
        />
        <MessageOutlined
          style={{ fontSize: "25px" }}
          onClick={() => {
            setIsChatsDrawerVisible(true);
          }}
        />
        <MoreOutlined style={{ fontSize: "25px" }} />
        <StatusView
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
        />
        <ChatsDrawer
          isChatsDrawerVisible={isChatsDrawerVisible}
          setIsChatsDrawerVisible={setIsChatsDrawerVisible}
        />
      </span>
    </div>
  );
}
