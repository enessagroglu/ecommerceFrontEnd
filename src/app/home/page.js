"use client";

import { motion } from "framer-motion";
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
import Card from "../../components/common/Card";
import CardSmall from "../../components/common/CardSmall.js";

const bigCards = [
  { link: "/#", imageSrc: NikeImage, title: "NIKE Ayakkabılar" },
  { link: "/#", imageSrc: PumaImage, title: "PUMA Ayakkabılar" },
  { link: "/#", imageSrc: AdidasImage, title: "ADIDAS Ayakkabılar" }
];

const smallCards = [
  { link: "/#", imageSrc: Sneakers },
  { link: "/#", imageSrc: Yuruyus },
  { link: "/#", imageSrc: Sweat },
  { link: "/#", imageSrc: Tshirt },
  { link: "/#", imageSrc: Mont },
  { link: "/#", imageSrc: Outdoor },
  { link: "/#", imageSrc: Sapka },
  { link: "/#", imageSrc: Bere },
  { link: "/#", imageSrc: SirtCanta },
  { link: "/#", imageSrc: Terlik }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <motion.div
      className="root"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Home resmi scroll ile görünce animasyon */}
      <motion.div
        className="center"
        variants={itemVariants}
      >
        <Image className="home-image" src={HomeImage} alt="home" />
      </motion.div>

      <br />
      <Divider style={{ borderColor: "#f78b71" }} />
      <br />

      <motion.div className="card-container">
        {bigCards.map((card, i) => (
          <motion.div key={i} variants={itemVariants}>
            <Card link={card.link} imageSrc={card.imageSrc} title={card.title} />
          </motion.div>
        ))}
      </motion.div>
      <br />
      <Divider style={{ borderColor: "#f78b71" }} />
      <br />

      <motion.div className="card-container">
        {smallCards.map((card, i) => (
          <motion.div key={i} variants={itemVariants}>
            <CardSmall link={card.link} imageSrc={card.imageSrc} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
