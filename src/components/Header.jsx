import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Tclogo from '../assests/Tclogo.svg';
import { FaBars, FaTimes, FaHome, FaUser, FaFolderOpen, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    gsap.fromTo('.header__logo-image', { rotation: 0 }, { rotation: 360, duration: 1, ease: 'power2.out' });
  };

  return (
    <header className="header">
      <div className="header__logo" onClick={handleLogoClick}>
        <img src={Tclogo} alt="TimmyCreative Logo" className="header__logo-image" />
        <span className="header__logo-text">TimmyCreative</span>
      </div>
      <div className="header__menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`header__nav-menu ${menuOpen ? 'active' : ''}`}>
        <ul className="header__nav-links">
          <li>
            <Link to="/" className="header__nav-link" onClick={() => setMenuOpen(false)}>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="header__nav-link" onClick={() => setMenuOpen(false)}>
              <FaUser /> About
            </Link>
          </li>
          <li>
            <Link to="/work" className="header__nav-link" onClick={() => setMenuOpen(false)}>
              <FaFolderOpen /> Work
            </Link>
          </li>
          <li>
            <Link to="/services" className="header__nav-link" onClick={() => setMenuOpen(false)}>
              <FaFolderOpen /> Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="header__nav-link" onClick={() => setMenuOpen(false)}>
              <FaEnvelope /> Contact
            </Link>
          </li>
        </ul>
        <Link to="/resume.pdf" target="_blank" className="header__btn-resume">
          <FaFileDownload /> Download CV
        </Link>
      </nav>
    </header>
  );
};

export default Header;
