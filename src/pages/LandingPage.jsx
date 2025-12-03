import React from 'react';
import Home from '../components/Home';
import AboutMeSection from '../components/AboutMeSection';
import SkillsSection from '../components/SkillsSection';
import OfferSection from '../components/OfferSection';
import FeaturedProjects from '../components/FeaturedProjects';
import MyProcessSection from '../components/MyProcessSection'; 
import BackgroundCanvas from "../components/BackgroundCanvas";
import Card from "../components/Card";

import dedicationIcon from '../assests/dedication.svg';
import smartWorkIcon from '../assests/smart_work.svg';
import collaborationIcon from '../assests/collaboration.svg';
import technologyIcon from '../assests/technology.svg';

import './LandingPage.css';

const LandingPage = () => {
  const cardData = [
  {
    icon: dedicationIcon,
    title: 'Dedication',
    description:
      'I’m committed to growth and consistency, focusing on thoughtful design and solutions that enhance user experience.',
  },
  {
    icon: smartWorkIcon,
    title: 'Smart Work',
    description:
      'I simplify complex tasks with strategic workflows, ensuring quality results without burnout.',
  },
  {
    icon: collaborationIcon,
    title: 'Collaboration',
    description:
      'I thrive in team settings, valuing feedback and diverse ideas to create stronger, more creative outcomes.',
  },
  {
    icon: technologyIcon,
    title: 'Technology',
    description:
      'I stay current with tools and trends, using new technologies to build innovative and effective designs.',
  },
];

  return (
    <div className="landing-page">
      <BackgroundCanvas />

      {/* Home Section */}
      <Home />

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <FeaturedProjects />
      </section>

      {/* About Section */}
      <section className="about-me-section">
        <AboutMeSection />
      </section>

      {/* Skills Section */}
      <section className="skills">
        <SkillsSection />
      </section>

      {/* Card Design Section */}
      <section className="card-section">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>

      {/* Offer Section */}
      <section className="offer-section">
        <OfferSection />
      </section>

      {/* Process Section */}
      <section className="process-section">
        <MyProcessSection />
      </section>

      
    </div>
  );
};

export default LandingPage;


