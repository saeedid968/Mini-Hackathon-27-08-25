import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  "HOME",
  "ABOUT US",
  "MENU",
  "LOCATION",
  "ORDER ONLINE",
  "BANK DISCOUNT",
  "CONTACT",
];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function UserNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(18, 18, 18, 0.95)",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 60, md: 80 } }}>

            <RestaurantIcon sx={{ mr: 1, fontSize: 28, color: "#FFD700" }} />
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

            {/* Hamburger Menu (Mobile View) */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo and App Name (Mobile View) */}
            <RestaurantIcon
              sx={{
                mr: 1,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontSize: 28,
                color: "#FFD700",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              ZAIQA
            </Typography>

            {/* This Box component pushes the navigation links to the right */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Navigation Buttons (Desktop View) */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontSize: "0.85rem",
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "none",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    "&:hover": {
                      color: "#FFD700",
                      background: "rgba(255, 215, 0, 0.1)",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default UserNavbar;