"use client";

import { motion } from "framer-motion";
import { Divider } from "antd";
import Card from "../../components/common/Card";
import CardSmall from "../../components/common/CardSmall.js";
import CustomCarousel from "@/components/carousel/CustomCarousel";
import { brandImages, productImages } from "@/assets/images";
import "./Home.css";

const bigCards = [
  { link: "/#", imageSrc: brandImages.nike, title: "NIKE Ayakkabılar" },
  { link: "/#", imageSrc: brandImages.puma, title: "PUMA Ayakkabılar" },
  { link: "/#", imageSrc: brandImages.adidas, title: "ADIDAS Ayakkabılar" },
];

const smallCards = [
  { link: "/#", imageSrc: productImages.sneakers },
  { link: "/#", imageSrc: productImages.yuruyus },
  { link: "/#", imageSrc: productImages.sweat },
  { link: "/#", imageSrc: productImages.tshirt },
  { link: "/#", imageSrc: productImages.mont },
  { link: "/#", imageSrc: productImages.outdoor },
  { link: "/#", imageSrc: productImages.sapka },
  { link: "/#", imageSrc: productImages.bere },
  { link: "/#", imageSrc: productImages.sirtCanta },
  { link: "/#", imageSrc: productImages.terlik },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
      <CustomCarousel  />

      <br />
      <Divider style={{ borderColor: "#f78b71" }} />
      <br />

      <motion.div className="card-container">
        {bigCards.map((card, i) => (
          <motion.div key={i} variants={itemVariants}>
            <Card
              link={card.link}
              imageSrc={card.imageSrc}
              title={card.title}
            />
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
