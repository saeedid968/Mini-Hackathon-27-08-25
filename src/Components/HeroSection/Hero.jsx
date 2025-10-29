import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Smooth fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  display: "flex",
  alignItems: "center",
  color: "white",
  overflow: "hidden",
  padding: theme.spacing(10, 0, 8),

  // Create a dark overlay + vignette effect
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `
      radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%),
      linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75))
    `,
    zIndex: 1,
  },
}));

const ContentBox = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  animation: `${fadeIn} 1s ease-out`,
}));

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HeroContainer>
      <ContentBox maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={8}>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "#FFD700",
                fontFamily: "'Marcellus', serif",
                letterSpacing: "1px",
                lineHeight: 1.2,
                marginTop: 8,
                textShadow: "0 0 10px rgba(255,215,0,0.4)",
              }}
            >
              THE BEST PLACE TO REJOICE
            </Typography>

            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h2"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: "white",
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                fontFamily: "'Lato', sans-serif",
                letterSpacing: "0.5px",
              }}
            >
              VARIETY OF CUISINES <br /> UNFORGETTABLE EXPERIENCES
            </Typography>

            <Typography
              variant="body1"
              component="p"
              sx={{
                mb: 5,
                maxWidth: "600px",
                textShadow: "0 1px 3px rgba(0,0,0,0.6)",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Experience the finest dining with our exquisite collection of
              dishes from around the world. Perfect for family gatherings,
              romantic dinners, and special celebrations — a place where every
              bite feels like a celebration.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Button
                onClick={() => {
                  const section = document.getElementById("menu");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#FFD700",
                  color: "#121212",
                  fontWeight: 700,
                  padding: "12px 36px",
                  borderRadius: "30px",
                  boxShadow: "0 4px 15px rgba(255,215,0,0.4)",
                  "&:hover": {
                    backgroundColor: "#FFC400",
                    transform: "translateY(-3px)",
                    boxShadow: "0 6px 18px rgba(255,215,0,0.5)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                ORDER NOW
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  const section = document.getElementById("menu");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                sx={{
                  borderColor: "#FFD700",
                  color: "#FFD700",
                  fontWeight: 700,
                  padding: "12px 36px",
                  borderRadius: "30px",
                  "&:hover": {
                    borderColor: "#FFC400",
                    color: "#FFC400",
                    backgroundColor: "rgba(255, 215, 0, 0.1)",
                    transform: "translateY(-3px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                VIEW MENU
              </Button>
            </Box>
          </Grid>

          {/* Right Panel */}
          {!isMobile && (
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: "rgba(0,0,0,0.4)",
                  padding: 4,
                  borderRadius: 3,
                  border: "1px solid rgba(255, 215, 0, 0.3)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                  animation: `${fadeIn} 1.2s ease-out`,
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "#FFD700",
                    fontWeight: 700,
                    textAlign: "center",
                    letterSpacing: "1px",
                  }}
                >
                  ✨ Special Offers ✨
                </Typography>
                <Box
                  sx={{ textAlign: "center", color: "rgba(255,255,255,0.85)" }}
                >
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    🎉 20% OFF on your first order
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    🕒 Free delivery on orders above $50
                  </Typography>
                  <Typography variant="body1">
                    🎂 Complimentary dessert on birthdays
                  </Typography>
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
      </ContentBox>
    </HeroContainer>
  );
};

export default HeroSection;
