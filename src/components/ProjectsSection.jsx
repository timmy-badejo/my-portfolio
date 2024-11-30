// ProjectsSection.jsx
import React from 'react';
import '../pages/LandingPage.css'; // Importing the associated CSS for styling

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects">
        <div className="project-item">
          <div className="project-image">
            <img 
              src="https://images.deepai.org/art-image/e6e3d1f42a3c4c1aadc59b10e2ba4314/graphic-design-graphic-drawings-png-13d9c8.jpg" 
              alt="Ron Zalko Fitness Website" 
            />
          </div>
          <div className="project-description">
            <h3>Ron Zalko Fitness Website</h3>
            <p>Quidam officis similique sea ei, vel tollit inductum efficiendi ei, at nihil tantas platonem eos.</p>
            <button className="learn-more-btn">Learn more</button>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <img 
              src="https://images.deepai.org/art-image/5154fe99cffc43fc99c65c83000be8af/graphic-design-graphic-drawings-png.jpg" 
              alt="AstroMatch App" 
            />
          </div>
          <div className="project-description">
            <h3>AstroMatch App</h3>
            <p>Quidam officis similique sea ei, vel tollit inductum efficiendi ei, at nihil tantas platonem eos.</p>
            <button className="learn-more-btn">Learn more</button>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <img 
              src="https://images.deepai.org/art-image/7813b5adc3df4dac9b77ad977bca5eac/digital-and-graphic-design-services-graphic-d_wACYgVA.jpg" 
              alt="Melody Headphones" 
            />
          </div>
          <div className="project-description">
            <h3>Melody Headphones</h3>
            <p>Quidam officis similique sea ei, vel tollit inductum efficiendi ei, at nihil tantas platonem eos.</p>
            <button className="learn-more-btn">Learn more</button>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <img 
              src="https://images.deepai.org/art-image/7813b5adc3df4dac9b77ad977bca5eac/digital-and-graphic-design-services-graphic-d_wACYgVA.jpg" 
              alt="Saw Charity Website" 
            />
          </div>
          <div className="project-description">
            <h3>Saw Charity Website</h3>
            <p>Quidam officis similique sea ei, vel tollit inductum efficiendi ei, at nihil tantas platonem eos.</p>
            <button className="learn-more-btn">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


