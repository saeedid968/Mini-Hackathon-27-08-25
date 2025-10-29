import React, { useState } from "react";
import {
  Button,
  Paper,
  TextField,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, signInWithGoogle } from "../store/slices/auth-slice";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Navbar from "../Components/Navbar/Navbar";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupForm = (event) => {
    event.preventDefault();
    dispatch(signUpUser({ name, email, password }))
      .unwrap()
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Signup error:", error);
      });
  };

  const signupWithGoogle = () => {
    dispatch(signInWithGoogle())
      .unwrap()
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Google signup error:", error);
      });
  };

  return (
    <>
        <Navbar/>
    
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          background: "linear-gradient(135deg, #3a8b5dff, #273449ff)",
        }}
      >
        <form onSubmit={signupForm}>
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
              marginBottom: 10,
              marginTop: 4,
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
              <PersonAddAltIcon sx={{ fontSize: 35, color: "#1E293B" }} />
            </Box>

            {/* Heading */}
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#1E293B" }}
            >
              Create Account
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", mb: 3 }}>
              Please fill in the details to sign up
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
                label="Full Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

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
                {loading ? "Signing Up..." : "Sign Up"}
              </Button>
            </div>

            {/* Divider */}
            <Divider sx={{ my: 3, color: "gray" }}>or</Divider>

            {/* Google Signup */}
            <Button
              onClick={signupWithGoogle}
              disabled={loading}
              fullWidth
              variant="outlined"
              sx={{
                py: 1.2,
                borderRadius: 2,
                fontWeight: "bold",
                textTransform: "none",
                borderColor: "#2E8B57",
                color: "#2E8B57",
                "&:hover": {
                  borderColor: "#256d47",
                  bgcolor: "rgba(46,139,87,0.08)",
                },
              }}
            >
              Sign up with Google
            </Button>

            {/* Footer Link */}
            <Typography variant="body2" sx={{ mt: 4, color: "gray" }}>
              Already have an account?{" "}
              <span
                onClick={() => navigate("/")}
                style={{
                  color: "#2E8B57",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Login
              </span>
            </Typography>
          </Paper>
        </form>
      </Box>
    </>
  );
};

export default Signup;