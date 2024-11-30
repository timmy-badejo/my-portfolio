import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Make sure to create a CSS file for styling the header
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social icons

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="assests/Tc_logo.png" alt="TC" className="logo-image" /> {/* Logo Image */}
        <span className="logo-text">TimmyCreative</span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="dropdown">
            <a href="#" className="nav-link">Services</a>
            <ul className="dropdown-content">
              <li><Link to="/services/design" className="dropdown-item">Design</Link></li>
              <li><Link to="/services/development" className="dropdown-item">Development</Link></li>
              <li><Link to="/services/consulting" className="dropdown-item">Consulting</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
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




