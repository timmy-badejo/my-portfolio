import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import PrototypeWireframing from '../assests/prototypewireframing.svg';
import Branding from '../assests/branding.svg';
import DesignService from '../assests/designservice.svg';
import WebDev from '../assests/webdev.svg';
import Graphic from '../assests/graphic.svg';
import UiUx from '../assests/uiux.svg';
import './OfferSection.css';

const OfferSection = () => {
  const [flipIndex, setFlipIndex] = useState(0);

  const svgIcons = [
    { src: DesignService, title: 'Design Services' },
    { src: UiUx, title: 'UI/UX Design' },
    { src: Branding, title: 'Brand Identity Design' },
    { src: PrototypeWireframing, title: 'Prototyping & Wireframing' },
    { src: Graphic, title: 'Graphic Design' },
    { src: WebDev, title: 'Interactive Design' },
  ];

  const descriptions = [
    "Responsive Web Design – Crafting websites that look great and function seamlessly across all devices.",
    "Creating user-friendly interfaces and experiences that prioritize usability and engagement.",
    "Designing logos, color schemes, and branding materials to give businesses a unique and professional presence.",
    "Developing interactive prototypes to visualize design ideas and user flows.",
    "Designing banners, social media assets, and promotional materials.",
    "Creating engaging animations and interactive elements using CSS, JavaScript, or libraries like GSAP.",
  ];

  const handleFlip = () => {
    setFlipIndex((prevIndex) => (prevIndex + 1) % svgIcons.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleFlip();
    }, 6000);

    // Animate SVGs on hover
    const svgElements = document.querySelectorAll('.svg-icon');
    svgElements.forEach((svg) => {
      gsap.fromTo(
        svg,
        { scale: 1 },
        { scale: 1.1, repeat: -1, yoyo: true, duration: 1.5, ease: 'power1.inOut' }
      );
    });

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="offer-section">
      <h2>What I Can Offer</h2>
      <div className="offer-content">
        <div className="offer-text">
          <div className="service">
            <h3>{svgIcons[flipIndex].title}</h3>
            <p
              className={`project-description ${
                flipIndex !== null ? 'active' : ''
              }`}
            >
              {descriptions[flipIndex]}
            </p>
          </div>
        </div>
        <div className="offer-image">
          <div className="svg-container">
            {svgIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.title}
                className={`svg-icon ${index === flipIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;

