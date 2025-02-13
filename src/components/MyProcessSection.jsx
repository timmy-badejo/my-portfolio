import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Conceptdev from '../assests/Conceptdev.svg';
import WireframeDesign from '../assests/wireframe&design.svg';
import CodedDevelopment from '../assests/Conceptdev.svg';
import './ProcessSection.css';

const MyProcessSection = () => {
  const processRefs = useRef([]);

  useEffect(() => {
    // GSAP animations for fade-in effect
    processRefs.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: index * 0.2, ease: 'power2.out' }
      );
    });

    // Animate SVG icons on hover
    const svgElements = document.querySelectorAll('.process-img');
    svgElements.forEach((svg) => {
      gsap.fromTo(
        svg,
        { scale: 1 },
        { scale: 1.05, repeat: -1, yoyo: true, duration: 1.5, ease: 'power1.inOut' }
      );
    });
  }, []);

  const processSteps = [
    {
      id: 1,
      image: Conceptdev,
      title: 'Concept Development',
      description:
        'Every project begins with a deep dive into understanding client goals, target audience, and brand identity. This is where we outline key objectives and define the project’s direction.',
    },
    {
      id: 2,
      image: WireframeDesign,
      title: 'Wireframing & Design',
      description:
        'After outlining the project’s direction, I create wireframes to map out the user journey and design layouts that are intuitive and visually appealing.',
    },
    {
      id: 3,
      image: CodedDevelopment,
      title: 'Coding & Development',
      description:
        'With the design finalized, I move into coding, ensuring the project is built with clean, efficient, and responsive code for all devices.',
    },
  ];

  return (
    <section className="process-section">
      <h2 className="process-title">My Process</h2>
      <div className="process-grid">
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className="process-card"
            ref={(el) => (processRefs.current[index] = el)}
          >
            <div className="process-image">
              <img src={step.image} alt={step.title} className="process-img" />
            </div>
            <div className="process-text">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProcessSection;



