// src/components/Reviews.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Rating,
  Avatar,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion } from "framer-motion";

/* --- Motion Variants --- */
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

/* --- Styled Components --- */
const SectionContainer = styled(Box)(({ theme }) => ({
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

const ReviewCard = styled(Card)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "14px",
  overflow: "hidden",
  minHeight: "280px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  backgroundColor: "#1c1c1c",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 16px 45px rgba(0,0,0,0.25)",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "240px",
  },
}));

const StyledRating = styled(Rating)(() => ({
  "& .MuiRating-iconFilled": { color: "#FFD700" },
  "& .MuiRating-iconEmpty": { color: "rgba(255, 255, 255, 0.3)" },
}));

const CarouselContainer = styled(Box)(() => ({
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

/* ✅ force 1 card per view on mobile */
const CarouselItem = styled(Box)(({ theme }) => ({
  flex: "0 0 auto",
  minWidth: "calc(33.333% - 16px)",
  padding: "0 12px",
  [theme.breakpoints.down("lg")]: {
    minWidth: "calc(50% - 16px)",
  },
  [theme.breakpoints.down("md")]: {
    minWidth: "100%",
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

/* Dummy Data */
const reviewsData = [
  {
    id: 1,
    name: "Ahmed Khan",
    rating: 4.5,
    comment:
      "The ambiance and food were amazing! Service quality is generally good, though a bit of waiting during busy hours.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Fatima Ali",
    rating: 5,
    comment:
      "Absolutely loved the food! The biryani was flavorful and the kebabs perfectly cooked. Will definitely visit again!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Usman Malik",
    rating: 4,
    comment:
      "Great food and good service. The restaurant has a warm atmosphere — only downside was waiting time during peak hours.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Sara Shah",
    rating: 5,
    comment:
      "Exceptional experience! Loved the desserts and drinks. Staff was very attentive and friendly.",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    date: "2 weeks ago",
  },
  {
    id: 5,
    name: "Ali Raza",
    rating: 4.5,
    comment:
      "Food presentation was excellent. Enjoyed every dish. Will come back for sure.",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    date: "3 weeks ago",
  },
  {
    id: 6,
    name: "Hina Khan",
    rating: 5,
    comment:
      "Amazing flavors and perfect service. The restaurant exceeded my expectations!",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
    date: "1 month ago",
  },
];

/* Component */
const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // ✅ touch swipe state
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
      prev >= reviewsData.length - itemsPerView ? 0 : prev + 1
    );

  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev <= 0 ? reviewsData.length - itemsPerView : prev - 1
    );

  const translateX = -(currentIndex * (100 / itemsPerView));

  // ✅ disable autoplay on mobile
  useEffect(() => {
    if (itemsPerView === 1) return;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [itemsPerView]);

  /* ✅ Touch Swipe Handlers */
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
    const threshold = 50;

    if (delta > threshold) handleNext();
    else if (delta < -threshold) handlePrev();

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <SectionContainer id="reviews">
      <Container maxWidth="lg">
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle variant="h3">CUSTOMER REVIEWS</SectionTitle>
          <SectionSubtitle variant="h6">
            What our customers say about us
          </SectionSubtitle>
        </motion.div>

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
            {reviewsData.map((review) => (
              <CarouselItem
                key={review.id}
                as={motion.div}
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <ReviewCard sx={{ width: "100%", maxWidth: 350 }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar
                        src={review.avatar}
                        alt={review.name}
                        sx={{
                          width: { xs: 48, sm: 56 },
                          height: { xs: 48, sm: 56 },
                          mr: 2,
                          border: "2px solid #FFD700",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: "1rem", sm: "1.1rem" },
                          }}
                        >
                          {review.name}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <StyledRating
                            value={review.rating}
                            precision={0.5}
                            readOnly
                            size="small"
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.4 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          <Typography
                            variant="body2"
                            sx={{ ml: 1, color: "#bbb", fontSize: "0.85rem" }}
                          >
                            {review.rating}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#ccc",
                        lineHeight: 1.7,
                        mb: 2,
                        fontStyle: "italic",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      }}
                    >
                      “{review.comment}”
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{
                        color: "#888",
                        fontStyle: "italic",
                        fontSize: { xs: "0.75rem", sm: "0.8rem" },
                      }}
                    >
                      {review.date}
                    </Typography>
                  </CardContent>
                </ReviewCard>
              </CarouselItem>
            ))}
          </CarouselTrack>

          <NavButton onClick={handleNext} sx={{ right: 0 }}>
            <ChevronRightIcon />
          </NavButton>
        </CarouselContainer>

        {/* Dots */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          {Array.from({
            length: Math.ceil(reviewsData.length / itemsPerView),
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
    </SectionContainer>
  );
};

export default Reviews;
