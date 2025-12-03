// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import $ from 'jquery'; // Ensure this is at the top
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import WorkPage from "./pages/WorkPage";
import ServicesPage from "./pages/ServicesPage";
import LoadingScreen from "./components/LoadingScreen";
import "./global.css";

// Ensure jQuery is available globally
window.$ = window.jQuery = $;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <LoadingScreen />
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<AboutMePage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:projectId" element={<ProjectDetailPage />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;















// https://github.com/timmy-badejo/my-portfolio.git




