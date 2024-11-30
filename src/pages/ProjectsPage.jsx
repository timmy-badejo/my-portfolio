import React, { useState } from 'react';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([
    { name: "Project 1", description: "Description of Project 1", link: "#" },
    { name: "Project 2", description: "Description of Project 2", link: "#" },
  ]);

  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="button">Learn More</a>
          </div>
        ))
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
};

export default ProjectsPage;


