import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'; // Add carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel CSS
import './ProjectDetailPage.css';

// Import PDF viewer
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

// Sample Project Data
const getProjectDataById = (id) => {
  const projects = [
    {
      id: "1",
      title: "Ron Zalko Web Design",
      image: "/Ron Zalko web design.jpg",
      pdf: "/Ron_Zalko_Fitness_Wireframe.pdf",
      details: "Redesigned Ron Zalko Fitness & Yoga website to enhance user experience...",
      narrative: "The Ron Zalko Fitness website serves as the digital presence for a premier fitness center...",
      challenges: "Overcame challenges in integrating complex booking forms and enhancing accessibility...",
      technicalInfo: "UI/UX Design, Web Development, Accessibility Improvements",
      notes: "Feedback was implemented after usability tests..."
    },
    {
      id: "2",
      title: "Melody Beats Branding",
      image: "/Melody_Beats_Logo.jpg",
      pdf: "/Revised_Final_Assignment_Yomi-Badejo_Graphic_Design.pdf",
      details: "Created cohesive branding for Melody Beats through logo and business card design...",
      narrative: "The branding project for Melody Beats involved crafting a vibrant identity...",
      challenges: "Balancing creative design with strict client requirements...",
      technicalInfo: "Adobe Illustrator, Branding Strategy",
      notes: "Iterations refined with client feedback."
    },
    {
      id: "3",
      title: "TimmyCare App Redesign",
      image: "/TimmyCare_App_Design.jpg",
      pdf: "/TimmyCare_Mobile_app.pdf",
      details: "Redesigned TimmyCare Hair App to improve navigation and user engagement...",
      narrative: "Focused on enhancing user experience by refining user flows and layouts...",
      challenges: "Simplifying navigation while maintaining brand aesthetics...",
      technicalInfo: "Figma, Prototyping, Wireframing",
      notes: "Successful testing with user groups."
    },
  ];

  return projects.find((project) => project.id === id);
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const projectData = getProjectDataById(projectId);

  if (!projectData) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-detail">
      {/* Hero Section */}
      <div className="project-hero">
        <img src={projectData.image} alt={projectData.title} className="project-image" />
        <h1>{projectData.title}</h1>
        <h3>{projectData.technicalInfo}</h3>
      </div>

      {/* Project Narrative */}
      <div className="project-section">
        <h2>Project Overview</h2>
        <p>{projectData.narrative}</p>
      </div>

      {/* Challenges Section */}
      <div className="project-section">
        <h2>Challenges Overcome</h2>
        <p>{projectData.challenges}</p>
      </div>

      {/* Technical Details */}
      <div className="project-section">
        <h2>Details</h2>
        <p><strong>Details:</strong> {projectData.details}</p>
        <p><strong>Notes:</strong> {projectData.notes}</p>
      </div>

      {/* PDF Viewer */}
      <div className="project-section">
        <h2>Supporting Documentation</h2>
        <Worker>
          <div style={{ height: '600px' }}>
            <Viewer fileUrl={projectData.pdf} />
          </div>
        </Worker>
      </div>

      {/* Carousel for Images */}
      <div className="project-section">
        <h2>Gallery</h2>
        <Carousel showThumbs={false} dynamicHeight>
          <div>
            <img src={projectData.image} alt="Project Image" />
          </div>
          {/* Add more images if needed */}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectDetailPage;


