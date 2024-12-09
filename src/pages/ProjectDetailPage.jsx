import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel CSS
import './ProjectDetailPage.css';

// Import images and documents
import RonZalkoWebDesign from '../assests/RonZalkowebdesign.jpg';
import ronZalkoWireframe from '../assests/Page 16.png';
import melodyBeats from '../assests/MelodyCard1.jpg';
import melodyBeatsDocument from '../assests/Revised_Final Assignment_Yomi-Badejo_Graphic Design.pdf';
import scwCharity from '../assests/scwcharitywebpage.png';
import timmyHairCare from '../assests/timmyhaircare4.jpg';
import timmyHairCareDocument from '../assests/TimmyCare Mobile app.pdf';

// Import PDF viewer
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

// Sample Project Data
const getProjectDataById = (id) => {
  const projects = [
    {
      id: "1",
      title: "Ron Zalko Web Design",
      image: RonZalkoWebDesign,
      pdf: ronZalkoWireframe,
      overview: "Redesigned Ron Zalko Fitness & Yoga website to enhance user experience and provide seamless navigation.",
      challenges: "Overcame challenges in integrating complex booking forms, enhancing accessibility, and optimizing loading times.",
      details: [
        "Implemented an intuitive navigation system.",
        "Enhanced accessibility for users with disabilities.",
        "Incorporated modern design aesthetics for improved engagement.",
      ],
      technicalInfo: "UI/UX Design, Web Development, Accessibility Improvements",
    },
    {
      id: "2",
      title: "Melody Beats Branding",
      image: melodyBeats,
      pdf: melodyBeatsDocument,
      overview: "Created cohesive branding for Melody Beats through logo and business card design to establish a strong visual identity.",
      challenges: "Balancing creative design with strict client requirements and tight deadlines.",
      details: [
        "Designed vibrant logos using Adobe Illustrator.",
        "Developed branding strategy and collateral.",
        "Iterated on designs based on client feedback.",
      ],
      technicalInfo: "Adobe Illustrator, Branding Strategy",
    },
    {
      id: "3",
      title: "TimmyCare App Redesign",
      image: timmyHairCare,
      pdf: timmyHairCareDocument,
      overview: "Redesigned TimmyCare Hair App to improve navigation and user engagement, making it user-friendly.",
      challenges: "Simplifying navigation while maintaining brand aesthetics and addressing inconsistent user feedback.",
      details: [
        "Redesigned app UI with a focus on simplicity.",
        "Enhanced user flows and wireframes using Figma.",
        "Improved app responsiveness across devices.",
      ],
      technicalInfo: "Figma, Prototyping, Wireframing",
    },
    {
      id: "4",
      title: "SCW Charity Website",
      image: scwCharity,
      pdf: null,
      overview: "Developed a user-focused website to promote social welfare initiatives and community outreach.",
      challenges: "Limited resources required creative problem-solving to deliver impactful results and ensure stakeholder satisfaction.",
      details: [
        "Developed responsive layouts for mobile and desktop.",
        "Integrated CMS for easy content management.",
        "Received positive feedback from stakeholders.",
      ],
      technicalInfo: "Web Development, Content Management",
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

      {/* Cards Section */}
      <div className="cards-container">
        {/* Project Overview Card */}
        <div className="card">
          <h2>Project Overview</h2>
          <p>{projectData.overview}</p>
        </div>

        {/* Challenges Overcome Card */}
        <div className="card">
          <h2>Challenges Overcome</h2>
          <p>{projectData.challenges}</p>
        </div>

        {/* Details Card */}
        <div className="card">
          <h2>Details</h2>
          <ul>
            {projectData.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* PDF Viewer */}
      {projectData.pdf && (
        <div className="project-section">
          <h2>Supporting Documentation</h2>
          <Worker>
            <div style={{ height: '600px', border: '1px solid #ddd' }}>
              <Viewer fileUrl={projectData.pdf} />
            </div>
          </Worker>
        </div>
      )}

      {/* Carousel for Images */}
      <div className="project-section">
        <h2>Gallery</h2>
        <Carousel showThumbs={false} dynamicHeight>
          <div>
            <img src={projectData.image} alt="Project" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectDetailPage;




