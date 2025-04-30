import { Carousel } from "antd";
import "./CustomCarousel.css";

const slides = [
    { src: "/alisveris.png",  title: "Yeni Sezon, Yeni Sen!" },
    { src: "/koridor.png",    title: "Şıklık İçin Doğru Adım" },
    { src: "/kutu.png",       title: "Yeni Ayakkabı Çeşitleri" },
    { src: "/studyo.png",     title: "Her Tarza Uygun Ürünler" },
  ];

const baseStyle = {
    margin: 0,
    height: "40rem",
    color: "#fff",
    textAlign: "center",
    fontSize: "2rem",
    fontFamily: "monospace",
    display: "flex",             
    justifyContent: "center",    
    alignItems: "center",        
  };

const titleStyle = {
    textShadow: "5px 5px 10px rgba(0,0,0,0.8)",
  };

export default function CustomCarousel() {
  return (
    <>
      <Carousel autoplay>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div
              style={{
                ...baseStyle,
                backgroundImage: `url("${slide.src}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 style={titleStyle}>{slide.title}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
