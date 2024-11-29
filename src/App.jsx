import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';

import LandingPage from './pages/LandingPage';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';

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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutMePage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  </Router>
  );
};

export default App;



