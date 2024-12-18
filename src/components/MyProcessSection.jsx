import React from 'react';
import '../pages/LandingPage.css';

const MyProcessSection = () => {
  return (
    <section className="process-section">
      <h2>My Process</h2>

      <div className="process-container">
        <div className="process-item">
          <div className="process-image">
            <img 
              src="https://images.deepai.org/art-image/5154fe99cffc43fc99c65c83000be8af/graphic-design-graphic-drawings-png.jpg" 
              alt="Concept Development" 
              className="process-img"
            />
          </div>
          <div className="process-text">
            <h3>Concept Development</h3>
            <p>Every project begins with a deep dive into understanding client goals, target audience, and brand identity. This is where we outline key objectives and define the project's direction.</p>
          </div>
        </div>

        <div className="process-item">
          <div className="process-image">
            <img 
              src="https://images.deepai.org/art-image/7813b5adc3df4dac9b77ad977bca5eac/digital-and-graphic-design-services-graphic-d_wACYgVA.jpg" 
              alt="Wireframing & Design" 
              className="process-img"
            />
          </div>
          <div className="process-text">
            <h3>Wireframing & Design</h3>
            <p>After outlining the project's direction, I create wireframes to map out the user journey and design layouts that are intuitive and visually appealing.</p>
          </div>
        </div>

        <div className="process-item">
          <div className="process-image">
            <img 
              src="https://images.deepai.org/art-image/e6e3d1f42a3c4c1aadc59b10e2ba4314/graphic-design-graphic-drawings-png-13d9c8.jpg" 
              alt="Coding & Development" 
              className="process-img"
            />
          </div>
          <div className="process-text">
            <h3>Coding & Development</h3>
            <p>With the design finalized, I move into coding, building the project from the ground up using clean and efficient code, ensuring the site is responsive and functional on all devices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProcessSection;
