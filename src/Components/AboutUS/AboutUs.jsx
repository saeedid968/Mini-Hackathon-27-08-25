import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const AboutUS = () => {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "#121212",
        py: 8,
        scrollMarginTop: { xs: 100, md: 100 },
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          {/* Left Side: Text */}
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "white", mb: 3 }}
            >
              ABOUT US
            </Typography>

            <Typography sx={{ color: "#ccc", mb: 2, lineHeight: 1.8 }}>
              We welcome you to explore our taste of the world, in continental
              and Chinese delights and that's even before you get to the variety
              and excellence of our barbecue grill. With warmth service rarely
              experienced, it is a perfect place of rejoice with family...
            </Typography>

            <Typography sx={{ color: "#ccc", mb: 2, lineHeight: 1.8 }}>
              Now with our network of four branches across the city of lights...
            </Typography>

            <Typography sx={{ color: "#FFD700", fontWeight: 600 }}>
              Call 111-666-111 for more information.
            </Typography>
          </Grid>

          {/* Right Side: Image */}
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80"
              alt="Restaurant Interior"
              sx={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUS;
