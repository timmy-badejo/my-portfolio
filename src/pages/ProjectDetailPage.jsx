// src/pages/ProjectDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';  // To get the project ID from the URL
import './ProjectDetailPage.css';  // Make sure to style your project details

// Sample project data (this can be external or fetched from an API)
const getProjectDataById = (id) => {
  const projects = [
    {
      id: "1",
      title: "Sweet Sensations: Cake vs. Pleasure Poster Redesign",
      image: "https://i.pinimg.com/736x/5a/dd/16/5add164dac701c1ccbfd53914f927794.jpg",
      details: "This redesign improves visuals, clarity, and messaging.",
      narrative: "The original poster explored the playful comparison of cake and pleasure.",
      actions: "Ongoing actions to refine design elements.",
      technicalInfo: "Created using Photoshop",
      notes: "Feedback was provided by peers and instructors."
    },
    {
      id: "2",
      title: "Logo Design and Business Card for Melody Beats",
      image: "https://via.placeholder.com/500",
      details: "A vibrant logo and business card designed for Melody Beats.",
      narrative: "The company aims to appeal to a youthful, energetic demographic.",
      actions: "Feedback and iterations based on client reviews.",
      technicalInfo: "Designed using Illustrator",
      notes: "Professional and vibrant branding."
    },
    {
      id: "3",
      title: "Redesign of the Timmy Care Hair App",
      image: "https://via.placeholder.com/500",
      details: "Improved navigation and branding for the Timmy Care Hair app.",
      narrative: "Enhanced UI/UX through Figma prototyping.",
      actions: "User flows and wireframes refined.",
      technicalInfo: "Created using Figma",
      notes: "Focused on improving user experience."
    },
  ];

  return projects.find((project) => project.id === id);  // Find the project by ID
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();  // Extract projectId from URL
  const projectData = getProjectDataById(projectId);  // Fetch the project data using the projectId

  if (!projectData) {
    return <p>Project not found</p>;  // Display an error message if the project data is not found
  }

  return (
    <div className="project-detail">
      <h2>{projectData.title}</h2>
      <img src={projectData.image} alt={projectData.title} />
      <p><strong>Details:</strong> {projectData.details}</p>
      <p><strong>Narrative:</strong> {projectData.narrative}</p>
      <p><strong>Actions:</strong> {projectData.actions}</p>
      <p><strong>Technical Info:</strong> {projectData.technicalInfo}</p>
      <p><strong>Notes:</strong> {projectData.notes}</p>
    </div>
  );
};

export default ProjectDetailPage;

