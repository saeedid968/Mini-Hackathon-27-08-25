import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, #1E293B, #2E8B57)",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <GridViewIcon sx={{ mr: 1, fontSize: 26, color: "#FACC15" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              fontWeight: "bold",
              letterSpacing: ".15rem",
              color: "white",
              textDecoration: "none",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            DASHBOARD
          </Typography>

          {/* Push profile to right */}
          <Box sx={{ flexGrow: 1 }} />

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
