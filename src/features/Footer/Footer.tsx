import React from "react";
import {
  Box,
  Typography,
  Link,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { ReactComponent as MainLogo } from "../../assets/icons/main_logo.svg";

export const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: "#1D1D1D",
      color: "#FFFFFF",
      px: { xs: 2, md: 8 },
      py: { xs: 4, md: 8 },
    }}
  >
    {/* Top row: nav + socials */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        mb: { xs: 4, md: 6 },
      }}
    >
      {/* Navigation links */}
      <Stack spacing={1} alignItems={{ xs: "center", md: "flex-start" }}>
        {["Головна", "Посади", "Питання", "Підтримати"].map((t) => (
          <Link
            key={t}
            href={`#${t.toLowerCase()}`}
            underline="none"
            sx={{
              color: "#FFFFFF",
              fontWeight: 500,
              "&:hover": { opacity: 0.8 },
            }}
          >
            {t}
          </Link>
        ))}
      </Stack>

      {/* Social icons */}
      <Stack direction="row" spacing={1}>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          sx={{ color: "#FFFFFF" }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          sx={{ color: "#FFFFFF" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://youtube.com"
          target="_blank"
          sx={{ color: "#FFFFFF" }}
        >
          <YouTubeIcon />
        </IconButton>
      </Stack>
    </Box>

    {/* Middle row: contacts, CTA, logo */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      {/* Contact info */}
      <Box textAlign={{ xs: "center", md: "left" }}>
        <Typography variant="h6">Контакти</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          +380 50 234 03 XX
        </Typography>
        <Typography variant="body1">def111tr092@gmail.com</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Тарас Хміль
        </Typography>
      </Box>

      {/* CTA button */}
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#B9C686",
          color: "#1D1D1D",
          px: 4,
          py: 1.5,
          fontWeight: 700,
          "&:hover": { backgroundColor: "#A0AB55" },
        }}
        onClick={() => {
          // Example scroll to form
          document
            .getElementById("recruitment")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Приєднатися
      </Button>

      {/* Logo */}
      <Box sx={{ width: 60, height: 60 }}>
        <MainLogo className="white-icon" />
      </Box>
    </Box>

    {/* Bottom row: copyright */}
    <Box textAlign="right" sx={{ mt: { xs: 4, md: 6 } }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} 92 Окремий Батальйон ТРО
      </Typography>
    </Box>
  </Box>
);
