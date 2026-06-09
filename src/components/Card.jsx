import React from 'react';
import './Card.css'; // Create and import a CSS file for card styles

const Card = ({ icon, title, description }) => {
  return (
    <div className="tilt-card">
      <div className="card-icon">
        <img src={icon} alt={`${title} Icon`} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
