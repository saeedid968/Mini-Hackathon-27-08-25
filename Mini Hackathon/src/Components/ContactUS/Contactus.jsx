import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import UserNavbar from "../Navbar/UserNavbar.jsx";
import Footer from "../Footer/Footer.jsx";

/* --- Styled Components --- */
const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#121212",
  minHeight: "100vh",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(10, 2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(6, 2),
  },
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


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1e1e1e",
  padding: theme.spacing(6),
  borderRadius: "16px",
  boxShadow: "0 10px 35px rgba(0,0,0,0.5)",
  width: "100%",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4),
  },
}));

const ContactPage = () => {
  return (
    <>
      <SectionContainer id="contact">
        <Container maxWidth="md">
          {/* Title */}
          <SectionTitle variant="h3">CONTACT US</SectionTitle>
          <SectionSubtitle variant="h6">
            Have a question, suggestion, or feedback? We’d love to hear from
            you! Please fill out the form below or reach us directly using our
            contact details.
          </SectionSubtitle>
          {/* ✅ Contact Card */}
          <StyledPaper>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: "#FFD700",
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              Send Us a Message
            </Typography>

            <form style={{ width: "100%" }}>
              <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
              >
                {/* ✅ Row 1 - Name + Email */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    InputLabelProps={{ style: { color: "#bbb" } }}
                    InputProps={{ style: { color: "white" } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    type="email"
                    variant="outlined"
                    InputLabelProps={{ style: { color: "#bbb" } }}
                    InputProps={{ style: { color: "white" } }}
                  />
                </Grid>

                {/* ✅ Row 2 - Phone + Subject */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    InputLabelProps={{ style: { color: "#bbb" } }}
                    InputProps={{ style: { color: "white" } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    InputLabelProps={{ style: { color: "#bbb" } }}
                    InputProps={{ style: { color: "white" } }}
                  />
                </Grid>

                {/* ✅ Row 3 - Message (full width) */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    variant="outlined"
                    multiline
                    rows={5}
                    InputLabelProps={{ style: { color: "#bbb" } }}
                    InputProps={{ style: { color: "white" } }}
                  />
                </Grid>

                {/* ✅ Row 4 - Button (full width + centered) */}
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#FFD700",
                      color: "black",
                      fontWeight: 600,
                      py: 1.4,
                      px: 5.5,
                      fontSize: "1rem",
                      "&:hover": { backgroundColor: "#e6c200" },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>

            <Divider sx={{ my: 6, borderColor: "rgba(255,255,255,0.1)" }} />

            {/* ✅ Get In Touch Info */}
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: "#FFD700",
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              Get In Touch
            </Typography>

            <Grid
              container
              spacing={3}
              justifyContent="center"
              sx={{ textAlign: "center" }}
            >
              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: "#ccc" }}>
                  📍 <strong>Address:</strong> Main Highway, Karachi, Pakistan
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: "#ccc" }}>
                  📞 <strong>Phone:</strong> 111-666-111
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: "#ccc" }}>
                  ✉️ <strong>Email:</strong> info@zaiqa.com
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ color: "#ccc" }}>
                  🕒 <strong>Hours:</strong> Mon–Sun | 12 PM – 12 AM
                </Typography>
              </Grid>
            </Grid>

            {/* Map */}
            <Box
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                height: 280,
                mt: 5,
                boxShadow: "0 5px 20px rgba(0,0,0,0.4)",
              }}
            >
              <iframe
                title="Zaiqa Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.836058444178!2d67.06484241500303!3d24.829999984070802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e2e2c6f0e6b%3A0x123456789abcdef!2sKababjees!5e0!3m2!1sen!2s!4v1639741697421!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </StyledPaper>
        </Container>
      </SectionContainer>
    </>
  );
};

export default ContactPage;
