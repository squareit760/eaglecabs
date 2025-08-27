import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import OurCars from "./pages/OurCars";
import ContactUs from "./pages/ContactUs";
import MainLayout from "./pages/layout";
import ThankYou from "./pages/Thanks";
import AdminTable from "./pages/dashboard";
import Login from "./pages/login";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/our-cars" element={<OurCars />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
          <Route path="/thanks" element={<ThankYou />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AdminTable />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
