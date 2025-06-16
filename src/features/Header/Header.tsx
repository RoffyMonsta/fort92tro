import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactComponent as MainLogo } from "../../assets/icons/main_logo.svg";

const navLinks = [
  { label: "Про батальйон", id: "about" },
  { label: "Бойовий шлях", id: "path" },
  { label: "Чому ми?", id: "why" },
  { label: "Як долучитися?", id: "join" },
  { label: "Вакансії", id: "vacancies" },
];

const headerFont = {
  fontWeight: 700,
  fontSize: "13px",
  color: "#1D1D1D",
};

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            padding: { xs: 0, lg: "16px 42px" },
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{
              backgroundColor: "#B9C686",
              boxShadow: 1,
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* Logo */}
            <Box display="flex" alignItems="center" sx={{ flexShrink: 0 }}>
              <a href="#" style={{ display: "flex", alignItems: "center" }}>
                <MainLogo
                  style={{
                    height: 42,
                    width: 42,
                    cursor: "pointer",
                  }}
                />
              </a>
            </Box>

            {/* Desktop Nav */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                gap: 2,
                alignItems: "center",
              }}
            >
              {navLinks.map(({ label, id }) => (
                <Button
                  key={id}
                  sx={{ ...headerFont }}
                  onClick={() => {
                    document
                      .getElementById(id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
            {/* Desktop Support buttons */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                gap: 2,
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  ...headerFont,
                  color: "#B9C686",
                  backgroundColor: "#263416",
                }}
              >
                Підтримати
              </Button>
              <Button
                variant="contained"
                sx={{
                  ...headerFont,
                  color: "#B9C686",
                  backgroundColor: "#000",
                }}
                onClick={() => {
                  document
                    .getElementById("recruitment")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Приєднатися
              </Button>
            </Box>

            {/* Burger Icon */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "flex", lg: "none" } }}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "#B9C686",
            },
          },
        }}
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {navLinks.map(({ label, id }) => (
              <ListItemButton
                key={id}
                onClick={() => {
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setDrawerOpen(false);
                }}
              >
                <ListItemText
                  primary={label}
                  slotProps={{ primary: { sx: headerFont } }}
                />
              </ListItemButton>
            ))}
            <Box
              display="flex"
              flexDirection={"column"}
              alignItems="center"
              sx={{ px: 2, py: 1, gap: 2 }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{
                  ...headerFont,
                  color: "#B9C686",
                  backgroundColor: "#263416",
                }}
              >
                Підтримати
              </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  ...headerFont,
                  color: "#B9C686",
                  backgroundColor: "#000",
                }}
                onClick={() => {
                  document
                    .getElementById("recruitment")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setDrawerOpen(false);
                }}
              >
                Приєднатися
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
