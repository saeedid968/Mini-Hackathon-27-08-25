import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile
} from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase';
import { toast } from 'react-toastify';

// Async thunks for authentication
export const signUpUser = createAsyncThunk(
    'auth/signUpUser',
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update profile with display name
            await updateProfile(user, { displayName: name });

            localStorage.setItem("userId", user.uid);

            toast.success("Signed up successfully");
            return {
                uid: user.uid,
                email: user.email,
                displayName: name,
            };
        } catch (error) {
            console.log(error);
            toast.error("User already exists");
            return rejectWithValue(error.message);
        }
    }
);

export const signInUser = createAsyncThunk(
    'auth/signInUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            localStorage.setItem("userId", user.uid);

            toast.success("Login successfully");
            return {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            };
        } catch (error) {
            console.error(error);
            toast.error("Please Try again!");
            return rejectWithValue(error.message);
        }
    }
);

export const signInWithGoogle = createAsyncThunk(
    'auth/signInWithGoogle',
    async (_, { rejectWithValue }) => {
        try {
            const userCredential = await signInWithPopup(auth, googleProvider);
            const user = userCredential.user;

            localStorage.setItem("userId", user.uid);

            toast.success("Signed in with Google");
            return {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            };
        } catch (error) {
            console.log(error);
            toast.error("Google Sign-in failed");
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
        isAuthenticated: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("userId");
        },
    },
    extraReducers: (builder) => {
        builder
            // Sign Up
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Sign In
            .addCase(signInUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signInUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Google Sign In
            .addCase(signInWithGoogle.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signInWithGoogle.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(signInWithGoogle.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setUser, clearError, logout } = authSlice.actions;
export default authSlice.reducer;