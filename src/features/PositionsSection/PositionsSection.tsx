import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { PositionsAccordion } from "./PositionsAccordion";
import { ReactComponent as ShieldIcon } from "../../assets/icons/shield_icon.svg";

export const PositionsSection: React.FC = () => {
  return (
    <Box
      component="section"
      id="positions"
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        bgcolor: "#1D1D1D",
        color: "#EBEBEB",
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
          Посади
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        <Box
          component="img"
          loading="lazy"
          src="/img/positions_pic.png"
          alt="Soldier"
          sx={{
            width: { xs: "100%", md: 300 },
            maxHeight: { xs: 300, md: "none" }, // ✅ limit on mobile
            objectFit: "cover",
            borderRadius: 2,
            alignSelf: "flex-start",
          }}
        />

        <Box flex={1}>
          <PositionsAccordion />
          <Button
            variant="contained"
            sx={{
              mt: 4,
              bgcolor: "#B9C686",
              color: "#1D1D1D",
              px: 4,
              py: 1.5,
              fontWeight: 700,
              width: { xs: "100%", sm: "auto" },
              "&:hover": { bgcolor: "#A0AB55" },
            }}
            onClick={() =>
              document
                .getElementById("recruitment")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Заповнити заявку
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
