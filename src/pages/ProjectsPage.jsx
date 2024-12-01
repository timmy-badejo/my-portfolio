import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([
    {
      title: "Sweet Sensations: Cake vs. Pleasure Poster Redesign",
      description:
        "The goal of this project is to enhance the design of a poster originally created in Photoshop during Term 1. The redesign will focus on making the ad more visually appealing, improving clarity, and ensuring the intended message is communicated effectively.",
      details:
        "This redesign improves visuals, clarity, and messaging. The goal is to stir intrigue in the target demographic, with a playful comparison of cake and pleasure.",
      image: "https://i.pinimg.com/736x/5a/dd/16/5add164dac701c1ccbfd53914f927794.jpg",
      isOpen: false,
    },
    {
      title: "Logo Design and Business Card for Melody Beats Headphones",
      description:
        "Create a cohesive brand identity for Melody Beats, a fictional headphone company, through the design of a logo and business card that promotes the brand’s values: vibrant, bold, and energetic.",
      details:
        "This project includes logo and business card designs that reflect the youthful and creative nature of the Melody Beats brand. The design emphasizes energy, creativity, and stability.",
      image: "https://via.placeholder.com/200", // Placeholder image URL
      isOpen: false,
    },
    {
      title: "Redesign of the Timmy Care Hair App",
      description:
        "This project involved the complete redesign of the Timmy Care Hair app, focusing on modern design principles and improving the user interface (UI) and user experience (UX).",
      details:
        "The redesign includes improved navigation, branding, and user flow, using Figma for high-fidelity prototyping.",
      image: "https://via.placeholder.com/200", // Placeholder image URL
      isOpen: false,
    },
  ]);

  // Toggle dropdown visibility
  const toggleDropdown = (index) => {
    setProjects((prevProjects) =>
      prevProjects.map((project, i) =>
        i === index ? { ...project, isOpen: !project.isOpen } : project
      )
    );
  };

  useEffect(() => {
    // GSAP Animation for scroll-up effect when card is loaded
    gsap.from('.project-card', { y: 50, opacity: 0, duration: 1, stagger: 0.2 });

    // GSAP Animation for dropdown toggle
    gsap.from('.project-details', { opacity: 0, y: 50, duration: 1, delay: 0.3 });
  }, [projects]);

  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-summary" onClick={() => toggleDropdown(index)}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>

            {project.isOpen && (
              <div className="project-details">
                <p>{project.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;



