import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../../config/firebase';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import MiniDrawer from '../../../Components/Drawer/Drawer';
import Swal from 'sweetalert2';

export default function AddBranch() {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        managerEmail: "",
        contact: "",
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchBranch = async () => {
            if (id) {
                const docRef = doc(db, "branches", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setFormData(docSnap.data());
                }
            }
        };
        fetchBranch();
    }, [id]);

    const handleSubmit = async () => {
        try {
            if (id) {
                await updateDoc(doc(db, "branches", id), formData);
                Swal.fire("Updated!", "Branch updated successfully!", "success");
            } else {
                await addDoc(collection(db, "branches"), formData);
                Swal.fire("Good job!", "Branch created successfully!", "success");
            }
            navigate("/dashboard/listbranch");
        } catch (error) {
            console.error("Error saving branch:", error);
            Swal.fire("Oops...", "Something went wrong!", "error");
        }
    };

    return (
        <Box sx={{ display: "flex" }}>
            {/* Drawer */}
            <MiniDrawer />

            {/* Main Content */}
            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor:'#F1F3F4' }}>
                {/* Push content below AppBar */}
                <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
                    <Paper
                        elevation={8}
                        sx={{
                            p: { xs: 3, sm: 5 },
                            maxWidth: 600,
                            width: "100%",
                            textAlign: 'left',
                            borderRadius: 3,
                            backgroundColor: "#ffffff",
                            boxShadow: "0px 8px 25px rgba(0,0,0,0.1)",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                mb: 4,
                                fontWeight: "bold",
                                textAlign: "center",
                                color: "#333",
                            }}
                        >
                            {id ? "Edit Branch" : "Create Branch"}
                        </Typography>

                        <TextField
                            label="Branch Name"
                            fullWidth
                            required
                            variant="outlined"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            label="Location"
                            fullWidth
                            required
                            variant="outlined"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            label="Manager Email"
                            required
                            fullWidth
                            type="email"
                            variant="outlined"
                            value={formData.managerEmail}
                            onChange={(e) => setFormData({ ...formData, managerEmail: e.target.value })}
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            label="Contact Number"
                            fullWidth
                            required
                            variant="outlined"
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            sx={{ mb: 4 }}
                        />

                        <Button
                            variant="contained"
                            fullWidth
                            disabled={
                                !formData.name ||
                                !formData.location ||
                                !formData.managerEmail ||
                                !formData.contact
                            }
                            sx={{
                                py: 1.5,
                                fontSize: "1rem",
                                fontWeight: "600",
                                textTransform: "none",
                                borderRadius: 2,
                                background: "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)",
                                color: "#fff",
                                boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
                                '&:hover': {
                                    background: "linear-gradient(135deg, #388E3C 0%, #1B5E20 100%)",
                                    boxShadow: "0px 6px 15px rgba(0,0,0,0.3)",
                                },
                                '&:disabled': {
                                    background: "#BDBDBD",
                                    color: "#757575",
                                    boxShadow: "none",
                                }
                            }}
                            onClick={handleSubmit}
                        >
                            {id ? "Update" : "Submit"}
                        </Button>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}
