import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Tilt from 'react-parallax-tilt';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectDetailPage.css';
import RonZalkoWebDesign from '../assests/Ron Zalko web design.jpg';
import ronZalkoWireframe from '../assests/Ron-Zalko-Web-Design-Wireframe.pdf';
import melodyBeats from '../assests/MelodyCard1.jpg';
import melodyBeatsAlt from '../assests/MelodyCard2.jpg';
import melody3d from '../assests/3D for melody.png';
import melodyBeatsLogo from '../assests/Beats for melody.png';
import melodyBusiness from '../assests/Buisness name for melody.png';
import melodyEntertainment from '../assests/Entertainment Text Layer for melody.png';
import melodyLogoBlue from '../assests/Melody Logo 2 blue for melody.png';
import melodyLogoPoster from '../assests/Melody Logo poster cards for melody.png';
import melodyCard1 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card for melody.jpg';
import melodyCard2 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card2 for melody.jpg';
import melodyCard3 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card3 for melody.jpg';
import melodyCard4 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card4 for melody.jpg';
import melodyCard5 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card5 for melody.jpg';
import melodyCard6 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card6 for melody.jpg';
import melodyPost1 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards for melody.jpg';
import melodyPost2 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards2 for melody.jpg';
import melodyPost3 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards3 for melody.jpg';
import melodyPost4 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards4 for melody.jpg';
import melodyPost5 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards5 for melody.jpg';
import melodyPost6 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards6 for melody.jpg';
import melodyBlue from '../assests/melody blue for melody.png';
import melodyHeadphones from '../assests/melody head phones for melody.png';
import melodyShape from '../assests/melody shape logo for melody.png';
import melodyBeatsDocument from '../assests/melodyBeatsDocument.pdf';
import scwCharity from '../assests/scwcharitywebpage.png';
import scwWire1 from '../assests/SCW Charity Website Wireframe A 2_Page_01.jpg';
import scwWire2 from '../assests/SCW Charity Website Wireframe A 2_Page_02.jpg';
import scwWire3 from '../assests/SCW Charity Website Wireframe A 2_Page_03.jpg';
import scwWire4 from '../assests/SCW Charity Website Wireframe A 2_Page_04.jpg';
import scwWire5 from '../assests/SCW Charity Website Wireframe A 2_Page_05.jpg';
import scwWire6 from '../assests/SCW Charity Website Wireframe A 2_Page_06.jpg';
import scwWire7 from '../assests/SCW Charity Website Wireframe A 2_Page_07.jpg';
import scwWire8 from '../assests/SCW Charity Website Wireframe A 2_Page_08.jpg';
import scwWire9 from '../assests/SCW Charity Website Wireframe A 2_Page_09.jpg';
import scwWire10 from '../assests/SCW Charity Website Wireframe A 2_Page_10.jpg';
import scwWire11 from '../assests/SCW Charity Website Wireframe A 2_Page_11.jpg';
import scwWire12 from '../assests/SCW Charity Website Wireframe A 2_Page_12.jpg';
import scwWire13 from '../assests/SCW Charity Website Wireframe A 2_Page_13.jpg';
import timmyHairCare from '../assests/timmyhaircare4.jpg';
import timmyHairCareDocument from '../assests/timmyHairCareDocument.pdf';
import scwCharityDocument from '../assests/scwCharityDocument.pdf';
import astroPlaceholder from '../assests/AstorMatchlogo.jpg';
import astroMatchPdf from '../assests/Astro-Match-App.pdf';
import motionPlaceholder from '../assests/motion graphics.webp';
import motionGraphicVideo from '../assests/Jujitsu_Kaisen_Intro_Bumper_Timilehin Yomi-Badejo_Final comp.mp4';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ParallaxGallery = ({ images }) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll('.parallax-card');
      cards.forEach((card, idx) => {
        const speed = parseFloat(card.dataset.speed || '0.12');
        const rect = card.getBoundingClientRect();
        const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
        card.style.setProperty('--parallax-translate', `${offset * speed * -0.4}px`);
        card.style.setProperty('--parallax-base-scale', '1.02');
        card.style.opacity = Math.max(0.4, 1 - Math.abs(offset) / 800);
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-gallery" ref={containerRef}>
      {images.map((image, index) => (
        <Tilt
          key={index}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          glareEnable
          glareMaxOpacity={0.2}
          className="parallax-tilt"
        >
          <div
            className="parallax-card"
            data-speed={index % 2 === 0 ? 0.12 : 0.18}
          >
            <img src={image} alt={`SCW Charity Wireframe ${index + 1}`} />
            <span className="parallax-label">Wireframe {index + 1}</span>
          </div>
        </Tilt>
      ))}
    </div>
  );
};

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
      outcome: "Rolled out a unified brand system and print-ready assets that boosted recognizability across cards, posters, and digital touchpoints.",
      details: [
        "Designed vibrant logos using Adobe Illustrator.",
        "Developed branding strategy and collateral.",
        "Iterated on designs based on client feedback.",
      ],
      technicalInfo: "Adobe Illustrator, Branding Strategy",
      galleryImages: [
        melodyBeats,
        melody3d,
        melodyBeatsLogo,
        melodyBusiness,
        melodyEntertainment,
        melodyLogoBlue,
        melodyLogoPoster,
        melodyBeatsAlt,
        melodyCard1,
        melodyCard2,
        melodyCard3,
        melodyCard4,
        melodyCard5,
        melodyCard6,
        melodyPost1,
        melodyPost2,
        melodyPost3,
        melodyPost4,
        melodyPost5,
        melodyPost6,
        melodyBlue,
        melodyHeadphones,
        melodyShape,
      ],
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
      galleryImages: [
        scwWire1,
        scwWire2,
        scwWire3,
        scwWire4,
        scwWire5,
        scwWire6,
        scwWire7,
        scwWire8,
        scwWire9,
        scwWire10,
        scwWire11,
        scwWire12,
        scwWire13,
      ],
    },
    {
      id: "5",
      title: "AstroMatch App",
      image: astroPlaceholder,
      pdf: astroMatchPdf,
      overview: "Designed a swipe-based astrology dating experience that pairs users with matches based on compatibility scores and shared interests.",
      challenges: "Keeping the brand playful while ensuring onboarding, compatibility summaries, and chat flows stay intuitive on small screens.",
      details: [
        "Created mid- and high-fidelity flows for onboarding, matching, and messaging.",
        "Documented compatibility logic, UI states, and motion cues for developer handoff.",
        "Packaged the case study with visuals and flow explanations for stakeholders.",
      ],
      technicalInfo: "Product Design, UI/UX, Prototyping",
    },
    {
      id: "6",
      title: "Motion Graphic Intro",
      image: motionPlaceholder,
      video: motionGraphicVideo,
      overview: "Produced a fast-paced anime-inspired intro bumper with kinetic typography, lighting, and camera moves.",
      challenges: "Balancing legibility at high speed while syncing animation beats to audio cues and keeping export quality high.",
      details: [
        "Storyboarded timing beats to lock pacing before heading into After Effects.",
        "Animated typography, particle bursts, and camera sweeps to build momentum.",
        "Exported a web-friendly MP4 for smooth portfolio playback.",
      ],
      technicalInfo: "After Effects, Premiere Pro, Motion Graphics",
    },
  ];

  return projects.find((project) => project.id === id);
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const projectData = getProjectDataById(projectId);
  const isMelody = projectData?.id === "2";
  const [melodyNumPages, setMelodyNumPages] = React.useState(null);
  const [melodyPdfError, setMelodyPdfError] = React.useState(null);

  if (!projectData) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-detail">
      {/* Hero Section */}
      <div className={`project-hero ${isMelody ? 'melody-hero' : ''}`}>
        {isMelody ? (
          <div className="melody-pdf-sticky">
            <Document
              file={projectData.pdf}
              onLoadSuccess={({ numPages }) => setMelodyNumPages(numPages)}
              onLoadError={() =>
                setMelodyPdfError('Unable to preview PDF. Please use the download button.')
              }
              loading={<p className="project-doc-loading">Loading PDF...</p>}
            >
              {melodyNumPages
                ? Array.from({ length: melodyNumPages }, (_, index) => (
                    <Page
                      key={index + 1}
                      pageNumber={index + 1}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                ))
                : null}
            </Document>
            {melodyPdfError && (
              <div className="project-doc-error">
                {melodyPdfError}{' '}
                <a
                  href={projectData.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-doc-link inline"
                >
                  Open PDF in new tab
                </a>
              </div>
            )}
          </div>
        ) : (
          <img src={projectData.image} alt={projectData.title} className="project-image" />
        )}
        <h1>{projectData.title}</h1>
        <h3>{projectData.technicalInfo}</h3>
      </div>

      {/* Cards Section */}
      {isMelody ? (
        <div className="cards-container melody-sticky-cards">
          <div className="melody-floating-circles">
            <span className="melody-circle c1" />
            <span className="melody-circle c2" />
            <span className="melody-circle c3" />
          </div>
          {[
            { title: "Project Overview", content: projectData.overview },
            { title: "Challenges Overcome", content: projectData.challenges },
            { title: "Outcome", content: projectData.outcome },
            { title: "Details", list: projectData.details },
          ].map((section, idx) => (
            <div className="card melody-sticky-card" key={idx}>
              <h2>{section.title}</h2>
              {section.list ? (
                <ul>
                  {section.list.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
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
              {projectData.details?.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* PDF Viewer */}
      {(projectData.pdf || projectData.image) && (
        <div className="project-section">
          <h2>Project Files</h2>
          <div className="project-doc-actions project-doc-actions-centered">
            {projectData.pdf && (
              <a
                href={projectData.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="project-doc-link"
              >
                Open PDF in new tab
              </a>
            )}
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

      {projectData.video && (
        <div className="project-section">
          <h2>Project Video</h2>
          <div className="project-video-wrapper">
            <video
              className="project-video"
              src={projectData.video}
              controls
              poster={projectData.image}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Carousel for Images */}
      <div className="project-section">
        <h2>Gallery</h2>
        {projectData.galleryImages ? (
          <ParallaxGallery images={projectData.galleryImages} />
        ) : (
          <Carousel showThumbs={false} dynamicHeight>
            <div>
              <img src={projectData.image} alt="Project" />
            </div>
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
