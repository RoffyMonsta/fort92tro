// RecruitmentSection.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { RecruitmentForm } from "./RecruitmentForm";

export const RecruitmentSection: React.FC = () => (
  <Box
    id="recruitment"
    component="section"
    sx={{
      position: "relative",
      backgroundImage: 'url("/img/recruitment_form_bg.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#EBEBEB",
      py: { xs: 8, md: 12 },
      px: 2,
    }}
  >
    {/* затемнювач */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        // backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 1,
      }}
    />

    {/* внутрішній контент */}
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        maxWidth: 900,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* заголовки */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "e-Ukraine",
            fontWeight: 700,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            lineHeight: 1.4,
            flex: "1 1 60%",
          }}
        >
          92 окремий батальйон територіальної оборони потребує вмотивованих,
          мужніх людей, які готові захищати свою землю, своїх рідних, своє
          майбутнє.
        </Typography>
        <Typography
          sx={{
            fontFamily: "e-Ukraine",
            fontWeight: 700,
            fontSize: { xs: "1.5rem", md: "1.75rem" },
            color: "#B9C686",
            whiteSpace: "nowrap",
          }}
        >
          Приєднуйся!
        </Typography>
      </Box>

      {/* форма заявки */}
      <RecruitmentForm />
    </Box>
  </Box>
);
