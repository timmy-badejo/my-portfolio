import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Header.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
  const handleLogoClick = () => {
    gsap.fromTo(
      '.logo-image',
      { rotation: 0 },
      { rotation: 360, duration: 1, ease: 'power2.out' }
    );
  };

  return (
    <header className="header">
      {/* Logo */}
      <div
        className="logo"
        onClick={handleLogoClick}
        onMouseEnter={() => gsap.to('.logo-text', { x: 10, opacity: 1, duration: 0.5 })}
        onMouseLeave={() => gsap.to('.logo-text', { x: 0, opacity: 0, duration: 0.5 })}
      >
        <svg
          className="logo-image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="50"
          height="50"
        >
          <use href="/mnt/data/Tc%20logo.svg" />
        </svg>
        <span className="logo-text">TimmyCreative</span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
          
        </ul>
      </nav>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://www.facebook.com" className="social-icon"><FaFacebookF /></a>
        <a href="https://www.twitter.com" className="social-icon"><FaTwitter /></a>
        <a href="https://www.instagram.com" className="social-icon"><FaInstagram /></a>
        <a href="https://www.linkedin.com" className="social-icon"><FaLinkedinIn /></a>
      </div>
    </header>
  );
};

export default Header;
