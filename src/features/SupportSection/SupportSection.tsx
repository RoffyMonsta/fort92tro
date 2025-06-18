import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const SupportSection: React.FC = () => {
  return (
    <Box
      component="section"
      id="support"
      sx={{
        backgroundColor: (theme) => alpha("#B9C686", 0.05),
        color: "#EBEBEB",
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        gap={4}
      >
        <Box
          component="img"
          loading="lazy"
          src="/img/support_pic.png"
          alt="Support soldiers"
          sx={{
            width: { xs: "100%", sm: 220 },
            height: { xs: "auto", sm: 170 },
            borderRadius: 2,
            objectFit: "cover",
          }}
        />
        <Box>
          <Typography
            sx={{
              fontFamily: "e-Ukraine",
              fontWeight: 700,
              fontSize: { xs: "28px", md: "82px" },
              textTransform: "uppercase",
              lineHeight: 1.2,
            }}
          >
            Як підтримати
          </Typography>
          <Typography
            sx={{
              fontFamily: "e-Ukraine",
              fontWeight: 700,
              fontSize: { xs: "28px", md: "82px" },
              textTransform: "uppercase",
              lineHeight: 1.2,
            }}
          >
            92 ОБТРО
          </Typography>
        </Box>
      </Box>

      {/* Payment Info */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        sx={{
          mt: 6,
          backgroundColor: "#2A2A2A",
          borderRadius: 2,
          p: { xs: 3, md: 6 },
        }}
      >
        <Stack spacing={5} flex={1} width="100%">
          {/* PrivatBank Section */}
          <Box>
            <Typography
              fontWeight={700}
              fontSize={{ xs: 24, md: 34 }}
              mb={1}
              textTransform="uppercase"
            >
              Реквізити (UAH)
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={16}
              textTransform="uppercase"
            >
              Реквізити для переказів в національній валюті (UAH)
            </Typography>
            <Typography mt={1} fontWeight={200} fontSize={16}>
              Банк одержувача: АТ КБ «ПриватБанк»
            </Typography>
            <Typography fontWeight={200} fontSize={16}>
              МФО: 305000
            </Typography>
            <Typography fontWeight={200} fontSize={16}>
              КОД ЄДРПОУ: 45000000
            </Typography>
            <Typography fontWeight={700} fontSize={16}>
              РАХУНОК №: UA000000000000000000000000000
            </Typography>
          </Box>

          {/* Monobank Section */}
          <Box>
            <Typography
              fontWeight={700}
              fontSize={{ xs: 24, md: 34 }}
              mb={1}
              textTransform="uppercase"
            >
              Monobank
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={16}
              textTransform="uppercase"
            >
              Реквізити для переказів в національній валюті (UAH)
            </Typography>
            <Typography mt={1} fontWeight={200} fontSize={16}>
              Банк одержувача: АТ КБ «ПриватБанк»
            </Typography>
            <Typography fontWeight={200} fontSize={16}>
              МФО: 305000
            </Typography>
            <Typography fontWeight={200} fontSize={16}>
              КОД ЄДРПОУ: 45000000
            </Typography>
            <Typography fontWeight={700} fontSize={16}>
              РАХУНОК №: UA000000000000000000000000000
            </Typography>
          </Box>
        </Stack>

        {/* QR Code with click hint */}
        <Box
          component="a"
          href="https://send.monobank.ua/jar/8rDGxu5aQ"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: "relative",
            width: { xs: 140, md: 220 },
            mt: { xs: 4, md: 0 },
            alignSelf: { xs: "center", md: "flex-end" },
            display: "block",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          <Box
            component="img"
            loading="lazy"
            src="/img/monobank_qr.png"
            alt="QR Monobank"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 1,
            }}
          />
          <Typography
            sx={{
              mt: 1,
              fontSize: "14px",
              color: "#C1D892",
              fontWeight: 500,
              fontFamily: "e-Ukraine",
            }}
          >
            Натисніть, щоб відкрити
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
