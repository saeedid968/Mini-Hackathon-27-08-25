// src/components/Footer/Footer.jsx
import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, GitHub, LinkedIn } from "@mui/icons-material";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export default function Footer() {



  const XIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.244 2H21L14.5 10.03L22 22h-6.357L11.5 14.5 6.212 22H3l7.16-9.93L3 2h6.357l4.571 6.857L18.244 2z" />
    </svg>
  );

  return (
    <Box
      component="footer"
      sx={{
        background: "rgba(18, 18, 18, 0.95)",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
        py: { xs: 6, sm: 8 },
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 5, sm: 4, md: 6 }}
          justifyContent="center"
          alignItems="flex-start"
        >
          {/* === Brand / About Column === */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                mb: 2,
              }}
            >
              <RestaurantIcon sx={{ mr: 1, fontSize: 45, color: "#FFD700" }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  fontWeight: 700,
                  letterSpacing: ".25rem",
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: "1.3rem", sm: "1.4rem" },
                }}
              >
                ZAIQA
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "#bbb",
                lineHeight: 1.7,
                maxWidth: { xs: "100%", md: 350 },
                mx: { xs: "auto", md: 0 },
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              Zaiqa Restaurant offers a perfect blend of authentic flavors and
              modern dining. Known for its rich desi cuisine and warm ambiance,
              it’s the ideal spot for families and friends to enjoy a memorable
              culinary experience.
            </Typography>
          </Grid>

          {/* === Quick Links === */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: "#FFD700",
                fontSize: { xs: "1.1rem", sm: "1.2rem" },
              }}
            >
              Quick Links
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                padding: 0,
                lineHeight: 2,
                m: 0,
              }}
            >
              {["Home", "About", "Menu", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    style={{
                      color: "#bbb",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </Box>
          </Grid>

          {/* === Resources === */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: "#FFD700",
                fontSize: { xs: "1.1rem", sm: "1.2rem" },
              }}
            >
              Resources
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                padding: 0,
                lineHeight: 2,
                m: 0,
              }}
            >
              {["Blog", "Docs", "FAQ", "Support"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    style={{
                      color: "#bbb",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </Box>
          </Grid>

          {/* === Social Media === */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: "#FFD700",
                fontSize: { xs: "1.1rem", sm: "1.2rem" },
              }}
            >
              Follow Us
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: { xs: 1.5, sm: 2 },
                flexWrap: "wrap",
              }}
            >
              <IconButton
                component="a"
                href="https://www.facebook.com/saeed.idrees.9250/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#1877F2",
                  transition: "0.3s",
                  "&:hover": { color: "#3b5998", transform: "scale(1.1)" },
                }}
              >
                <Facebook />
              </IconButton>

              <IconButton
                component="a"
                href="https://x.com/m_saeed927?t=CDBwk_aInhZa_Ia5iQdXIA&s=08"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "black",
                  transition: "0.3s",
                  "&:hover": { color: "#999", transform: "scale(1.1)" },
                }}
              >
                <XIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://github.com/saeedid968"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#fff",
                  transition: "0.3s",
                  "&:hover": { color: "#888", transform: "scale(1.1)" },
                }}
              >
                <GitHub />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.linkedin.com/in/saeedahmed-"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#0077B5",
                  transition: "0.3s",
                  "&:hover": { color: "#005582", transform: "scale(1.1)" },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* === Bottom Bar === */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            mt: { xs: 5, sm: 6 },
            pt: { xs: 3, sm: 4 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.85rem", sm: "0.95rem" },
              color: "#aaa",
            }}
          >
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "#FFD700", fontWeight: 600 }}>Z A I Q A</span>
            . All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
