import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link to enable navigation
import { gsap } from 'gsap';
import './FeaturedProjects.css'; // Updated CSS file

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Sweet Sensations: Cake vs. Pleasure Poster Redesign",
      description: "Enhancing the design of a poster originally created in Photoshop during Term 1.",
      image: "https://via.placeholder.com/300", // Placeholder image URL
      link: "/projects/1"  // Link to project with ID
    },
    {
      id: 2,
      title: "Logo Design and Business Card for Melody Beats Headphones",
      description: "Creating a cohesive brand identity for Melody Beats through the design of a logo and business card.",
      image: "https://via.placeholder.com/300", // Placeholder image URL
      link: "/projects/2"
    },
    {
      id: 3,
      title: "Redesign of the Timmy Care Hair App",
      description: "Redesigning the Timmy Care Hair app to improve UI and UX.",
      image: "https://via.placeholder.com/300", // Placeholder image URL
      link: "/projects/3"
    },
    {
      id: 4,
      title: "Zen Matcha Branding",
      description: "Branding project for Zen Matcha, focusing on clean, modern design.",
      image: "https://via.placeholder.com/300", // Placeholder image URL
      link: "/projects/4"
    },
  ]);

  useEffect(() => {
    // GSAP Animation for hover shake effect
    gsap.to('.project-card', {
      scale: 1.1,
      ease: "power1.inOut",
      duration: 0.3,
      repeat: -1,
      yoyo: true,
      paused: true
    });
  }, []);

  return (
    <div className="projects-page">
      <h2>My Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-summary">
              <Link to={project.link}>
                <img src={project.image} alt={project.title} className="project-image" />
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <button className="learn-more-btn">View Project</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
