import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Asset2 from '../assests/Asset2.svg';
import Asset3 from '../assests/Asset3.svg';
import Asset4 from '../assests/Asset4.svg';
import Asset5 from '../assests/Asset5.svg';
import Asset6 from '../assests/Asset6.svg';
import Asset7 from '../assests/Asset7.svg';
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
    gsap.from('.hero-card h1', { opacity: 0, y: -50, duration: 1 });

    const textInterval = setInterval(() => {
      setCurrentText((prevIndex) => (prevIndex + 1) % backgroundTexts.length);
    }, 6000);

    return () => clearInterval(textInterval);
  }, [backgroundTexts.length]);

  return (
    <section className="hero-section">
      <p className="background-text">{backgroundTexts[currentText]}</p>

      <div className="svg-graphics">
        <img className="hover-svg" src={Asset2} alt="Asset 2" />
        <img className="hover-svg" src={Asset3} alt="Asset 3" />
        <img className="hover-svg" src={Asset4} alt="Asset 4" />
        <img className="hover-svg" src={Asset5} alt="Asset 5" />
        <img className="hover-svg" src={Asset6} alt="Asset 6" />
        <img className="hover-svg" src={Asset7} alt="Asset 7" />
      </div>

      <div className="hero-card">
        <h1>Transforming Digital Ideas Into Reality</h1>
        <p>
          Combining creativity and technology to build innovative digital solutions.
          Explore my work and see how I bring ideas to life through design and
          development.
        </p>
        <button className="explore-btn">Explore</button>
      </div>
    </section>
  );
};

export default HeroSection;
