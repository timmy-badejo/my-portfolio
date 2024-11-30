import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './HeroSection.css'; 

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);

  const backgroundTexts = [
    "NEW MEDIA DESIGNER",
    "AND DEVELOPER",
    "CREATIVE CODER",
    "DIGITAL INNOVATOR",
  ];

  useEffect(() => {
    // Animation for the foreground heading
    gsap.from('.hero-section .hero-card h1', { opacity: 0, y: -50, duration: 1 });

    // Animation for the background text
    const textInterval = setInterval(() => {
      setCurrentText((prevIndex) => (prevIndex + 1) % backgroundTexts.length);
    }, 6000); // Increased interval to match slower animation

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="hero-section">
      {/* Background Animated Text */}
      <p className="background-text">{backgroundTexts[currentText]}</p>

      {/* Foreground Text Card */}
      <div className="hero-card">
        <h1>Transforming Digital Ideas Into Reality</h1>
        <button className="explore-btn">Explore Project</button>
      </div>
    </section>
  );
};

export default HeroSection;






