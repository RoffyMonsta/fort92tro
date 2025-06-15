import { Box, Typography } from "@mui/material";

export const HeroSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "80vh", md: "100vh" },
        height: { xs: "80vh", md: "100vh" },
        backgroundImage: `url('/img/hero_section_bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        color: "white",
        textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
      }}
    >
      {/* Top-left label */}
      <Box sx={{ position: "absolute", top: "10vh", left: "10vw" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, fontSize: "24px", color: "#B9C686" }}
        >
          92
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 500, fontSize: "14px" }}
        >
          ОКРЕМИЙ БАТАЛЬЙОН ТРО
        </Typography>
      </Box>

      {/* Main call-to-action */}
      <Box sx={{ textAlign: "center", color: "#EBEBEB", px: 2 }}>
        {/* "МОРДОР САМ СЕБЕ НЕ ЗНИЩИТЬ" */}
        <Typography
          sx={{
            fontFamily: "e-Ukraine",
            fontSize: "clamp(12px, 4vw, 60px)",
            fontWeight: 500,
            textTransform: "uppercase",
            mb: 1,
            whiteSpace: "nowrap",
          }}
        >
          мордор сам себе не знищить —
        </Typography>

        {/* "ПРИЄДНУЙСЯ!" */}
        <Typography
          sx={{
            fontFamily: "e-Ukraine",
            fontSize: "clamp(24px, 10vw, 143px)",
            fontWeight: 700,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          приєднуйся!
        </Typography>
      </Box>
    </Box>
  );
};
