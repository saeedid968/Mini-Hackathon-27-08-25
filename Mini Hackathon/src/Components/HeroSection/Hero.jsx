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
import { styled } from "@mui/system";

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  display: "flex",
  alignItems: "center",
  paddingTop: "80px", // Account for fixed navbar
  color: "white",
}));

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "#FFD700",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              THE BEST PLACE TO REJOICE
            </Typography>
            
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 4,
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              VARIETY OF CUISINES
            </Typography>
            
            <Typography
              variant="h6"
              component="p"
              sx={{
                mb: 4,
                maxWidth: "600px",
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.6,
              }}
            >
              Experience the finest dining with our exquisite collection of dishes 
              from around the world. Perfect for family gatherings, romantic dinners, 
              and special celebrations.
            </Typography>
            
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#FFD700",
                  color: "#121212",
                  fontWeight: 700,
                  padding: "12px 30px",
                  "&:hover": {
                    backgroundColor: "#FFC400",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                ORDER NOW
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "#FFD700",
                  color: "#FFD700",
                  fontWeight: 700,
                  padding: "12px 30px",
                  "&:hover": {
                    borderColor: "#FFC400",
                    color: "#FFC400",
                    backgroundColor: "rgba(255, 215, 0, 0.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                VIEW MENU
              </Button>
            </Box>
          </Grid>
          
          {!isMobile && (
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: "rgba(255, 215, 0, 0.1)",
                  padding: 3,
                  borderRadius: 2,
                  border: "1px solid rgba(255, 215, 0, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "#FFD700", fontWeight: 600 }}
                >
                  Special Offers
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  🎉 20% OFF on your first order
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  🕒 Free delivery on orders above $50
                </Typography>
                <Typography variant="body2">
                  🎂 Complimentary dessert on birthdays
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;