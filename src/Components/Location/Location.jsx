// src/components/Locations.jsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

/* --- Styled Components --- */
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: "#121212",
  color: "white",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(5, 0),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 700,
  color: "white",
  marginBottom: theme.spacing(0.5),
  fontFamily: "'Playfair Display', serif",
  fontSize: "2.5rem",
  "&:after": {
    content: '""',
    display: "block",
    width: "80px",
    height: "4px",
    backgroundColor: "#FFD700",
    margin: "16px auto 0",
    borderRadius: "2px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "#bbb",
  marginBottom: theme.spacing(2),
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "0.95rem",
}));

const LocationCard = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  cursor: "pointer",
  height: "260px",
  width: "320px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  backgroundColor: "#1c1c1c",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 16px 35px rgba(0,0,0,0.35)",
  },
  [theme.breakpoints.down("md")]: {
    width: "280px",
    height: "220px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90vw",
    height: "200px",
  },
}));

const LocationImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center center",
  display: "block",
  transition: "transform 0.4s ease",
  "&:hover": { transform: "scale(1.05)" },
}));

const LocationOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  background: "rgba(0,0,0,0.6)",
  color: "#fff",
  padding: theme.spacing(1.5),
  display: "flex",
  alignItems: "center",
  fontWeight: 600,
  fontFamily: "'Poppins', sans-serif",
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
    padding: theme.spacing(1),
  },
}));

/* --- Data --- */
const locationsData = [
  {
    id: 1,
    name: "Highway Branch",
    image: "https://kababjees.com/images/highway%20pic2.jpg",
    link: "https://maps.app.goo.gl/KYi8CdkcL19R4WTL7",
  },
  {
    id: 2,
    name: "Do Darya",
    image: "https://kababjees.com/images/dodarya1.jpg",
    link: "https://maps.app.goo.gl/QMhBD5FgxWTwysj77",
  },
  {
    id: 3,
    name: "Shaheed e Millat",
    image: "https://kababjees.com/images/s9millat%20pic1.jpg",
    link: "https://maps.app.goo.gl/ba4ySn91VfP1CtF39",
  },
  {
    id: 4,
    name: "Hyderabad Branch",
    image: "https://kababjees.com/images/hyderabad%202.jpg",
    link: "https://maps.app.goo.gl/Vh1ErRiivFEdy2XZA",
  },
  {
    id: 5,
    name: "Lahore Branch",
    image: "https://kababjees.com/images/lahore.jpg",
    link: "https://maps.app.goo.gl/DLqyPq15BRFw2eAs5",
  },
  {
    id: 6,
    name: "Falcon Malir",
    image: "https://kababjees.com/images/download.jpg",
    link: "https://maps.app.goo.gl/ciMTwWwZHQMToeAV9",
  },
];

/* --- Component --- */
const Locations = () => {
  return (
    <SectionContainer id="location">
      <Container
        maxWidth="lg"
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle
          variant="h3"
          component={motion.div}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          OUR LOCATIONS
        </SectionTitle>

        <SectionSubtitle
          variant="h6"
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Visit us at any of our branches across the city
        </SectionSubtitle>

        <Box
          component={motion.div}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 3, sm: 4 },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {locationsData.map((location) => (
            <motion.a
              key={location.id}
              href={location.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                show: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <LocationCard>
                <LocationImage src={location.image} alt={location.name} />
                <LocationOverlay>
                  <LocationOnIcon
                    sx={{
                      color: "#FFD700",
                      mr: 1,
                      fontSize: { xs: "1.1rem", sm: "1.3rem" },
                    }}
                  />
                  {location.name}
                </LocationOverlay>
              </LocationCard>
            </motion.a>
          ))}
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default Locations;
