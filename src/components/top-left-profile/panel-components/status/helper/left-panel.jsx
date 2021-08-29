import React, { useState } from "react";
import { Image, Typography, Divider } from "antd";
import { PersonStatusRow } from "./status-view-row";
import ColorPallete from "../../../../color-pallete/index";

const { Title, Text } = Typography;

const LeftPanel = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "10%",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          paddingLeft: "6%",
        }}
      >
        <Image
          width={50}
          style={{ borderRadius: "50%" }}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          preview={false}
        />

        <span
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "2%",
          }}
        >
          <Title
            level={5}
            style={{
              color: "white",
              marginLeft: "2%",
              alignSelf: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            My Status
          </Title>
          <Text
            type="secondary"
            style={{
              color: "white",
              alignSelf: "center",
              alignItems: "center",
              fontSize: "10px",
            }}
          >
            No Updates
          </Text>
        </span>
      </div>
      <Divider
        style={{
          // color: ColorPallete.active,

          backgroundColor: ColorPallete.borders,
          display: "flex",
          flexDirection: "column",
        }}
      />

      <div style={{ paddingLeft: "3%", color: ColorPallete.textWhite }}>
        <p style={{ marginBottom: "5px" }}>Recent </p>
        <PersonStatusRow name={"MOM"} />
      </div>
      <Divider
        style={{
          // color: ColorPallete.active,

          backgroundColor: ColorPallete.borders,
          display: "flex",
          flexDirection: "column",
        }}
      />
      <div style={{ paddingLeft: "3%" }}>
        <PersonStatusRow name={"MOM"} />
        <PersonStatusRow name={"MOM"} />
      </div>
    </section>
  );
};

export default LeftPanel;
