import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Asset2 from '../assests/Asset2.svg';
import Asset3 from '../assests/Asset3.svg';
import Asset4 from '../assests/Asset4.svg';
import Asset5 from '../assests/Asset5.svg';
import Asset6 from '../assests/Asset6.svg';
import Asset7 from '../assests/Asset7.svg';
import matte_blanc from '../assests/matte_blanc.jpg';
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
    }, 5000);

    return () => clearInterval(textInterval);
  }, [backgroundTexts.length]);

  return (
    <section 
      className="hero-section container-fluid"
      style={{
        backgroundImage: `url(${matte_blanc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed' // Parallax effect
      }}
    >
      {/* Matte Background Overlay */}
      <div className="hero-overlay"></div>

      {/* Background Animated Text */}
      <p className="background-text">{backgroundTexts[currentText]}</p>

      {/* SVG Graphics */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 d-flex flex-wrap justify-content-center svg-graphics">
          {[Asset2, Asset3, Asset4, Asset5, Asset6, Asset7].map((asset, index) => (
            <img key={index} className="hover-svg img-fluid" src={asset} alt={`Asset ${index + 2}`} />
          ))}
        </div>
      </div>

      {/* Hero Card */}
      <div className="hero-card text-center mx-auto">
        <h1>Transforming Digital Ideas Into Reality</h1>
        <p>
          Combining creativity and technology to build innovative digital solutions.
          Explore my work and see how I bring ideas to life through design and development.
        </p>
        <button className="btn explore-btn">Explore</button>
      </div>
    </section>
  );
};

export default HeroSection;



