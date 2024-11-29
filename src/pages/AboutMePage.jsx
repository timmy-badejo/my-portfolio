import React from 'react';

const AboutMePage = () => {
  return (
    <div className="about-me-page">
      <h2>About Me</h2>
      <p>I'm Timmy, a passionate digital designer and developer.</p>
      <p>My mission is to transform ideas into impactful digital experiences.</p>
      <div className="values">
        <h3>My Values</h3>
        <ul>
          <li>Collaboration</li>
          <li>Quality</li>
          <li>Integrity</li>
          <li>Compassion</li>
        </ul>
      </div>
      <a href="/projects" className="button">View My Projects</a>
    </div>
  );
};

export default AboutMePage;

