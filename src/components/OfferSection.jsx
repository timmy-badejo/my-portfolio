import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './OfferSection.css'; // Ensure to import the CSS for styling

const OfferSection = () => {
  const [flipIndex, setFlipIndex] = useState(0); // Index to track which image to display

  const images = [
    'https://images.deepai.org/art-image/b879fa8f61724a55b9b27b6a803b0761/design-services-21bb1c.jpg', // Design service
    'https://images.deepai.org/art-image/03a86924f22b4534ba3f5422f44ffc30/user-interface-design-7f4a39.jpg', // UI/UX design
    'https://images.deepai.org/art-image/9c23d40617f84bf98b0ff64ac64401fc/brand-identity-design-for-melody-headphones.jpg', // Brand identity
    'https://images.deepai.org/art-image/892931c5c2ae426287d21cd62dd79d61/prototyping-and-wireframe-design.jpg', // Prototype and wiring
    'https://images.deepai.org/art-image/64ae4ea6b0664e55a4da52c8b57821f2/graphic-design-sinple-design.jpg', // Graphic Design
    'https://images.deepai.org/art-image/ced7621bcf1246f582591b5e1aa7d5e0/interactive-design-892976.jpg', // Interactive Design
  ];

  const titles = [
    "Design Services",
    "UI/UX Design",
    "Brand Identity Design",
    "Prototyping & Wireframing",
    "Graphic Design",
    "Interactive Design"
  ];

  const descriptions = [
    "Responsive Web Design – Crafting websites that look great and function seamlessly across all devices.",
    "Creating user-friendly interfaces and experiences that prioritize usability and engagement.",
    "Designing logos, color schemes, and branding materials to give businesses a unique and professional presence.",
    "Developing interactive prototypes to visualize design ideas and user flows.",
    "Designing banners, social media assets, and promotional materials.",
    "Creating engaging animations and interactive elements using CSS, JavaScript, or libraries like GSAP."
  ];

  const handleFlip = () => {
    setFlipIndex((prevIndex) => (prevIndex + 1) % images.length); // Switch to the next image on click
  };

  // Carousel effect every 6 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlipIndex((prevIndex) => (prevIndex + 1) % images.length); // Automatically switch image
      gsap.fromTo(
        '.project-description', // Apply the scroll-up effect to the description
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );
    }, 6000); // Change every 6 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <section className="offer-section">
      <h2>What I Can Offer</h2>
      <div className="offer-content">
        <div className="offer-text">
          <div className="service">
            <h3>{titles[flipIndex]}</h3>
            <p className="project-description">{descriptions[flipIndex]}</p>
          </div>
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




