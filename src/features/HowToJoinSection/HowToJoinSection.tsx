import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ReactComponent as MainLogo } from "../../assets/icons/main_logo.svg";

const steps = [
  "Заповни заявку",
  "Пройди співбесіду та обери посаду",
  "Долучися до боротьби",
];

export const HowToJoinSection: React.FC = () => (
  <Box
    component="section"
    id="join"
    sx={{
      backgroundColor: "#1D1D1D",
      py: { xs: 8, md: 12 },
      px: { xs: 2, md: 4 },
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      flexDirection: { xs: "column", md: "row" },
      gap: { xs: 4, md: 8 },
    }}
  >
    {/* Логотип */}
    <Box flexShrink={0} sx={{ width: 80, height: 80 }}>
      <MainLogo
        className="white-icon"
        style={{ width: "100%", height: "100%" }}
      />
    </Box>

    {/* Контент */}
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: 600,
        display: "flex",
        flexDirection: "column",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "e-Ukraine",
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "2.5rem" },
          color: "#EBEBEB",
          textTransform: "uppercase",
          mb: 4,
        }}
      >
        Як приєднатись
      </Typography>

      {/* Steps */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 6 }}>
        {steps.map((text, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "start",
              gap: 2,
              justifyContent: "start",
            }}
          >
            <Typography
              sx={{
                fontFamily: "e-Ukraine",
                fontWeight: 200,
                fontSize: "17px",
                color: "#EBEBEB",
                minWidth: "2.5ch",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </Typography>
            <Typography
              sx={{
                fontFamily: "e-Ukraine",
                fontWeight: 700,
                fontSize: { xs: "1.125rem", md: "1.5rem" },
                color: "#EBEBEB",
                textTransform: "uppercase",
                textAlign: "left",
              }}
            >
              {text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* CTA Button */}
      <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            fontFamily: "e-Ukraine",
            fontWeight: 700,
            fontSize: "1rem",
            textTransform: "uppercase",
            color: "#1D1D1D",
            backgroundColor: "#B9C686",
            py: 1.25,
            px: 5,
            borderRadius: "4px",
            "&:hover": { backgroundColor: "#A0AB55" },
          }}
          onClick={() => {
            document
              .getElementById("recruitment")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Заповнити заявку
        </Button>
      </Box>
    </Box>
  </Box>
);
