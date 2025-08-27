import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// ==== Styled Components ====
const DiscountsContainer = styled(Box)(({ theme }) => ({
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
  maxWidth: "800px",
  marginLeft: "auto",
  marginRight: "auto",
  fontFamily: "'Poppins', sans-serif",
}));

const DiscountCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",
  margin: theme.spacing(0, 1),
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
  },
}));

const CardMediaWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: "420px", // adjust as you like
  backgroundColor: "#f7f7f7",
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

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  overflow: "hidden",
}));

const CarouselTrack = styled(Box)(({ translateX }) => ({
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

// ==== Discounts Data ====
const discountData = [
  {
    id: 1,
    image: "https://kababjees.com/images/discount-3.jpeg",
    link: "https://kababjees.com", // make image clickable
  },
  {
    id: 2,
    image: "https://kababjees.com/images/ne-ubl.jpg",
    link: "https://kababjees.com",
  },
  {
    id: 3,
    image: "https://kababjees.com/images/meezan-bank-new-discount.jpeg",
    link: "https://kababjees.com",
  },
  {
    id: 4,
    image: "https://kababjees.com/images/adamjeee-bnk-new.jpg",
    link: "https://kababjees.com",
  },
  {
    id: 5,
    image: "https://kababjees.com/images/js-new-bank-discount-kababjees.jpeg",
    link: "https://kababjees.com",
  },
];

// ==== Component ====
const BankDiscounts = () => {
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
      prevIndex >= discountData.length - itemsPerView ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? discountData.length - itemsPerView : prevIndex - 1
    );
  };

  const translateX = -(currentIndex * (100 / itemsPerView));

  return (
    <DiscountsContainer id="discounts" sx={{backgroundColor: "#121212" }}>
      <Container maxWidth="lg">
        <SectionTitle variant="h2" sx={{color:'white'}}>BANK DISCOUNTS</SectionTitle>
        <SectionSubtitle variant="h6" sx={{color:'	#839599ff'}}>
          Save more with exclusive bank offers at Kababjees
        </SectionSubtitle>

        <CarouselContainer>
          <NavButton onClick={handlePrev} sx={{ left: 0, }} aria-label="Previous offers">
            <ChevronLeftIcon />
          </NavButton>

          <CarouselTrack translateX={translateX}>
            {discountData.map((offer) => (
              <CarouselItem key={offer.id}>
                <a href={offer.link} target="_blank" rel="noopener noreferrer">
                  <DiscountCard>
                    <CardMediaWrapper>
                      <CardMedia
                        component="img"
                        image={offer.image}
                        alt="discount"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover", // ensures it covers nicely
                        }}
                      />
                    </CardMediaWrapper>
                  </DiscountCard>
                </a>
              </CarouselItem>
            ))}
          </CarouselTrack>

          <NavButton onClick={handleNext} sx={{ right: 0 }} aria-label="Next offers">
            <ChevronRightIcon />
          </NavButton>
        </CarouselContainer>

        {/* Dots Indicator */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          {Array.from({ length: Math.ceil(discountData.length / itemsPerView) }).map((_, index) => (
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
    </DiscountsContainer>
  );
};

export default BankDiscounts;
