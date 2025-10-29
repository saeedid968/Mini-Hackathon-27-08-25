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
  Fade,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  "HOME",
  "ABOUT US",
  "MENU",
  "DISCOUNTS",
  "REVIEWS",
  "LOCATION",
  "CONTACT",
];

function UserNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState("HOME");

  const sectionIds = {
    HOME: "home",
    "ABOUT US": "about",
    MENU: "menu",
    DISCOUNTS: "discounts",
    REVIEWS: "reviews",
    LOCATION: "location",
    CONTACT: "contact",
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScroll = (sectionId, page) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbar = document.querySelector(".MuiAppBar-root");
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const extraSpacing = -40;

      const scrollToPosition = section.offsetTop - navbarHeight - extraSpacing;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });

      setActiveSection(page);
    }
  };

  /* --- Scroll Spy --- */
  React.useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const [page, id] of Object.entries(sectionIds)) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(page);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  /* --- Navbar Glow on Scroll --- */
  React.useEffect(() => {
    const navbar = document.querySelector(".MuiAppBar-root");

    const handleScroll = () => {
      if (window.scrollY > 40) navbar.classList.add("nav-scrolled");
      else navbar.classList.remove("nav-scrolled");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      className="nav-animate"
      position="fixed"
      sx={{
        background: "rgba(18, 18, 18, 0.95)",
        boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 215, 0, 0.15)",
        transition: "all 0.3s ease",
        zIndex: 1200,
        overflowX: "hidden",
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 60, md: 80 },
            display: "flex",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          {/* --- Logo --- */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <RestaurantIcon
              sx={{
                fontSize: 30,
                color: "#FFD700",
                filter: "drop-shadow(0 0 6px rgba(255,215,0,0.6))",
                marginLeft: '10px'

              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                letterSpacing: "2px",
                color: "white",
                textDecoration: "none",
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.4rem",
              }}
            >
              ZAIQA
            </Typography>
          </Box>

          {/* --- Mobile Menu (Enhanced) --- */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "#FFD700",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.15)",
                  textShadow: "0 0 8px rgba(255,215,0,0.8)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              TransitionComponent={Fade}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  px: 2,
                  py: 1,
                  borderRadius: 3,
                  background: "rgba(20, 20, 20, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,215,0,0.2)",
                  boxShadow: "0 0 25px rgba(255,215,0,0.25)",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleScroll(sectionIds[page], page);
                    handleCloseNavMenu();
                  }}
                  sx={{
                    justifyContent: "center",
                    borderRadius: 2,
                    my: 0.5,
                    "&:hover": {
                      background: "rgba(255,215,0,0.15)",
                    },
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      color: activeSection === page ? "#FFD700" : "#eee",
                      letterSpacing: "1px",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* --- Desktop Menu --- */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {pages.map((page) => (
              <Button
                className="menu-fade"
                style={{ animationDelay: `${pages.indexOf(page) * 0.07}s` }}
                key={page}
                onClick={() => handleScroll(sectionIds[page], page)}
                sx={{
                  position: "relative",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.8px",
                  color: activeSection === page ? "#FFD700" : "white",
                  fontFamily: "'Poppins', sans-serif",
                  borderRadius: "30px",
                  padding: "8px 18px",
                  transition: "all 0.35s ease",
                  background:
                    activeSection === page
                      ? "rgba(255, 215, 0, 0.08)"
                      : "transparent",
                  boxShadow:
                    activeSection === page
                      ? "0 0 12px rgba(255, 215, 0, 0.4)"
                      : "none",
                  "&:hover": {
                    color: "#FFD700",
                    background: "rgba(255, 215, 0, 0.1)",
                    boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: activeSection === page ? "60%" : 0,
                    height: "2px",
                    backgroundColor: "#FFD700",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": { width: "60%" },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default UserNavbar;
