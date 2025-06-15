import { Box, Grid, Typography } from "@mui/material";
import { ReactComponent as ShieldIcon } from "../../assets/icons/shield_icon.svg";

const reasons = [
  "Професійне навчання",
  "Забезпечення формою",
  "Професійне навчання", // duplicated for layout
  "Мотиваційні виплати",
  "Великий вибір професій",
  "Справжнє братерство",
  "Надаємо спорядження",
];

export const WhyUsSection = () => {
  return (
    <Box
      component="section"
      id="why"
      sx={{
        backgroundColor: "#1D1D1D",
        backgroundImage:
          "radial-gradient(rgba(0, 0, 0, 0.25) 1px, transparent 1px)",
        backgroundSize: "2px 2px",
        px: 4,
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Title */}
      <Box display="flex" alignItems="center" gap={1} mb={6}>
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
          Чому варто обрати 92-й батальйон
        </Typography>
      </Box>

      {/* Grid of cards */}
      <Grid container spacing={3}>
        {reasons.map((text, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{
              minHeight: 160,
              display: "flex",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#B9C6860D",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 3,
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "e-Ukraine",
                  fontWeight: 700,
                  fontSize: "clamp(16px, 1.5vw, 20px)",
                  color: "#EBEBEB",
                  textTransform: "uppercase",
                }}
              >
                {text}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "e-Ukraine",
                  fontSize: "12px",
                  fontWeight: 200,
                  color: "#EBEBEB",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
