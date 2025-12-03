import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import MusicIcon from '../assests/music.svg';
import IdeaIcon from '../assests/idea.svg';
import WebpageIcon from '../assests/webpage.svg';
import Header from './Header';
import "./Home.css";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ["A Graphic Designer", "A Web Designer", "A UI/UX Designer", "A Web Developer"];

  // References for SVG Animations
  const musicRef = useRef(null);
  const ideaRef = useRef(null);
  const webpageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // GSAP Animations for SVGs on hover
  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, { scale: 1.3, rotate: 10, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, { scale: 1, rotate: 0, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <section className="home">
      <Header />

      

      {/* Banner Section */}
      <div className="banner">
        <h2 className="greeting">HELLO I'M</h2>
        <h1 className="name">
          <span className="timmy">Timmy</span> <span className="badejo">Badejo</span>
        </h1>
        <p className="role">I am <span className="typewriter">{roles[textIndex]}</span></p>
        
        <div className="cta-buttons">
          <Link to="/contact" className="btn-primary">Say Hello</Link>
          <Link to="/about" className="btn-secondary">About Me</Link>
        </div>
      </div>

      {/* SVG Animations */}
      <div className="svg-container-2">
        <img 
          ref={musicRef} 
          src={MusicIcon} 
          alt="Music Icon" 
          className="animated-svg" 
          onMouseEnter={() => handleMouseEnter(musicRef)} 
          onMouseLeave={() => handleMouseLeave(musicRef)} 
        />
        <img 
          ref={ideaRef} 
          src={IdeaIcon} 
          alt="Idea Icon" 
          className="animated-svg" 
          onMouseEnter={() => handleMouseEnter(ideaRef)} 
          onMouseLeave={() => handleMouseLeave(ideaRef)} 
        />
        <img 
          ref={webpageRef} 
          src={WebpageIcon} 
          alt="Webpage Icon" 
          className="animated-svg" 
          onMouseEnter={() => handleMouseEnter(webpageRef)} 
          onMouseLeave={() => handleMouseLeave(webpageRef)} 
        />
      </div>
    </section>
  );
};

export default Home;
