import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqItems, allRemainingFaqItems } from "./faqData";
import { ReactComponent as ShieldIcon } from "../../assets/icons/shield_icon.svg";

const renderAnswer = (answer: string) => {
  const isList = answer.includes("▪");
  if (!isList) return <Typography>{answer}</Typography>;

  const items = answer
    .split("▪")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <Box component="ul" sx={{ pl: 3, m: 0 }}>
      {items.map((item, index) => (
        <li key={index}>
          <Typography>{item}</Typography>
        </li>
      ))}
    </Box>
  );
};

export const FaqSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | false>(false);
  const [showAll, setShowAll] = useState(false);

  const handleChange =
    (id: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedId(isExpanded ? id : false);
    };

  const accordionStyles = {
    mb: 2,
    backgroundColor: "#2A2A2A",
    color: "#EBEBEB",
    borderRadius: 0,
    boxShadow: "none",
    "&::before": { display: "none" },
  };

  const accordionItemStyles = {
    px: 3,
    py: 2,
    "& .MuiTypography-root:not(.faq-number)": {
      fontSize: "18px",
      fontWeight: 700,
      textTransform: "uppercase",
    },
  };

  return (
    <Box
      component="section"
      id="faq"
      sx={{ px: { xs: 2, md: 8 }, py: { xs: 6, md: 10 }, bgcolor: "#1D1D1D" }}
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
          Запитання та відповіді
        </Typography>
      </Box>

      {faqItems.map((item, idx) => (
        <Accordion
          disableGutters
          key={item.id}
          expanded={expandedId === item.id}
          onChange={handleChange(item.id)}
          sx={accordionStyles}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#EBEBEB" }} />}
            sx={{
              ...accordionItemStyles,
              position: "relative",
              pl: 5,
            }}
          >
            <Typography
              className="faq-number"
              sx={{
                position: "absolute",
                left: 16,
                top: 12,
                fontSize: "12px",
                color: "#EBEBEB",
                fontWeight: 200,
                fontFamily: "e-Ukraine",
              }}
            >
              {String(idx + 1).padStart(2, "0")}
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#EBEBEB",
                textTransform: "uppercase",
              }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>{renderAnswer(item.answer)}</AccordionDetails>
        </Accordion>
      ))}

      <Accordion
        expanded={showAll}
        disableGutters
        onChange={() => setShowAll(!showAll)}
        sx={{
          ...accordionStyles,
          backgroundColor: "#B9C686",
          color: "#1D1D1D",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            ...accordionItemStyles,
            position: "relative",
            pl: 5,
          }}
        >
          <Typography fontWeight={700}>Відкрити всі питання</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0, bgcolor: "#2A2A2A" }}>
          {allRemainingFaqItems.map((item, idx) => (
            <Box
              key={item.id}
              sx={{
                backgroundColor: "#2A2A2A",
                color: "#EBEBEB",
                px: 1,
                py: 2,
                position: "relative",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  left: 16,
                  top: 12,
                  fontSize: "12px",
                  color: "#EBEBEB",
                  fontWeight: 200,
                  fontFamily: "e-Ukraine",
                }}
              >
                {String(idx + faqItems.length + 1).padStart(2, "0")}
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  pl: 5, // matches left offset from number
                  mb: 1,
                }}
              >
                {item.question}
              </Typography>

              <Box sx={{ pl: 5 }}>{renderAnswer(item.answer)}</Box>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
