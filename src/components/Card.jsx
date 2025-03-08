import React, { useEffect } from 'react';
import $ from 'jquery';
import 'tilt.js';
import './Card.css'; // Create and import a CSS file for card styles

const Card = ({ icon, title, description }) => {
  useEffect(() => {
    $('.tilt-card').tilt({
      maxTilt: 15,
      scale: 1.05,
      speed: 300,
      glare: true,
      maxGlare: 0.2,
    });
  }, []);

  return (
    <div className="tilt-card" data-tilt>
      <div className="card-icon">
        <img src={icon} alt={`${title} Icon`} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
