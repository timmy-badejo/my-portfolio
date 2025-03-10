import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Tclogo from '../assests/Tclogo.svg';
import MusicIcon from '../assests/music.svg';
import IdeaIcon from '../assests/idea.svg';
import WebpageIcon from '../assests/webpage.svg';

import './Home.css';
import { 
  FaInstagram, FaLinkedinIn, FaBars, FaTimes, 
  FaHome, FaUser, FaFolderOpen, FaEnvelope, FaFileDownload 
} from 'react-icons/fa';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

  // GSAP Animations
  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, { scale: 1.3, rotate: 10, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, { scale: 1, rotate: 0, duration: 0.3, ease: 'power2.out' });
  };

  const handleLogoClick = () => {
    gsap.fromTo('.logo-image', { rotation: 0 }, { rotation: 360, duration: 1, ease: 'power2.out' });
  };

  return (
    <section className="home">
      {/* Header */}
      <header className="header">
        <div className="logo" onClick={handleLogoClick}>
          <img src={Tclogo} alt="TimmyCreative Logo" className="logo-image" />
          <span className="logo-text">TimmyCreative</span>
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation */}
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}><FaHome /> Home</Link></li>
            <li><Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}><FaUser /> About</Link></li>
            <li><Link to="/work" className="nav-link" onClick={() => setMenuOpen(false)}><FaFolderOpen /> Work</Link></li>
            <li><Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}><FaFolderOpen /> Services</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}><FaEnvelope /> Contact</Link></li>
          </ul>
          <Link to="/resume.pdf" target="_blank" className="btn-resume"> <FaFileDownload /> Download CV</Link>
        </nav>
      </header>

      {/* Social Icons */}
      <div className="social-icons">
          <a href="https://www.instagram.com" className="social-icon"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/timmy-yomi-badejo-b9b773251" className="social-icon"><FaLinkedinIn /></a>
        </div>

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
      <div className="svg-container">
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










