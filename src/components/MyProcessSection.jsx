import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaSearch } from 'react-icons/fa'; // Discovery & Research
import { FaLightbulb } from 'react-icons/fa'; // Concept Development
import { FaSketch } from 'react-icons/fa'; // Wireframing & Prototyping
import { FaPalette } from 'react-icons/fa'; // Visual Design & Branding
import { FaCode } from 'react-icons/fa'; // Development & Implementation
import { FaTools } from 'react-icons/fa'; // Testing & Refinement
import { FaRocket } from 'react-icons/fa'; // Launch & Post-Launch Support
import './MyProcessSection.css';

const MyProcessSection = () => {
  const processRefs = useRef([]);

  useEffect(() => {
    processRefs.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: index * 0.3, ease: 'power2.out' }
      );

      // Animate the icon inside the circle
      const icon = item.querySelector('.process-icon');
      gsap.fromTo(
        icon,
        { scale: 0 }, // Start scaled down
        { scale: 1, duration: 0.5, delay: index * 0.3 + 0.2, ease: 'back.out(1.7)' } // Animate to full size
      );
    });
  }, []);

  const processSteps = [
  {
    id: 1,
    icon: <FaSearch size={40} />,
    title: 'Discovery & Research',
    description:
      'I start by learning about the project goals, users, and competitors to build a strong foundation for design decisions.',
  },
  {
    id: 2,
    icon: <FaLightbulb size={40} />,
    title: 'Concept Development',
    description:
      'I brainstorm ideas, create mood boards, and define the visual direction that shapes the project’s creative vision.',
  },
  {
    id: 3,
    icon: <FaSketch size={40} />,
    title: 'Wireframing & Prototyping',
    description:
      'I design layouts and interactive prototypes to test ideas early and refine the user experience before development.',
  },
  {
    id: 4,
    icon: <FaPalette size={40} />,
    title: 'Visual Design & Branding',
    description:
      'I apply color, typography, and branding to craft a clean, cohesive, and engaging interface.',
  },
  {
    id: 5,
    icon: <FaCode size={40} />,
    title: 'Development & Implementation',
    description:
      'I turn designs into responsive, functional code and add interactive elements that bring the experience to life.',
  },
  {
    id: 6,
    icon: <FaTools size={40} />,
    title: 'Testing & Refinement',
    description:
      'I test usability, fix issues, and fine-tune performance to ensure everything runs smoothly across devices.',
  },
  {
    id: 7,
    icon: <FaRocket size={40} />,
    title: 'Launch & Support',
    description:
      'I deploy the final project and provide updates or improvements to keep it performing its best.',
  },
];

  return (
    <section className="process-section">
      <h2 className="process-title">My Process</h2>
      <div className="process-roadmap">
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className="process-step"
            ref={(el) => (processRefs.current[index] = el)}
            style={{
              transform: index % 2 === 0 ? 'translateX(20px)' : 'translateX(-20px)', // Zig-zag effect
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            <div className="process-icon">
              {step.icon}
            </div>
            <div className="process-text">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index < processSteps.length - 1 && <div className="process-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProcessSection;

