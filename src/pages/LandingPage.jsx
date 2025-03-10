import React from 'react';

import HeroSection from '../components/HeroSection';
import AboutMeSection from '../components/AboutMeSection';
import SkillsSection from '../components/SkillsSection';
import OfferSection from '../components/OfferSection';
import FeaturedProjects from '../components/FeaturedProjects';
import ContactSection from '../components/ContactSection';
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
      description: 'I am committed to continuously improving myself and my skills, always striving for consistency and focus. My approach to design and problem-solving is centered on delivering thoughtful, high-quality solutions that enhance user experience and efficiency. I believe that every project is an opportunity to grow and refine my craft.',
    },
    {
      icon: smartWorkIcon,
      title: 'Smart Work',
      description: 'I break down complex tasks into manageable pieces, allowing me to work efficiently without feeling overwhelmed. By structuring my workflow strategically, I ensure that I deliver high-quality work while maintaining a sustainable pace, avoiding burnout, and staying motivated throughout the process.',
    },
    {
      icon: collaborationIcon,
      title: 'Collaboration',
      description: 'I thrive in team environments, working closely with my peers to bring ideas to life. I am always ready to take on development tasks and open to feedback, suggestions, and different perspectives. I believe that collaboration fosters innovation, and I actively seek input from others to improve my work and contribute to the success of our projects.',
    },
    {
      icon: technologyIcon,
      title: 'Technology',
      description: 'I continuously explore and adapt to new technologies to enhance my designs and solve complex design challenges. Staying updated with industry trends allows me to incorporate the latest tools and techniques into my work, ensuring that my solutions are both innovative and effective.',
    },
  ];

  return (
    <div className="landing-page">
      
      <BackgroundCanvas />

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

      {/* About Section */}
      <section className="about-me-section">
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

