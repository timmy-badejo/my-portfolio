import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social icons
import Tclogo from '../assests/Tclogo.svg'; // Import the SVG logo
import './Footer.css'; // Import the updated CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo */}
      <div className="footer-logo">
        <img src={Tclogo} alt="TimmyCreative Logo" />
      </div>

      {/* Description */}
      <p className="footer-description">
        Are you looking for a creative partner to bring your digital ideas to life? Whether you’re in need of a sleek, responsive website,
        a user-friendly app, or compelling graphic designs, I’m here to help! With expertise in web development, design tools like Adobe Photoshop,
        Illustrator, Figma, and more, I’m ready to collaborate with you to create a project that exceeds your expectations.
        Let’s discuss your vision and explore how we can make it a reality!
      </p>

      {/* Copyright */}
      <p className="footer-copyright">© 2024 Timmy Badejo | All rights reserved</p>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;






