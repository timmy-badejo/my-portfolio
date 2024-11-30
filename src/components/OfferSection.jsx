import React, { useState, useEffect } from 'react';
import '../pages/LandingPage.css'; // Ensure to import the CSS for styling

const OfferSection = () => {
  const [flipIndex, setFlipIndex] = useState(0); // Index to track which image to display

  const images = [
    'https://images.deepai.org/art-image/7813b5adc3df4dac9b77ad977bca5eac/digital-and-graphic-design-services-graphic-d_wACYgVA.jpg',
    'https://images.deepai.org/art-image/e6e3d1f42a3c4c1aadc59b10e2ba4314/graphic-design-graphic-drawings-png-13d9c8.jpg',
    'https://images.deepai.org/art-image/5154fe99cffc43fc99c65c83000be8af/graphic-design-graphic-drawings-png.jpg'
  ];

  const handleFlip = () => {
    setFlipIndex((prevIndex) => (prevIndex + 1) % images.length); // Switch to the next image on click
  };

  // Carousel effect every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlipIndex((prevIndex) => (prevIndex + 1) % images.length); // Automatically switch image
    }, 4000);

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <section className="offer-section">
      <h2>What I Can Offer</h2>
      <div className="offer-content">
        <div className="offer-text">
          <div className="service">
            <h3>Design Services</h3>
            <p>Responsive Web Design – Crafting websites that look great and function seamlessly across all devices.</p>
          </div>
          <div className="service">
            <h3>UI/UX Design</h3>
            <p>Creating user-friendly interfaces and experiences that prioritize usability and engagement.</p>
          </div>
          <div className="service">
            <h3>Brand Identity Design</h3>
            <p>Designing logos, color schemes, and branding materials to give businesses a unique and professional presence.</p>
          </div>
          <div className="service">
            <h3>Prototyping & Wireframing</h3>
            <p>Developing interactive prototypes to visualize design ideas and user flows.</p>
          </div>
          <div className="service">
            <h3>Graphic Design</h3>
            <p>Designing banners, social media assets, and promotional materials.</p>
          </div>
          <div className="service">
            <h3>Interactive Design</h3>
            <p>Creating engaging animations and interactive elements using CSS, JavaScript, or libraries like GSAP.</p>
          </div>
          <button className="explore-project-btn">Explore Offer</button>
        </div>
        <div className="offer-image">
          <div className="image-flip-container" onClick={handleFlip}>
            <div className={`flip-card ${flipIndex !== 0 ? 'flipped' : ''}`}>
              <div className="flip-card-front">
                <img
                  src={images[flipIndex]}
                  alt="Offer Illustration"
                  className="offer-image-container"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src={images[(flipIndex + 1) % images.length]}
                  alt="Offer Illustration"
                  className="offer-image-container"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;



