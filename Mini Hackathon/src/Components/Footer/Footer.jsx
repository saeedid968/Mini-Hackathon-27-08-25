import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export default function Footer() {
  return (
    <Box
      component="footer"
      className="bg-gray-900 text-gray-300"
      sx={{
        background: "rgba(18, 18, 18, 0.95)",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1 */}
          <Grid item xs={12} sm={6} md={3}>
              <RestaurantIcon sx={{ mr: 1, fontSize: 55, color: "#FFD700" }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              ZAIQA
            </Typography>
            <br />
            <Typography variant="body2" sx={{width:'500px'}}>
             Zaiqa Restaurant offers a perfect blend of authentic flavors and modern dining. Known for its rich desi cuisine, aromatic spices, and warm ambiance, it’s the ideal spot for families and friends. With attentive service and a diverse menu, Zaiqa promises a memorable culinary experience that delights every food lover.

            </Typography>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="text-white mb-3">
              Quick Links
            </Typography>
            <br />
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="text-white mb-3">
              Resources
            </Typography>
            <br />
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </Grid>

          {/* Column 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="text-white mb-3">
              Follow Us
            </Typography>
            <br />
            <Box className="flex space-x-3">
              <IconButton className="text-white hover:text-white">
                <Facebook />
              </IconButton>
              <IconButton className="text-gray-300 hover:text-white">
                <Twitter />
              </IconButton>
              <IconButton className="text-gray-300 hover:text-white">
                <Instagram />
              </IconButton>
              <IconButton className="text-gray-300 hover:text-white">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box className="border-t border-gray-700 mt-6 pt-4 text-center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Z A I Q A. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
