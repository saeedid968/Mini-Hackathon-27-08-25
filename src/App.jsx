import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuthListener } from "./hooks/useAuthListener";
import { useSelector } from "react-redux";
import Dashboard from "./Screens/Dashboard";
import ProtectedRoute from "./Components/routes/ProtectedRoute";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Footer from "./Components/Footer/Footer";
import UserNavbar from "./Components/Navbar/UserNavbar";
import HeroSection from "./Components/HeroSection/Hero";
import AboutUsPage from "./Components/AboutUS/AboutUs";
import OurSpecialities from "./Components/OurSpeciality/OurSpeciality";
import BankDiscounts from "./Components/BankDis/BankDis";
import Admin from "./Screens/Admin/Admin";
import AddBranch from "./Screens/Admin/Branches/AddBranches";
import BranchList from "./Screens/Admin/Branches/ListBranches";
import ContactPage from "./Components/ContactUS/Contactus";
import Reviews from "./Components/Review/Review";
import Locations from "./Components/Location/Location";

function App() {
  useAuthListener();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        {/* Public Site */}
        <Route
          path="/"
          element={
            <>
              <UserNavbar />
              <div id="home">
                <HeroSection />
              </div>
              <div id="about">
                <AboutUsPage />
              </div>
              <div id="menu">
                <OurSpecialities />
              </div>
              <div id="bank">
                <BankDiscounts />
              </div>
              <div id="review">
                <Reviews />
              </div>
              <div id="location">
                <Locations />
              </div>
              <div id="contact">
                <ContactPage />
              </div>
              <Footer />
            </>
          }
        />

        {/* Auth */}
        <Route
          path="/login"
          element={
            !isAuthenticated ? <Login /> : <Navigate to="/dashboard" replace />
          }
        />
        <Route
          path="/signup"
          element={
            !isAuthenticated ? <Signup /> : <Navigate to="/dashboard" replace />
          }
        />

        {/* Admin Panel Login Page */}
        <Route
          path="/admin"
          element={
            !isAuthenticated ? <Login /> : <Navigate to="/dashboard" replace />
          }
        />

        {/* Protected Dashboard + Admin Screens */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/addbranch"
          element={
            <ProtectedRoute>
              <AddBranch />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/listbranch"
          element={
            <ProtectedRoute>
              <BranchList />
            </ProtectedRoute>
          }
        />
        {/* Example Admin Main */}
        <Route
          path="/admin/main"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}

export default App;
