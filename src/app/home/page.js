"use client";
import Image from "next/image";
import HomeImage from "../../../public/home.png";
import NikeImage from "../../../public/nike.png";
import PumaImage from "../../../public/puma.png";
import AdidasImage from "../../../public/adidas.png";
import Sneakers from "../../../public/sneakers.png";
import Yuruyus from "../../../public/yurus-ayakkabi.png";
import Sweat from "../../../public/sweatshirt.png";
import Tshirt from "../../../public/tshirt.png";
import Mont from "../../../public/mont.png";
import Outdoor from "../../../public/out-ayakkabi.png";
import Sapka from "../../../public/sapka.png";
import Bere from "../../../public/bere.png";
import SirtCanta from "../../../public/sirt-cantasi.png";
import Terlik from "../../../public/terlik.png";

import "./Home.css";
import { Divider } from "antd";
import Card from "../../components/common/Card"
import CardSmall from "../../components/common/CardSmall.js";
import { Col, Row } from "antd";

export default function Home() {
  return (
    <div className="root">
      <div className="center">
        <Image className="home-image" src={HomeImage} alt="home" />
      </div>
      <br></br>
      <Divider style={{ borderColor: "#f78b71" }}></Divider>
      <br></br>

    
          <div className="card-container">
            <Card link="/#" imageSrc={NikeImage} title="NIKE Ayakkabılar" />
            <Card link="/#" imageSrc={PumaImage} title="PUMA Ayakkabılar" />
            <Card link="/#" imageSrc={AdidasImage} title="Adidas Ayakkabılar" />
          </div>

          <div className="card-container">
            <CardSmall link="/#" imageSrc={Sneakers} />
            <CardSmall link="/#" imageSrc={Yuruyus} />
            <CardSmall link="/#" imageSrc={Sweat} />
            <CardSmall link="/#" imageSrc={Tshirt} />
            <CardSmall link="/#" imageSrc={Mont} />
            <CardSmall link="/#" imageSrc={Outdoor} />
            <CardSmall link="/#" imageSrc={Sapka} />
            <CardSmall link="/#" imageSrc={Bere} />
            <CardSmall link="/#" imageSrc={SirtCanta} />
            <CardSmall link="/#" imageSrc={Terlik} />
          </div>
        
      
    </div>
  );
}
