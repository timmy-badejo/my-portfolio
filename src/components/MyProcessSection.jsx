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
        'Every project begins with research, strategy, and planning to establish the core foundation of the design. This phase involves defining project goals, analyzing competitors, and exploring user needs to ensure a comprehensive understanding of the landscape.',
    },
    {
      id: 2,
      icon: <FaLightbulb size={40} />,
      title: 'Concept Development',
      description:
        'Following the initial research, we move into concept development, where we brainstorm ideas, curate mood boards, and outline essential design and functionality elements. This step is crucial for setting the creative direction of the project.',
    },
    {
      id: 3,
      icon: <FaSketch size={40} />,
      title: 'Wireframing & Prototyping',
      description:
        'Next, we focus on wireframing and prototyping. This involves structuring layouts, building wireframes, and developing interactive prototypes that allow for testing and refinement of our ideas before moving forward.',
    },
    {
      id: 4,
      icon: <FaPalette size={40} />,
      title: 'Visual Design & Branding',
      description:
        'In this phase, we shape a cohesive visual identity by integrating typography, colors, and branding elements. This ensures a seamless user experience and reinforces the overall design concept.',
    },
    {
      id: 5,
      icon: <FaCode size={40} />,
      title: 'Development & Implementation',
      description:
        'With the design finalized, we transition into development and implementation, where we convert our designs into clean, responsive code. This includes adding interactive elements to create a dynamic user experience.',
    },
    {
      id: 6,
      icon: <FaTools size={40} />,
      title: 'Testing & Refinement',
      description:
        'Once development is complete, we conduct testing and refinement. This phase involves usability testing, identifying and resolving issues, optimizing performance, and fine-tuning interactions to enhance the overall user experience.',
    },
    {
      id: 7,
      icon: <FaRocket size={40} />,
      title: 'Launch & Post-Launch Support',
      description:
        'Finally, we prepare for the launch and provide post-launch support. This includes deploying the project, tracking performance metrics, and offering ongoing updates to ensure continuous improvement and success.',
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

