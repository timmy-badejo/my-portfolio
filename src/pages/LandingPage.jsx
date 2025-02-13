import React from 'react';

import HeroSection from '../components/HeroSection';
import AboutMeSection from '../components/AboutMeSection';
import SkillsSection from '../components/SkillsSection';
import OfferSection from '../components/OfferSection';
import FeaturedProjects from '../components/FeaturedProjects';
import ContactSection from '../components/ContactSection';
import MyProcessSection from '../components/MyProcessSection'; 
import BackgroundCanvas from "../components/BackgroundCanvas";

import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      
      <BackgroundCanvas />

      {/* About Section */}
      <section className="about">
        <AboutMeSection />
      </section>

      {/* Hero Section */}
      <section className="hero">
        <HeroSection />
      </section>

      {/* Skills Section */}
      <section className="skills">
        <SkillsSection />
      </section>


      {/* Offer Section */}
      <section className="offer-section">
        <OfferSection />
      </section>

      {/* Process Section */}
      <section className="process-section">
        <MyProcessSection />
      </section>

      {/* Projects Section */}
      <section className="featured-projects">
        <FeaturedProjects />
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <ContactSection />
      </section>
    </div>
  );
};

export default LandingPage;



