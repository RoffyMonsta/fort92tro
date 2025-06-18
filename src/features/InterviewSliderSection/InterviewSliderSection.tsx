import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ReactComponent as ShieldIcon } from "../../assets/icons/shield_icon.svg";
import { interviews } from "./interviews";

export const InterviewSliderSection: React.FC = () => {
  return (
    <Box
      component="section"
      id="interviews"
      sx={{
        backgroundColor: "#1D1D1D",
        color: "#EBEBEB",
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
      }}
    >
      <Box display="flex" alignItems="center" gap={1} mb={4}>
        <ShieldIcon style={{ width: 24, height: 24 }} />
        <Typography
          sx={{
            fontFamily: "e-Ukraine",
            fontWeight: 700,
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "#EBEBEB",
            textTransform: "uppercase",
          }}
        >
          Інтерв’ю з бійцями
        </Typography>
      </Box>

      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        grabCursor
        breakpoints={{
          600: { slidesPerView: 2.2, spaceBetween: 24 },
          960: { slidesPerView: 3.2, spaceBetween: 32 },
        }}
        style={{ padding: "0 10px" }}
      >
        {interviews.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href={item.href}
              underline="none"
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                color: "#EBEBEB",
                "&:hover .title": { opacity: 0.85 },
              }}
            >
              <Box
                component="img"
                loading="lazy"
                src={item.src}
                alt={item.title}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  mb: 2,
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  gap: 2,
                }}
              >
                <Typography
                  className="title"
                  fontWeight={200}
                  fontSize="16px"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    minHeight: "72px",
                    maxHeight: "120px",
                    lineHeight: "1.5",
                  }}
                >
                  {item.title}
                </Typography>

                <Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    fontSize="16px"
                    sx={{ textTransform: "uppercase" }}
                  >
                    {item.category}
                  </Typography>
                  <Typography
                    variant="caption"
                    fontSize="16px"
                    fontWeight={200}
                    sx={{ color: "#B0B0B0" }}
                  >
                    {item.date}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
