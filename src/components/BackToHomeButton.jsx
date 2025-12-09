import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './BackToHomeButton.css';

const BackToHomeButton = () => (
  <Link to="/" className="back-home-btn" aria-label="Back to landing page">
    <FaArrowLeft className="back-home-icon" />
    <span>Back to Landing</span>
  </Link>
);

export default BackToHomeButton;
