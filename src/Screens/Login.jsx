import {
  Button,
  Paper,
  TextField,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../store/slices/auth-slice";
import LockIcon from "@mui/icons-material/Lock";
import Navbar from "../Components/Navbar/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = (event) => {
    event.preventDefault();
    dispatch(signInUser({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Login error:", error);
      });
  };

  return (
    <>
    <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          background: "linear-gradient(135deg, #2c384dff, #63b185ff)",
        }}
      >
        <form onSubmit={getData}>
          <Paper
            elevation={8}
            sx={{
              p: 5,
              width: 450,
              borderRadius: 4,
              textAlign: "center",
              backdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.95)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
            }}
          >
            {/* Icon container */}
            <Box
              sx={{
                bgcolor: "#FACC15",
                width: 70,
                height: 70,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              <LockIcon sx={{ fontSize: 35, color: "#1E293B" }} />
            </Box>

            {/* Heading */}
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#1E293B" }}
            >
              Welcome Admin
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "gray", mb: 3 }}
            >
              Please sign in to continue
            </Typography>

            {/* Error message */}
            {error && (
              <Typography color="error" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}

            {/* Form Fields */}
            <div className="flex flex-col gap-4">
              <TextField
                fullWidth
                required
                label="Email Address"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                fullWidth
                required
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{
                  bgcolor: "#2E8B57",
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#256d47" },
                }}
              >
                {loading ? "Logging In..." : "Login"}
              </Button>
            </div>

          </Paper>
        </form>
      </Box>
    </>
  );
};

export default Login;