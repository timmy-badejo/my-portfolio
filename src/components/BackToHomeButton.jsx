import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './BackToHomeButton.css';

const BackToHomeButton = ({ to = "/", label = "Back" }) => (
  <Link to={to} className="back-home-btn" aria-label={label}>
    <FaArrowLeft className="back-home-icon" />
    <span>{label}</span>
  </Link>
);

export default BackToHomeButton;
