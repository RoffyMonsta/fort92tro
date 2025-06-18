import { Box, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ReactComponent as ShieldIcon } from "../../assets/icons/shield_icon.svg";
import "swiper/css";
import "swiper/css/navigation";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

const slides = [
  {
    year: "2014",
    image: "/img/combat-2014.png",
    thumb: "/img/combat-thumb-2014.png",
    heading:
      "92 окремий батальйон ТРО – Підрозділ нашої держави. Ми діємо у Чернівецькій області та набираємо нових воїнів.",
    text: `З початку 2023 року третя штурмова воювала на Бахмутському напрямку. Навесні першоочрозпочала контрнаступ. Повернула під український контроль понад 20 км² територій з 250 км², які сили оборони звільнили протягом літнього контрнаступу.`,
  },
  {
    year: "2015",
    image: "/img/combat-2014.png",
    thumb: "/img/combat-thumb-2014.png",
    heading:
      "92 окремий батальйон ТРО – Підрозділ нашої держави. Ми діємо у Чернівецькій області та набираємо нових воїнів.",
    text: `Навесні першоочрозпочала контрнаступ. Повернула під український контроль понад 20 км² територій з 250 км², які сили оборони звільнили протягом літнього контрнаступу.`,
  },
  // Add more entries as needed
];

export const PathSection = () => {
  return (
    <Box
      component="section"
      id="path"
      sx={{
        backgroundColor: "#1D1D1D",
        backgroundImage:
          "radial-gradient(rgba(0, 0, 0, 0.25) 1px, transparent 1px)",
        backgroundSize: "2px 2px",
        px: 4,
        py: { xs: 8, md: 12 },
        color: "#EBEBEB",
      }}
    >
      {/* Section title */}
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
          Бойовий шлях
        </Typography>
      </Box>

      <Swiper
        modules={[Navigation, EffectFade]}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
              }}
            >
              {/* Left: Full image */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <img
                  loading="lazy"
                  src={slide.image}
                  alt={`combat-${slide.year}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 4,
                  }}
                />
              </Box>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: 3,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "e-Ukraine",
                    fontWeight: 700,
                    fontSize: "clamp(16px, 1.5vw, 20px)",
                    textTransform: "uppercase",
                  }}
                >
                  {slide.heading}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "e-Ukraine",
                    fontWeight: 300,
                    fontSize: "clamp(14px, 1.4vw, 18px)",
                    textTransform: "uppercase",
                    lineHeight: 1.8,
                  }}
                >
                  {slide.text}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  flexShrink: 0,
                  width: { xs: "100%", md: 150 },
                }}
              >
                <img
                  loading="lazy"
                  src={slide.thumb}
                  alt={`thumb-${slide.year}`}
                  style={{ width: 120, height: "auto", borderRadius: 4 }}
                />

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                >
                  <IconButton className="prev-btn">
                    <ArrowBackIcon sx={{ color: "#B9C686" }} />
                  </IconButton>
                  <Typography
                    sx={{
                      fontFamily: "e-Ukraine",
                      fontWeight: 700,
                      fontSize: "20px",
                      color: "#B9C686",
                    }}
                  >
                    {slide.year}
                  </Typography>
                  <IconButton className="next-btn">
                    <ArrowForwardIcon sx={{ color: "#B9C686" }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
