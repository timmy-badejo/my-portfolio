import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tclogo from '../assests/Tclogo.svg'; // Import the SVG logo
import { gsap } from 'gsap';
import './Header.css';
import { FaInstagram, FaLinkedinIn, FaBars, FaTimes, FaHome, FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <img src={Tclogo} alt="TimmyCreative Logo" className="logo-image" />
        <span className="logo-text">TimmyCreative</span>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}
      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              <FaHome className="nav-icon" />
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              <FaUser className="nav-icon" />
              <span className="nav-text">About</span>
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>
              <FaFolderOpen className="nav-icon" />
              <span className="nav-text">Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
              <FaEnvelope className="nav-icon" />
              <span className="nav-text">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://www.instagram.com" className="social-icon"><FaInstagram /></a>
        <a href="https://www.linkedin.com" className="social-icon"><FaLinkedinIn /></a>
      </div>
    </header>
  );
};

export default Header;






