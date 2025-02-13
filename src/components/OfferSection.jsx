import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PrototypeWireframing from '../assests/prototypewireframing.svg';
import Branding from '../assests/branding.svg';
import DesignService from '../assests/designservice.svg';
import WebDev from '../assests/webdev.svg';
import Graphic from '../assests/graphic.svg';
import UiUx from '../assests/uiux.svg';
import './OfferSection.css';

const OfferSection = () => {
  const cardRefs = useRef([]);
  const shapeRefs = useRef([]);

  useEffect(() => {
    // Animate Cards on Scroll
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, delay: index * 0.2, ease: 'power2.out' }
      );
    });

    // Floating Shape Animation
    shapeRefs.current.forEach((shape, index) => {
      gsap.to(shape, {
        x: index % 2 === 0 ? 30 : -30,
        y: index % 2 === 0 ? -20 : 20,
        rotation: 360,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });
  }, []);

  const svgIcons = [
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
        {svgIcons.map((icon, index) => (
          <div key={index} className="offer-card" ref={(el) => (cardRefs.current[index] = el)}>
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front of the Card */}
                <div className="flip-card-front">
                  <img src={icon.src} alt={icon.title} className="svg-icon" />
                  <h3>{icon.title}</h3>
                </div>
                {/* Back of the Card */}
                <div className="flip-card-back">
                  <p>{icon.description}</p>
                </div>
              </div>
            </div>
            {/* Floating Shapes */}
            <div className="floating-shapes">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`shape shape${i}`} ref={(el) => shapeRefs.current.push(el)}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;






