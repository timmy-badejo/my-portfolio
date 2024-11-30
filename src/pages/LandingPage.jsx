import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMeSection from '../components/AboutMeSection';
import SkillsSection from '../components/SkillsSection';
import OfferSection from '../components/OfferSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import MyProcessSection from '../components/MyProcessSection'; 
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">

     

      {/* Hero Section */}
      <section className="hero">
        <HeroSection />
      </section>

      {/* About Section */}
      <section className="about">
        <AboutMeSection />
      </section>

      {/* Skills Section */}
      <section className="skills">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section className="projects">
        <ProjectsSection />
      </section>

      {/* Offer Section */}
      <section className="offerSection">
        <OfferSection />
      </section>

      {/* Contact Section */}
      <section className="contact">
        <ContactSection />
      </section>

      {/* Process Section */}
      <section className="process">
        <MyProcessSection />  {/* Added MyProcessSection */}
      </section>

      
    </div>
  );
};

export default LandingPage;


