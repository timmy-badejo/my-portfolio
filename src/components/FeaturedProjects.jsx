import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFloating, offset, flip } from '@floating-ui/react';
import timmyhaircare1 from '../assests/timmyhaircare1.jpg';
import timmyhaircare2 from '../assests/timmyhaircare2.jpg';
import timmyhaircare3 from '../assests/timmyhaircare3.jpg';
import timmyhaircare4 from '../assests/timmyhaircare4.jpg';
import ronzalko from '../assests/RonZalkowebdesign.jpg';
import melodycard1 from '../assests/MelodyCard1.jpg';
import melodycard2 from '../assests/MelodyCard2.jpg';
import scwcharity from '../assests/scwcharitywebpage.png';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const { refs, floatingStyles } = useFloating({
    placement: 'top',
    middleware: [offset(10), flip()],
  });

  const projects = [
    {
      id: 1,
      title: "Ron Zalko Fitness Website Redesign",
      description: "Redesigning Ron Zalko Fitness & Yoga's website to enhance UX, accessibility, and user engagement.",
      images: [ronzalko],
      link: "/projects/1",
      categories: ["UI/UX Design", "Web Design"],
    },
    {
      id: 2,
      title: "Melody Beats Headphones Branding",
      description: "Designing a logo and business card for Melody Beats to establish cohesive branding.",
      images: [melodycard1, melodycard2],
      link: "/projects/2",
      categories: ["Brand Design", "Logo Design"],
    },
    {
      id: 3,
      title: "Timmy Care Hair App Redesign",
      description: "Improving UI and UX for the Timmy Care Hair app.",
      images: [timmyhaircare1, timmyhaircare2, timmyhaircare3, timmyhaircare4],
      link: "/projects/3",
      categories: ["UI/UX Design", "Strategy"],
    },
    {
      id: 4,
      title: "SCW Charity Web Design",
      description: "Building a user-focused website to promote social welfare and community development.",
      images: [scwcharity],
      link: "/projects/4",
      categories: ["Web Design", "UI/UX Design"],
    },
  ];

  return (
    <section className="featured-projects">
      <h2 className="section-title-3">My Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            ref={refs.setReference}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-image-container">
              <img src={project.images[0]} alt={project.title} className="project-image" />
              {project.images.length > 1 && <div className="image-overlay">+{project.images.length - 1} more</div>}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <div className="categories">
                {project.categories.map((category, index) => (
                  <span key={index} className="category-badge">
                    {category}
                  </span>
                ))}
              </div>
              <Link to={project.link} className="view-project-btn">View Project</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Tooltip */}
      {hoveredProject && (
        <div ref={refs.setFloating} style={floatingStyles} className="floating-tooltip">
          <h4>{hoveredProject.title}</h4>
          <p>{hoveredProject.description}</p>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;



