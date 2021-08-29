import React, { useState } from "react";
import { Image, Typography, Divider } from "antd";
import ColorPallete from "../../../../color-pallete/index";

const { Title, Text } = Typography;

export const PersonStatusRow = ({ name }) => {
  const [visible, setVisible] = useState(false);
  const [HoverState, setHoverState] = useState(false);
  const [ImagesUrlList, setImagesUrlList] = useState([
    "https://picsum.photos/".concat(Math.floor(Math.random() * 1000)),
    "https://picsum.photos/".concat(Math.floor(Math.random() * 1000)),
    "https://picsum.photos/".concat(Math.floor(Math.random() * 1000)),
    "https://picsum.photos/".concat(Math.floor(Math.random() * 1000)),
  ]);
  return (
    <span
      onMouseEnter={() => {
        setHoverState(true);
      }}
      onMouseLeave={() => {
        setHoverState(false);
      }}
      onClick={() => {
        setVisible(true);
      }}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "100%",
        marginBottom: "15px",
        backgroundColor: HoverState
          ? ColorPallete.active
          : ColorPallete.tertiary,
      }}
    >
      <Image
        preview={{ visible: false }}
        width={"12%"}
        height={"50%"}
        style={{ borderRadius: "50%", border: "2px solid darkgreen" }}
        src={ImagesUrlList[0]}
        onClick={() => setVisible(true)}
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          {ImagesUrlList.map((url) => {
            return <Image src={url} />;
          })}
        </Image.PreviewGroup>
      </div>
      <div>
        <Title
          level={5}
          style={{ color: "white", marginLeft: "20px", alignItems: "center" }}
        >
          {name}
        </Title>
      </div>
    </span>
  );
};
