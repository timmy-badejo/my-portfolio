// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';

import LandingPage from './pages/LandingPage';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import './global.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulating loading of the app
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
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
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;







