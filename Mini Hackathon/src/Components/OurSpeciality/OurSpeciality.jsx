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
  Grid,
  useTheme,
  useMediaQuery,
  Chip,
} from "@mui/material";
import { styled } from "@mui/system";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const SpecialtiesContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: "#fff",
  position: "relative",
  overflow: "hidden",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 700,
  color: "#121212",
  marginBottom: theme.spacing(1),
  fontFamily: "'Playfair Display', serif",
  position: "relative",
  "&:after": {
    content: '""',
    display: "block",
    width: "80px",
    height: "4px",
    backgroundColor: "#FFD700",
    margin: "16px auto 0",
    borderRadius: "2px",
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "#666",
  marginBottom: theme.spacing(6),
  maxWidth: "600px",
  marginLeft: "auto",
  marginRight: "auto",
  fontFamily: "'Poppins', sans-serif",
}));

const SpecialtyCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",
  margin: theme.spacing(0, 1),
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
    "& .order-button": {
      bottom: "16px",
    },
  },
}));

const CardMediaWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: "200px",
}));

const OverlayButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  bottom: "-50px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#FFD700",
  color: "#121212",
  fontWeight: 600,
  borderRadius: "30px",
  padding: "10px 24px",
  transition: "all 0.3s ease",
  zIndex: 2,
  "&:hover": {
    backgroundColor: "#FFC400",
  },
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "#fff",
  color: "#121212",
  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
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
  top: "12px",
  right: "12px",
  backgroundColor: "rgba(255,255,255,0.8)",
  color: "#121212",
  zIndex: 2,
  "&:hover": {
    backgroundColor: "#fff",
    color: "#E63946",
  },
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  overflow: "hidden",
}));

const CarouselTrack = styled(Box)(({ theme, translateX }) => ({
  display: "flex",
  transition: "transform 0.5s ease",
  transform: `translateX(${translateX}%)`,
  willChange: "transform",
}));

const CarouselItem = styled(Box)(({ theme }) => ({
  flex: "0 0 auto",
  minWidth: "calc(33.333% - 16px)",
  padding: "0 8px",
  [theme.breakpoints.down("lg")]: {
    minWidth: "calc(50% - 16px)",
  },
  [theme.breakpoints.down("md")]: {
    minWidth: "calc(100% - 16px)",
  },
}));

const specialtiesData = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken and aromatic spices.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D",
    category: "Rice Dishes",
  },
  {
    id: 2,
    name: "Mutton Karahi",
    description: "Tender mutton cooked in a traditional wok with tomatoes and spices.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2FyYWhpfGVufDB8fDB8fHww",
    category: "Curries",
  },
  {
    id: 3,
    name: "Paneer Tikka",
    description: "Cubes of paneer marinated in spices and grilled in a tandoor.",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMFRpa2thfGVufDB8fDB8fHww",
    category: "Vegetarian",
  },
  {
    id: 4,
    name: "Chicken Tikka Kabab",
    description: "Succulent pieces of chicken marinated in spices and grilled to perfection.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FiYWJ8ZW58MHx8MHx8fDA%3D",
    category: "Kababs",
  },
  {
    id: 5,
    name: "Beef Seekh Kabab",
    description: "Minced beef mixed with herbs and spices, skewered and grilled.",
    price: 14.99,
    image: "https://plus.unsplash.com/premium_photo-1661310019346-4cb563a19aec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2Vla2glMjBLYWJhYnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Kababs",
  },
  {
    id: 6,
    name: "Chicken Handi",
    description: "Chicken cooked in a rich, creamy gravy with herbs and spices.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGN1cnJ5fGVufDB8fDB8fHww",
    category: "Curries",
  },{
    id: 7,
    name: "Chicken Handi",
    description: "Chicken cooked in a rich, creamy gravy with herbs and spices.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGN1cnJ5fGVufDB8fDB8fHww",
    category: "Curries",
  },{
    id: 8,
    name: "Chicken Handi",
    description: "Chicken cooked in a rich, creamy gravy with herbs and spices.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGN1cnJ5fGVufDB8fDB8fHww",
    category: "Curries",
  },
];

const OurSpecialties = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1200) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= specialtiesData.length - itemsPerView ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? specialtiesData.length - itemsPerView : prevIndex - 1
    );
  };

  const translateX = -(currentIndex * (100 / itemsPerView));

  return (
    <SpecialtiesContainer id="specialties"sx={{ backgroundColor: "#121212", py: 8 }}>
      <Container maxWidth="lg">
        <SectionTitle variant="h2" component="h2" sx={{color:'white'}}>
          OUR SPECIALITIES
        </SectionTitle>
        
        <SectionSubtitle variant="h6" component="p">
          Some of our best Specialties menu
        </SectionSubtitle>

        <CarouselContainer>
          <NavButton 
            onClick={handlePrev}
            sx={{ left: 0 }}
            aria-label="Previous specialties"
          >
            <ChevronLeftIcon />
          </NavButton>

          <CarouselTrack translateX={translateX}>
            {specialtiesData.map((item) => (
              <CarouselItem key={item.id}>
                <SpecialtyCard>
                  <CardMediaWrapper>
                    <CardMedia
                      component="img"
                      height="300"
                      image={item.image}
                      alt={item.name}
                      sx={{ 
                        transition: "transform 0.5s ease", 
                        "&:hover": { transform: "scale(1.1)" } 
                      }}
                    />
                    <FavoriteButton aria-label="Add to favorites">
                      <FavoriteBorderIcon />
                    </FavoriteButton>
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        backgroundColor: "#FFD700",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        zIndex: 2,
                      }}
                    />
                    <OverlayButton
                      startIcon={<ShoppingCartIcon />}
                      className="order-button"
                    >
                      ORDER ONLINE
                    </OverlayButton>
                  </CardMediaWrapper>
                  
                  <CardContent sx={{ padding: 3 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        marginBottom: 1,
                        fontFamily: "'Poppins', sans-serif",
                        color: "#121212",
                      }}
                    >
                      {item.name}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        marginBottom: 2,
                        fontFamily: "'Poppins', sans-serif",
                        minHeight: "40px",
                      }}
                    >
                      {item.description}
                    </Typography>
                    
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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

          <NavButton 
            onClick={handleNext}
            sx={{ right: 0 }}
            aria-label="Next specialties"
          >
            <ChevronRightIcon />
          </NavButton>
        </CarouselContainer>

        {/* Dots indicator */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
          {Array.from({ 
            length: Math.ceil(specialtiesData.length / itemsPerView) 
          }).map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: currentIndex === index * itemsPerView ? "#FFD700" : "#ddd",
                margin: "0 4px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => setCurrentIndex(index * itemsPerView)}
            />
          ))}
        </Box>
      </Container>
    </SpecialtiesContainer>
  );
};

export default OurSpecialties;