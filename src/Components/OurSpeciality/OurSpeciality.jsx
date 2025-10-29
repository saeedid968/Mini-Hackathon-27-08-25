import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Chip,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { motion } from "framer-motion";

/* Framer Motion Variants */
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

/* --- Styled Components --- */
const SpecialtiesContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  minHeight: "90vh",
  backgroundColor: "#121212",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3, 0),
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

const SpecialtyCard = styled(Card)(({ theme }) => ({
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  transition: "all 0.3s ease",
  margin: theme.spacing(0, 1),
  backgroundColor: "#fff",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
  },
}));

const OverlayButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  bottom: "8px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#FFD700",
  color: "#121212",
  fontWeight: 600,
  borderRadius: "20px",
  padding: "4px 12px",
  fontSize: "0.7rem",
  zIndex: 2,
  "&:hover": { backgroundColor: "#FFC400" },
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "#fff",
  color: "#121212",
  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  zIndex: 10,
  "&:hover": {
    backgroundColor: "#FFD700",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const FavoriteButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "rgba(255,255,255,0.9)",
  color: "#121212",
  zIndex: 3,
  "&:hover": {
    backgroundColor: "#fff",
    color: "#E63946",
  },
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  touchAction: "pan-y",
}));

const CarouselTrack = styled(Box, {
  shouldForwardProp: (prop) => prop !== "translateX",
})(({ translateX }) => ({
  display: "flex",
  transition: "transform 0.5s ease",
  transform: `translateX(${translateX}%)`,
  willChange: "transform",
}));

/* ✅ FULL WIDTH on mobile */
const CarouselItem = styled(Box)(({ theme }) => ({
  flex: "0 0 auto",
  minWidth: "calc(33.333% - 16px)",
  padding: "0 8px",
  [theme.breakpoints.down("lg")]: {
    minWidth: "calc(50% - 16px)",
  },
  [theme.breakpoints.down("md")]: {
    minWidth: "100%",
  },
}));

const CardMediaWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "160px",
  [theme.breakpoints.down("sm")]: {
    height: "140px",
  },
}));

/* --- Data --- */
const specialtiesData = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken and aromatic spices.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?w=500&auto=format&fit=crop&q=60",
    category: "Rice Dishes",
  },
  {
    id: 2,
    name: "Mutton Karahi",
    description: "Tender mutton cooked in a traditional wok with tomatoes and spices.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=500&auto=format&fit=crop&q=60",
    category: "Curries",
  },
  {
    id: 3,
    name: "Paneer Tikka",
    description: "Cubes of paneer marinated in spices and grilled.",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60",
    category: "Vegetarian",
  },
  {
    id: 4,
    name: "Fish Curry",
    description: "Fresh fish simmered in coconut curry.",
    price: 17.49,
    image: "https://images.unsplash.com/photo-1716816211582-ef70b1cd2e70?auto=format&fit=crop&q=80&w=870",
    category: "Seafood",
  },
  {
    id: 5,
    name: "Veggie Spring Rolls",
    description: "Crispy rolls with vegetables.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&auto=format&fit=crop&q=60",
    category: "Appetizers",
  },
  {
    id: 6,
    name: "Lamb Kebab",
    description: "Juicy lamb grilled to perfection.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500&auto=format&fit=crop&q=60",
    category: "Grilled",
  },
];

/* --- Component --- */
const OurSpecialties = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1200) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () =>
    setCurrentIndex((prev) =>
      prev >= specialtiesData.length - itemsPerView ? 0 : prev + 1
    );

  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev <= 0 ? specialtiesData.length - itemsPerView : prev - 1
    );

  const translateX = -(currentIndex * (100 / itemsPerView));

  /* ✅ disable autoplay on phones */
  useEffect(() => {
    if (itemsPerView === 1) return;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [itemsPerView]);

  /* ✅ TOUCH */
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const delta = touchStartX - touchEndX;

    if (delta > 50) handleNext();
    if (delta < -50) handlePrev();

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <SpecialtiesContainer id="menu">
      <Container maxWidth="lg">
        <SectionTitle
          variant="h2"
          component={motion.div}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          OUR SPECIALTIES
        </SectionTitle>

        <SectionSubtitle
          component={motion.div}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Some of our best specialties menu
        </SectionSubtitle>

        <CarouselContainer>
          <NavButton onClick={handlePrev} sx={{ left: 0 }}>
            <ChevronLeftIcon />
          </NavButton>

          <CarouselTrack
            translateX={translateX}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {specialtiesData.map((item) => (
              <CarouselItem
                key={item.id}
                component={motion.div}
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <SpecialtyCard sx={{ maxWidth: 350, margin: "0 auto" }}>
                  <CardMediaWrapper>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.name}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <FavoriteButton>
                      <FavoriteBorderIcon />
                    </FavoriteButton>
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        backgroundColor: "#FFD700",
                        fontWeight: 600,
                      }}
                    />
                    <OverlayButton startIcon={<ShoppingCartIcon />}>
                      ORDER ONLINE
                    </OverlayButton>
                  </CardMediaWrapper>

                  <CardContent sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        fontFamily: "'Poppins', sans-serif",
                        minHeight: "40px",
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#E63946",
                          fontWeight: 700,
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        ${item.price.toFixed(2)}
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: "#FFD700",
                          color: "#121212",
                          fontWeight: 600,
                          "&:hover": {
                            borderColor: "#FFC400",
                            backgroundColor: "rgba(255, 215, 0, 0.1)",
                          },
                        }}
                      >
                        Details
                      </Button>
                    </Box>
                  </CardContent>
                </SpecialtyCard>
              </CarouselItem>
            ))}
          </CarouselTrack>

          <NavButton onClick={handleNext} sx={{ right: 0 }}>
            <ChevronRightIcon />
          </NavButton>
        </CarouselContainer>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          {Array.from({ length: Math.ceil(specialtiesData.length / itemsPerView) }).map(
            (_, index) => (
              <Box
                key={index}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor:
                    currentIndex === index * itemsPerView ? "#FFD700" : "#555",
                  mx: 0.5,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onClick={() => setCurrentIndex(index * itemsPerView)}
              />
            )
          )}
        </Box>
      </Container>
    </SpecialtiesContainer>
  );
};

export default OurSpecialties;
