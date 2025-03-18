import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import VanillaTilt from 'vanilla-tilt';
import PrototypeWireframing from '../assests/prototypewireframing.svg';
import Branding from '../assests/branding.svg';
import DesignService from '../assests/designservice.svg';
import WebDev from '../assests/webdev.svg';
import Graphic from '../assests/graphic.svg';
import UiUx from '../assests/uiux.svg';
import './OfferSection.css';

const OfferSection = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate Cards on Scroll
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: index * 0.2, ease: 'power2.out' }
      );
    });

    // Apply Tilt Effect
    cardRefs.current.forEach((card) => {
      VanillaTilt.init(card, {
        max: 10,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
      });
    });
  }, []);

  const services = [
    { src: DesignService, title: 'Design Services', description: 'Crafting visually appealing, user-friendly digital experiences for businesses and brands.' },
    { src: UiUx, title: 'UI/UX Design', description: 'Creating seamless and engaging interfaces focused on user experience and interaction.' },
    { src: Branding, title: 'Brand Identity Design', description: 'Building strong, memorable brand identities through strategic design solutions.' },
    { src: PrototypeWireframing, title: 'Prototyping & Wireframing', description: 'Developing wireframes and interactive prototypes to visualize and refine design concepts.' },
    { src: Graphic, title: 'Graphic Design', description: 'Designing eye-catching marketing materials, social media assets, and promotional content.' },
    { src: WebDev, title: 'Interactive Design', description: 'Enhancing digital experiences with interactive animations and engaging web technologies.' },
  ];

  return (
    <section className="offer-section">
      <h2 className="section-title">What I Can Offer</h2>
      <div className="offer-grid">
        {services.map((service, index) => (
          <div key={index} className="offer-card" ref={(el) => (cardRefs.current[index] = el)}>
            <img src={service.src} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;