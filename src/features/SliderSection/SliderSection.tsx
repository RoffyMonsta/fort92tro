// SliderSection.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Box } from "@mui/material";

interface SlideItem {
  id: string;
  src: string;
  alt?: string;
}

const slides: SlideItem[] = [
  { id: "slide1", src: "/img/slider1.png", alt: "Slide 1" },
  { id: "slide2", src: "/img/slider1.png", alt: "Slide 2" },
  { id: "slide3", src: "/img/slider1.png", alt: "Slide 3" },
  { id: "slide4", src: "/img/slider1.png", alt: "Slide 4" },
  { id: "slide5", src: "/img/slider1.png", alt: "Slide 5" },
];

export const SliderSection: React.FC = () => (
  <Box
    component="section"
    id="slider"
    sx={{
      backgroundColor: "#1D1D1D",
      py: { xs: 4, md: 8 },
      height: "auto",
    }}
  >
    <Swiper
      modules={[Autoplay]}
      slidesPerView={3}
      spaceBetween={24}
      loop
      grabCursor
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={5000} // тривалий час прокрутки для безперервності
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 16 },
        600: { slidesPerView: 2, spaceBetween: 20 },
        960: { slidesPerView: 3, spaceBetween: 24 },
      }}
      style={{
        padding: "0 20px",
        height: "auto",
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Box
            component="img"
            src={slide.src}
            alt={slide.alt}
            sx={{
              width: "100%",
              height: "auto",
              aspectRatio: "16/9",
              borderRadius: 2,
              display: "block",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
);
