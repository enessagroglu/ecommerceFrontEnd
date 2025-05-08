import React from "react";
import {
  EyeOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Card, Avatar } from "antd";
import Meta from "antd/es/card/Meta";
import "./ShoppingCard.css"


export default function ShoppingCard({ Name, Price, ImgUrl, AvatarUrl }) {
  return (
    <Card
      className="shopping-card"
      cover={<img className="productImg" alt={Name} src={ImgUrl.src} />} 
      actions={[
        <EyeOutlined key="view" />,
        <ShoppingCartOutlined key="cart" />,
        <ShoppingOutlined key="order" />,
      ]}
    >
      <Meta
        avatar={<Avatar src={AvatarUrl.src} />} 
        title={Name}
        description={`₺${Price}`}
      />
    </Card>
  );
}
