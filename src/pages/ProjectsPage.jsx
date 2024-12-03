// src/pages/ProjectsPage.js
import React from 'react';
import FeaturedProjects from '../components/FeaturedProjects'; // Import the FeaturedProjects component

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h2>Featured Projects</h2>
      {/* FeaturedProjects component to display all featured projects */}
      <FeaturedProjects />
    </div>
  );
};

export default ProjectsPage;
