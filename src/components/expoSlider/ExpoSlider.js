'use client';

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import EffectExpo from "./effect-expo.esm.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./effect-expo.css";
import "./expo-slider.css";

const slides = [
  "/slide1.png",
  "/slide2.png",
  "/slide3.png",
  "/nike.png",
  "/puma.png",
  "/sneakers.png",
];


export default function ExpoSlider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current?.slideNext) {
        swiperRef.current.slideNext();
      }
    }, 6000); // 4 saniyede bir geçiş

    return () => clearInterval(interval); // component unmount olursa temizle
  }, []);

  return (
    <div className="expo-slider-wrapper">
      <Swiper
        effect="expo"
        modules={[Navigation, Pagination, EffectExpo]}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.5}
        spaceBetween={16}
        onBeforeInit={(swiper) => {
          swiper.params.expoEffect = {
            rotate: 0,
            scale: 1.25,
            imageScale: 1.125,
            imageOffset: 1.25,
            grayscale: true,
          };
        }}
        breakpoints={{
          768: {
            spaceBetween: 32,
          },
        }}
        className="swiper swiper-expo"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="expo-container">
              <img
                className="expo-image"
                src={slide}
                alt={`slide-${index}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
