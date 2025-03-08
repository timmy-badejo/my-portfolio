// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import $ from 'jquery'; // Ensure this is at the top
import Home from "./components/Home";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import Portfolio from "./pages/Portfolio";
import LoadingScreen from "./components/LoadingScreen";
import "./global.css";

// Ensure jQuery is available globally
window.$ = window.jQuery = $;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000); 
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
      <Home />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="portfolio" element={<Portfolio/>} />
        <Route path="about" element={<AboutMePage />} />
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

// Hello Arrick  hope you're doing well. I wanted to let you know that I used an AI-generated image for my profile picture as a temporary solution. I encountered an issue where my profile image, stored in the assets folder, didn’t display correctly, along with my logo. I'm in the process of resolving this issue and plan to replace the image once I figure it out.

//Additionally, I’ll be adding other images, such as project images, once this issue is resolved. If you have any suggestions or could assist me with this, your help would be greatly appreciated.

//Thank you for your understanding and support!

//Best regards, timmy badejo





