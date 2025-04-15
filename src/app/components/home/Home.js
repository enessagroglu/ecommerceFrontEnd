'use client'
import Image from "next/image";
import HomeImage from "../../../../public/home.png";
import NikeImage from "../../../../public/nike.png";
import PumaImage from "../../../../public/puma.png";
import AdidasImage from "../../../../public/adidas.png"
import "./Home.css";
import { Divider } from "antd";
import Card from "../common/Card";

export default function Home() {
  return (
    <div>
      <div className="center">
        <Image className="home-image" src={HomeImage} alt="home" />
      </div>
      <br></br>
      <Divider style={{ borderColor: "#f78b71" }}></Divider>
      <br></br>
      <div className="card-container">
      <Card
        link="/#"
        imageSrc={NikeImage}
        title="NIKE Ayakkabılar"
      />
      <Card
        link="/#"
        imageSrc={PumaImage}
        title="PUMA Ayakkabılar"
      />
      <Card
        link="/#"
        imageSrc={AdidasImage}
        title="Adidas Ayakkabılar"
      />
        
      </div>
    </div>
  );
}
