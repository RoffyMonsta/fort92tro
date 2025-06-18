import React from "react";
import {
  Box,
  Typography,
  Link,
  Button,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { ReactComponent as MainLogo } from "../../assets/icons/main_logo.svg";

export const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sharedTextSx = {
    color: "#EBEBEB",
    fontSize: "12px",
    fontWeight: 400,
    textTransform: "uppercase",
  };
  const navLinks = [
    { label: "Головна", id: "hero" },
    { label: "Посади", id: "positions" },
    { label: "Питання", id: "faq" },
    { label: "Підтримати", id: "support" },
  ];

  return (
    <Box
      component="footer"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={{ xs: "center", md: "flex-start" }}
      justifyContent="space-between"
      gap={{ xs: 6, md: 4 }}
      sx={{
        backgroundColor: "#1D1D1D",
        color: "#EBEBEB",
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          gap: 2,
        }}
      >
        <Stack spacing={1} alignItems={{ xs: "center", md: "flex-start" }}>
          {navLinks.map(({ label, id }) => (
            <Button
              key={id}
              sx={{
                ...sharedTextSx,
                "&:hover": { opacity: 0.8 },
              }}
              onClick={() => {
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {label}
            </Button>
          ))}
        </Stack>

        <Stack direction="row">
          <IconButton
            href="https://instagram.com"
            target="_blank"
            sx={{ color: "#EBEBEB", paddingLeft: 0 }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            href="https://facebook.com"
            target="_blank"
            sx={{ color: "#EBEBEB" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            href="https://youtube.com"
            target="_blank"
            sx={{ color: "#EBEBEB" }}
          >
            <YouTubeIcon />
          </IconButton>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          gap: 2,
        }}
      >
        <Typography sx={sharedTextSx}>Контакти</Typography>
        <Link
          href={`tel:+380736832157`}
          underline="none"
          sx={{
            ...sharedTextSx,
            fontSize: "20px",
            "&:hover": { opacity: 0.8 },
          }}
        >
          +380 73 683 21 57
        </Link>
        <Link
          href={`mailto:def111tr092@gmail.com`}
          underline="none"
          sx={{
            ...sharedTextSx,
            fontSize: "20px",
            "&:hover": { opacity: 0.8 },
          }}
        >
          def111tr092@gmail.com
        </Link>
        <Typography sx={sharedTextSx}>Тарас Хміль</Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ xs: "center", md: "flex-end" }}
        width={{ xs: "100%", md: "auto" }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#B9C686",
              color: "#1D1D1D",
              fontWeight: 700,
              fontSize: "18px",
              height: "64px",
              width: { xs: "100%", lg: "550px" },
              maxWidth: "100%",
              "&:hover": { backgroundColor: "#A2B46A" },
            }}
            onClick={() => {
              document
                .getElementById("recruitment")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Приєднатися
          </Button>

          <Box sx={{ width: 60, height: 60 }}>
            <MainLogo className="white-icon" />
          </Box>
        </Stack>

        <Typography
          sx={{
            ...sharedTextSx,
            fontSize: "14px",
            mt: { xs: 4, md: 6 },
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} 92 Окремий Батальйон ТРО
        </Typography>
      </Box>
    </Box>
  );
};
