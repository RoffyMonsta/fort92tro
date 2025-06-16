import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { positions } from "./positions";

export const PositionsAccordion: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {positions.map((position) => (
        <Accordion
          key={position.id}
          disableGutters
          sx={{
            mb: 2,
            backgroundColor: "#2A2A2A",
            color: "#EBEBEB",
            borderRadius: 0,
            boxShadow: "none",
            "&::before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#EBEBEB" }} />}
            aria-controls={`panel-${position.id}-content`}
            id={`panel-${position.id}-header`}
            sx={{
              px: 3,
              py: 2,
              "& .MuiTypography-root": {
                fontSize: "18px",
                fontWeight: 700,
                textTransform: "uppercase",
              },
            }}
          >
            <Typography>{position.title}</Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ px: 3, pb: 3, pt: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, mb: 0.5 }}
                >
                  Обов'язки:
                </Typography>
                <Typography variant="body2">{position.requirements}</Typography>
              </Box>

              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, mb: 0.5 }}
                >
                  Умови служби:
                </Typography>
                <Typography variant="body2">
                  {position.termsOfService}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, mb: 0.5 }}
                >
                  Кому підійде:
                </Typography>
                <Typography variant="body2">{position.suitableFor}</Typography>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
