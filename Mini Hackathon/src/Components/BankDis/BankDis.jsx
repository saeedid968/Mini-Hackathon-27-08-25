import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

/* ==== Styled Components ==== */
const DiscountsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: "#121212",
  position: "relative",
  overflow: "hidden",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 700,
  color: "white",
  marginBottom: theme.spacing(0.5), // smaller margin
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
  marginBottom: theme.spacing(2), // smaller margin
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "0.95rem",
}));


const DiscountCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
  transition: "all 0.3s ease",
  margin: theme.spacing(0, 1),
  backgroundColor: "#1E1E1E",
  color: "#fff",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 36px rgba(0,0,0,0.5)",
  },
}));

const CardIconWrapper = styled(Box)(({ theme }) => ({
  fontSize: "3rem",
  color: "#FFD700",
  marginBottom: theme.spacing(2),
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  touchAction: "pan-y",
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

/* ==== Discounts Data ==== */
const discountData = [
  {
    id: 1,
    bank: "UBL Bank",
    offer: "20% OFF on all orders",
    icon: <AccountBalanceIcon />,
  },
  {
    id: 2,
    bank: "Meezan Bank",
    offer: "15% cashback up to $10",
    icon: <LocalOfferIcon />,
  },
  {
    id: 3,
    bank: "HBL Bank",
    offer: "Buy 1 Get 1 Free on selected items",
    icon: <AccountBalanceIcon />,
  },
  {
    id: 4,
    bank: "MCB Bank",
    offer: "10% discount every Friday",
    icon: <LocalOfferIcon />,
  },
  {
    id: 5,
    bank: "JS Bank",
    offer: "Flat $5 off on orders above $30",
    icon: <AccountBalanceIcon />,
  },
  {
    id: 6,
    bank: "Adamjee Bank",
    offer: "Free dessert on orders above $25",
    icon: <LocalOfferIcon />,
  },
];

/* ==== Component ==== */
const BankDiscounts = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

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
      prev >= discountData.length - itemsPerView ? 0 : prev + 1
    );

  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev <= 0 ? discountData.length - itemsPerView : prev - 1
    );

  const translateX = -(currentIndex * (100 / itemsPerView));

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <DiscountsContainer id="discounts">
      <Container maxWidth="lg">
        <SectionTitle variant="h2">BANK DISCOUNTS</SectionTitle>
        <SectionSubtitle>
          Save more with exclusive bank offers
        </SectionSubtitle>  

        <CarouselContainer>
          <NavButton onClick={handlePrev} sx={{ left: 0 }}>
            <ChevronLeftIcon />
          </NavButton>

          <CarouselTrack translateX={translateX}>
            {discountData.map((offer) => (
              <CarouselItem key={offer.id}>
                <DiscountCard>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <CardIconWrapper>{offer.icon}</CardIconWrapper>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {offer.bank}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                        fontFamily: "'Poppins', sans-serif",
                        color: "#ddd",
                      }}
                    >
                      {offer.offer}
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        mt: 2,
                        borderColor: "#FFD700",
                        color: "#FFD700",
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "rgba(255,215,0,0.1)",
                          borderColor: "#FFC400",
                          color: "#FFC400",
                        },
                      }}
                    >
                      Redeem Offer
                    </Button>
                  </CardContent>
                </DiscountCard>
              </CarouselItem>
            ))}
          </CarouselTrack>

          <NavButton onClick={handleNext} sx={{ right: 0 }}>
            <ChevronRightIcon />
          </NavButton>
        </CarouselContainer>

        {/* Dots Indicator */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          {Array.from({
            length: Math.ceil(discountData.length / itemsPerView),
          }).map((_, index) => (
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
          ))}
        </Box>
      </Container>
    </DiscountsContainer>
  );
};

export default BankDiscounts;
