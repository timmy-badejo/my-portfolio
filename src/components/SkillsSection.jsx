import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './SkillsSection.css';

const SkillsSection = () => {
  useEffect(() => {
    // GSAP Animation to fade in and rotate the skill items
    gsap.fromTo(
      '.skills-section .skill-item',
      {
        opacity: 0,
        y: 50, // Move from below to the normal position
        rotationY: -180, // Start with a flipped card
      },
      {
        opacity: 1,
        y: 0,
        rotationY: 0, // End with normal rotation
        duration: 1,
        stagger: 0.2,
        ease: "power2.out", // Use an easing function for smoother animation
      }
    );
  }, []);

  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills">
        <div className="skill-item">
          <div className="front">HTML</div>
          <div className="back">HTML - Frontend Development</div>
        </div>
        <div className="skill-item">
          <div className="front">CSS</div>
          <div className="back">CSS - Styling and Layout</div>
        </div>
        <div className="skill-item">
          <div className="front">JavaScript</div>
          <div className="back">JavaScript - Dynamic Web Interactions</div>
        </div>
        <div className="skill-item">
          <div className="front">React</div>
          <div className="back">React - Building Interactive UIs</div>
        </div>
        <div className="skill-item">
          <div className="front">React Native</div>
          <div className="back">React Native - Mobile Development</div>
        </div>
        <div className="skill-item">
          <div className="front">Photoshop</div>
          <div className="back">Photoshop - Graphic Design</div>
        </div>
        <div className="skill-item">
          <div className="front">Illustrator</div>
          <div className="back">Illustrator - Logo and Icon Design</div>
        </div>
        <div className="skill-item">
          <div className="front">InDesign</div>
          <div className="back">InDesign - Print and Layout Design</div>
        </div>
        <div className="skill-item">
          <div className="front">Adobe Dimension</div>
          <div className="back">Dimension - 3D Design and Mockups</div>
        </div>
        <div className="skill-item">
          <div className="front">XD</div>
          <div className="back">XD - Wireframing and Prototyping</div>
        </div>
        <div className="skill-item">
          <div className="front">Figma</div>
          <div className="back">Figma - UI/UX Design and Prototyping</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;





