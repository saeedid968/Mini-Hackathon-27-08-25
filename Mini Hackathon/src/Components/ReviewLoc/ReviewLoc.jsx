import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Rating,
  Avatar,
  Divider,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: "#f8f9fa",
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

const ReviewCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
  },
}));

// Location card as just image with overlay
const LocationCard = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  cursor: "pointer",
  height: "250px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 35px rgba(0,0,0,0.2)",
  },
}));

const LocationImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

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
}));

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#FFD700",
  },
});

const reviewsData = [
  {
    id: 1,
    name: "Ahmed Khan",
    rating: 4.5,
    comment: "The ambiance of the Food The service quality is generally good, although during busy times, there might be some waiting involved.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Fatima Ali",
    rating: 5,
    comment: "Absolutely loved the food! The biryani was flavorful and the kebabs were perfectly cooked. Will definitely visit again with my family.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Usman Malik",
    rating: 4,
    comment: "Great food and good service. The restaurant has a nice atmosphere. The only downside was the waiting time during peak hours.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    date: "3 weeks ago",
  },
];

// Added location images + links
const locationsData = [
  {
    id: 1,
    name: "Highway Branch",
    image: "https://kababjees.com/images/highway%20pic2.jpg",
    link: "https://maps.google.com",
  },
  {
    id: 2,
    name: "Do Darya",
    image: "https://kababjees.com/images/dodarya1.jpg",
    link: "https://maps.google.com",
  },
  {
    id: 3,
    name: "Shaheed e Millat",
    image: "https://kababjees.com/images/s9millat%20pic1.jpg",
    link: "https://maps.google.com",
  },
  {
    id: 4,
    name: "Hyderabad Branch",
    image: "https://kababjees.com/images/hyderabad%202.jpg",
    link: "https://maps.google.com",
  },
  {
    id: 5,
    name: "Lahore Branch",
    image: "https://kababjees.com/images/lahore.jpg",
    link: "https://maps.google.com",
  },
  {
    id: 6,
    name: "Falcon Malir",
    image: "https://kababjees.com/images/download.jpg",
    link: "https://maps.google.com",
  },
];

const ReviewsAndLocations = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SectionContainer id="reviews-locations" sx={{ backgroundColor: "#121212" }}>
      <Container maxWidth="lg">
        {/* Reviews Section */}
        <Box sx={{ marginBottom: 8 }}>
          <SectionTitle variant="h2" sx={{ color: "white" }}>
            CUSTOMER REVIEWS
          </SectionTitle>
          <SectionSubtitle variant="h6" sx={{ color: "#839599ff" }}>
            What our customers say about us
          </SectionSubtitle>

          <Grid container spacing={4}>
            {reviewsData.map((review) => (
              <Grid item xs={12} md={4} key={review.id}>
                <ReviewCard>
                  <CardContent sx={{ padding: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                      <Avatar
                        src={review.avatar}
                        alt={review.name}
                        sx={{ width: 56, height: 56, marginRight: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {review.name}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <StyledRating value={review.rating} precision={0.5} readOnly size="small"
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                          <Typography variant="body2" sx={{ ml: 1, color: "#666" }}>
                            {review.rating}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.6, mb: 2, fontStyle: "italic" }}>
                      "{review.comment}"
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#888", fontStyle: "italic" }}>
                      {review.date}
                    </Typography>
                  </CardContent>
                </ReviewCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6, backgroundColor: "#FFD700", height: "2px" }} />

        {/* Locations Section */}
        <Box>
          <SectionTitle variant="h2">OUR LOCATIONS</SectionTitle>
          <SectionSubtitle variant="h6">
            Visit us at any of our branches across the city
          </SectionSubtitle>

          <Grid container spacing={3}>
            {locationsData.map((location) => (
              <Grid item xs={12} sm={6} md={4} key={location.id}>
                <a href={location.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <LocationCard>
                    <LocationImage src={location.image} alt={location.name} />
                    <LocationOverlay>
                      <LocationOnIcon sx={{ color: "#FFD700", mr: 1 }} />
                      {location.name}
                    </LocationOverlay>
                  </LocationCard>
                </a>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default ReviewsAndLocations;
