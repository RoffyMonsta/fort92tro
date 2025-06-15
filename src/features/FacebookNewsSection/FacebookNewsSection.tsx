import { useEffect } from "react";
import { Box, Typography } from "@mui/material";

export const FacebookNewsSection = () => {
  useEffect(() => {
    // Завантажити Facebook SDK лише один раз
    if (!(window as any).FB) {
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/uk_UA/sdk.js#xfbml=1&version=v19.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        if ((window as any).FB) (window as any).FB.XFBML.parse();
      };
      document.body.appendChild(script);
    } else {
      (window as any).FB.XFBML.parse();
    }
  }, []);

  return (
    <Box
      component="section"
      id="facebook-news"
      sx={{
        backgroundColor: "#1D1D1D",
        backgroundImage:
          "radial-gradient(rgba(0, 0, 0, 0.25) 1px, transparent 1px)",
        backgroundSize: "2px 2px",
        px: 4,
        py: { xs: 8, md: 12 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "e-Ukraine",
          fontWeight: 700,
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "#EBEBEB",
          textTransform: "uppercase",
          mb: 4,
        }}
      >
        Останні новини з Facebook
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          backgroundColor: "#fff",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          className="fb-page"
          data-href="https://www.facebook.com/profile.php?id=61573346511189"
          data-tabs="timeline"
          data-width="500"
          data-height="700"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/profile.php?id=61573346511189"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/profile.php?id=61573346511189">
              Brigade of Chernivtsy
            </a>
          </blockquote>
        </div>
      </Box>
    </Box>
  );
};
