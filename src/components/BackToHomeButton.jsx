import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './BackToHomeButton.css';

const BackToHomeButton = ({
  to = "/",
  label = "Back",
  direction = "left",
  className = "",
}) => {
  const Icon = direction === "right" ? FaArrowRight : FaArrowLeft;

  return (
    <Link
      to={to}
      className={`back-home-btn ${className}`.trim()}
      aria-label={label}
    >
      {direction === "right" ? (
        <>
          <span>{label}</span>
          <Icon className="back-home-icon" />
        </>
      ) : (
        <>
          <Icon className="back-home-icon" />
          <span>{label}</span>
        </>
      )}
    </Link>
  );
};

export default BackToHomeButton;
