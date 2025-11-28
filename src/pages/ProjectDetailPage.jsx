import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectDetailPage.css';
import RonZalkoWebDesign from '../assests/Ron Zalko web design.jpg';
import ronZalkoWireframe from '../assests/Ron-Zalko-Web-Design-Wireframe.pdf';
import melodyBeats from '../assests/MelodyCard1.jpg';
import melodyBeatsDocument from '../assests/melodyBeatsDocument.pdf';
import scwCharity from '../assests/scwcharitywebpage.png';
import timmyHairCare from '../assests/timmyhaircare4.jpg';
import timmyHairCareDocument from '../assests/timmyHairCareDocument.pdf';
import scwCharityDocument from '../assests/scwCharityDocument.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

// Project Data
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
      pdf: scwCharityDocument,
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

  const [numPages, setNumPages] = React.useState(null);
  const [pdfError, setPdfError] = React.useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPdfError(null);
  };

  const onDocumentError = () => {
    setPdfError('Unable to load PDF here. Please use the open links below.');
  };

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
        <div className="card">
          <h2>Project Overview</h2>
          <p>{projectData.overview}</p>
        </div>
        <div className="card">
          <h2>Challenges Overcome</h2>
          <p>{projectData.challenges}</p>
        </div>
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
          <div style={{ width: '100%', height: '600px', border: '1px solid #ddd' }}>
            <Document
              file={projectData.pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentError}
              onSourceError={onDocumentError}
              loading={<p className="project-doc-loading">Loading PDF…</p>}
            >
              {numPages ? (
                Array.from({ length: numPages }, (_, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))
              ) : (
                <p className="project-doc-loading">Preparing PDF…</p>
              )}
            </Document>
          </div>
          {pdfError && <p className="project-doc-error">{pdfError}</p>}
          <div className="project-doc-actions">
            <a
              href={projectData.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="project-doc-link"
            >
              Open PDF in new tab
            </a>
            {projectData.image && (
              <a
                href={projectData.image}
                target="_blank"
                rel="noopener noreferrer"
                className="project-doc-link"
              >
                Open JPG preview
              </a>
            )}
          </div>
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
