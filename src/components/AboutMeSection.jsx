import React, { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import profileImage from '../assests/profilei_mage.jpg';
import './AboutMeSection.css';

const AboutMeSection = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const typerRef = useRef(null);
  const shapesRef = useRef([]);
  const textOptions = useMemo( () => { return [
    "Creative Thinker",
    "Digital Designer",
    "Web Developer",
    "Innovative Mind"
  ]}, []);
  const [currentText, setCurrentText] = useState(textOptions[0]);

  useEffect(() => {
    // GSAP Animations
    gsap.from('.about-me-section h2', { opacity: 0, duration: 1, y: -50, ease: 'power2.out' });
    gsap.from('.profile-image', { opacity: 0, duration: 1.5, scale: 0.8, ease: 'elastic.out(1, 0.75)' });

    // Animate floating shapes
    shapesRef.current.forEach((shape, index) => {
      gsap.to(shape, {
        x: index % 2 === 0 ? 50 : -50,
        y: index % 2 === 0 ? -30 : 30,
        rotation: 360,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    });

    // Auto-switch paragraphs
    const paragraphInterval = setInterval(() => {
      setCurrentParagraph((prevIndex) => (prevIndex + 1) % 4);
    }, 8000);

    // Auto-switch typing effect text
    const textInterval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = textOptions.indexOf(prevText);
        return textOptions[(currentIndex + 1) % textOptions.length];
      });
    }, 3000);

    return () => {
      clearInterval(paragraphInterval);
      clearInterval(textInterval);
    };
  }, [textOptions]);

  return (
    <section className="about-me-section">
      <div className="about-content">
        <h2 ref={typerRef} className="typer">{currentText}</h2>
        <span className="cursor">|</span>
        <div className="about-text">
          <p className={currentParagraph === 0 ? 'active' : ''}>I’m Timmy Badejo, a passionate digital designer and developer with a keen eye for creativity and technology.</p>
          <p className={currentParagraph === 1 ? 'active' : ''}>My passion lies in interactive and web design, crafting stunning animations, seamless navigation, and responsive layouts.</p>
          <p className={currentParagraph === 2 ? 'active' : ''}>I’m constantly growing, diving into new technologies, and solving complex challenges through design and development.</p>
          <p className={currentParagraph === 3 ? 'active' : ''}>Collaboration is at the heart of my work. I love working with teams and clients to bring their visions to life.</p>
        </div>
      </div>
      <div className="profile-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      
      {/* Floating Shapes */}
      <div className="shapes-container">
        {[...Array(4)].map((_, index) => (
          <div key={index} className={`shape shape${index + 1}`} ref={el => shapesRef.current[index] = el}></div>
        ))}
      </div>
    </section>
  );
};

export default AboutMeSection;












