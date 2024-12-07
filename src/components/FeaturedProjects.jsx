import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "RON ZALKO FITNESS WEBSITE REDESIGN",
      description: "Redesigning Ron Zalko Fitness & Yoga's website to enhance UX, accessibility, and user engagement.",
      image: "src/components/assets/Ron Zalko web design.jpg",
      link: "/projects/1",
      categories: ["UI/UX Design", "Web Design"]
    },
    {
      id: 2,
      title: "Melody Beats Headphones Branding",
      description: "Designing a logo and business card for Melody Beats to establish cohesive branding.",
      image: "src/components/assets/Yomi-Badejo Business Card.jpg",
      link: "/projects/2",
      categories: ["Brand Design", "Logo Design"]
    },
    {
      id: 3,
      title: "Timmy Care Hair App Redesign",
      description: "Improving UI and UX for the Timmy Care Hair app.",
      image: "src/components/assets/Product Page.png",
      link: "/projects/3",
      categories: ["UI/UX Design", "Strategy"]
    },
    {
      id: 4,
      title: "SCW Charity Web Design",
      description: "Building a user-focused website to promote social welfare and community development.",
      image: "https://via.placeholder.com/300",
      link: "/projects/4",
      categories: ["Web Design", "UI/UX Design"]
    }
  ];

  return (
    <div className="featured-projects">
      <h2>My Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="stacked-card layer-1"></div>
            <div className="stacked-card layer-2"></div>
            <div className="project-content">
              <Link to={project.link}>
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-summary">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-categories">
                  {project.categories.map((category, index) => (
                    <span key={index} className="category">{category}</span>
                  ))}
                </div>
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

