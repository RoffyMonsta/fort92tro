import { Box, Typography } from "@mui/material";
import { ReactComponent as MainLogo } from "../../assets/icons/main_logo.svg";
import { ReactComponent as ShieldIcon } from "../../assets/icons/shield_icon.svg";

export const AboutUsSection = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        backgroundColor: "#1D1D1D",
        backgroundImage:
          "radial-gradient(rgba(0, 0, 0, 0.25) 1px, transparent 1px)",
        backgroundSize: "2px 2px",
        px: 4,
        py: { xs: 8, md: 12 },
      }}
    >
      {/* NAV item at the top left */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 6,
        }}
      >
        <ShieldIcon style={{ height: 24, width: 24 }} />
        <Typography
          sx={{
            fontFamily: "e-Ukraine",
            fontWeight: 700,
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "#EBEBEB",
            textTransform: "uppercase",
          }}
        >
          Про батальйон
        </Typography>
      </Box>

      {/* Centered content */}
      <Box
        sx={{
          maxWidth: "700px",
          mx: "auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <MainLogo className="white-icon" style={{ width: 130, height: 130 }} />

        <Typography
          variant="h5"
          sx={{
            fontFamily: "e-Ukraine",
            fontWeight: 700,
            fontSize: "clamp(20px, 3vw, 34px)",
            color: "#EBEBEB",
            textTransform: "uppercase",
          }}
        >
          92 окремий батальйон тро –
        </Typography>

        <Typography
          sx={{
            fontFamily: "e-Ukraine",
            fontWeight: 100,
            fontSize: "clamp(16px, 2vw, 34px)",
            color: "#EBEBEB",
            textTransform: "uppercase",
            lineHeight: 1.9,
          }}
        >
          Підрозділ сил територіальної оборони, який виконує важливі завдання у
          захисті нашої держави. Ми діємо у Чернівецькій області та набираємо
          нових воїнів.
        </Typography>
      </Box>
    </Box>
  );
};
