"use client";

import { motion } from "framer-motion";
import { Divider } from "antd";
import Card from "../../components/common/Card";
import CardSmall from "../../components/common/CardSmall.js";
import ExpoSlider from "@/components/expoSlider/ExpoSlider";
import { brandImages, productImages } from "@/assets/images";
import "./Home.css";
import "../globals.css"

const bigCards = [
  { link: "/#", imageSrc: brandImages.nike, title: "NIKE Ayakkabılar" },
  { link: "/#", imageSrc: brandImages.puma, title: "PUMA Ayakkabılar" },
  { link: "/#", imageSrc: brandImages.adidas, title: "ADIDAS Ayakkabılar" },
];

const smallCards = [
  { link: "/#", imageSrc: productImages.sneakers, title: "Sneaker Modelleri" },
  { link: "/#", imageSrc: productImages.yuruyus, title: "Yürüyüş Ayakkabıları" },
  { link: "/categories/7", imageSrc: productImages.sweat, title: "Sweatshirt Modelleri" },
  { link: "/categories/6", imageSrc: productImages.tshirt, title: "Tişörtler" },
  { link: "/categories/8", imageSrc: productImages.mont, title: "Montlar" },
  { link: "/#", imageSrc: productImages.outdoor, title: "Outdoor Ayakkabıları" },
  { link: "/categories/10", imageSrc: productImages.sapka, title: "Şapkalar" },
  { link: "/categories/11", imageSrc: productImages.bere, title: "Bereler" },
  { link: "/categories/12", imageSrc: productImages.sirtCanta, title: "Sırt Çantaları" },
  { link: "/categories/13", imageSrc: productImages.terlik, title: "Terlik Modelleri" },
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
      
      <ExpoSlider />

      <br />
      <Divider className="divider-color" />
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
      <Divider className="divider-color" />
      <br />

      <motion.div className="card-container">
        {smallCards.map((card, i) => (
          <motion.div key={i} variants={itemVariants}>
            <CardSmall link={card.link} imageSrc={card.imageSrc} title={card.title} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
