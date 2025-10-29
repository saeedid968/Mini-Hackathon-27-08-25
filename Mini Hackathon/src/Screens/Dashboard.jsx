import { AppBar, Toolbar, Typography, Button, Box, Paper, Grid } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import MiniDrawer from "../Components/Drawer/Drawer";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.info("Logged out successfully 👋");
      navigate("/admin");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout");
    }
  };

  return (
    <>
    <MiniDrawer/>
    </>
  );
}