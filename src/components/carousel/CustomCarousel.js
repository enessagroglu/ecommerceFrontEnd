import { Carousel } from "antd";

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
                  position: "relative", // önemli: overlay ve yazı üst üste yerleşecek
                  overflow: "hidden",   // taşma olmasın
                }}
              >
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // karartma seviyesi
                    zIndex: 1,
                  }}
                />
  
                {/* Yazı */}
                <h3
                  style={{
                    ...titleStyle,
                    zIndex: 2,
                    position: "relative", // overlay’in üstünde görünsün
                  }}
                >
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </>
    );
  }
  