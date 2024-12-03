import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMeSection from '../components/AboutMeSection';
import SkillsSection from '../components/SkillsSection';
import OfferSection from '../components/OfferSection';
import FeaturedProjects from '../components/FeaturedProjects';
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

      {/* Skills Section */}
      <section className="skills">
        <SkillsSection />
      </section>

      {/* About Section */}
      <section className="about">
        <AboutMeSection />
      </section>

      {/* Offer Section */}
      <section className="offerSection">
        <OfferSection />
      </section>

       {/* Process Section */}
       <section className="process">
        <MyProcessSection />  {/* Added MyProcessSection */}
      </section>

      

      {/* Projects Section */}
      <section className="featuredprojects">
        <FeaturedProjects />
      </section>

    

      {/* Contact Section */}
      <section className="contact">
        <ContactSection />
      </section>

     

      

      
    </div>
  );
};

export default LandingPage;


