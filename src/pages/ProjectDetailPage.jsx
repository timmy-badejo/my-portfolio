import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Tilt from 'react-parallax-tilt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectDetailPage.css';
import BackToHomeButton from '../components/BackToHomeButton';
import kvdstThumb from '../assests/branding.svg';
import RonZalkoWebDesign from '../assests/Ron Zalko web design.jpg';
import ronWire1 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_01.jpg';
import ronWire2 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_02.jpg';
import ronWire3 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_03.jpg';
import ronWire4 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_04.jpg';
import ronWire5 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_05.jpg';
import ronWire6 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_06.jpg';
import ronWire7 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_07.jpg';
import ronWire8 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_08.jpg';
import ronWire9 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_09.jpg';
import ronWire10 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_10.jpg';
import ronWire11 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_11.jpg';
import ronWire12 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_12.jpg';
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
import melodyPdf1 from '../assests/melodyBeatsDocument_Page_01.jpg';
import melodyPdf2 from '../assests/melodyBeatsDocument_Page_02.jpg';
import melodyPdf3 from '../assests/melodyBeatsDocument_Page_03.jpg';
import melodyPdf4 from '../assests/melodyBeatsDocument_Page_04.jpg';
import melodyPdf5 from '../assests/melodyBeatsDocument_Page_05.jpg';
import melodyPdf6 from '../assests/melodyBeatsDocument_Page_06.jpg';
import melodyPdf7 from '../assests/melodyBeatsDocument_Page_07.jpg';
import melodyPdf8 from '../assests/melodyBeatsDocument_Page_08.jpg';
import melodyPdf9 from '../assests/melodyBeatsDocument_Page_09.jpg';
import melodyPdf10 from '../assests/melodyBeatsDocument_Page_10.jpg';
import melodyPdf11 from '../assests/melodyBeatsDocument_Page_11.jpg';
import melodyPdf12 from '../assests/melodyBeatsDocument_Page_12.jpg';
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
import timmyHairCare1 from '../assests/timmyhaircare1.jpg';
import timmyHairCare2 from '../assests/timmyhaircare2.jpg';
import timmyHairCare3 from '../assests/timmyhaircare3.jpg';
import timmyHairCare4 from '../assests/timmyhaircare4.jpg';
import timicare1 from '../assests/timicare-hair-brand-2_Page_01.jpg';
import timicare2 from '../assests/timicare-hair-brand-2_Page_02.jpg';
import timicare3 from '../assests/timicare-hair-brand-2_Page_03.jpg';
import timicare4 from '../assests/timicare-hair-brand-2_Page_04.jpg';
import timicare5 from '../assests/timicare-hair-brand-2_Page_05.jpg';
import timicare6 from '../assests/timicare-hair-brand-2_Page_06.jpg';
import timicare7 from '../assests/timicare-hair-brand-2_Page_07.jpg';
import timicare8 from '../assests/timicare-hair-brand-2_Page_08.jpg';
import timicare9 from '../assests/timicare-hair-brand-2_Page_09.jpg';
import timicare10 from '../assests/timicare-hair-brand-2_Page_10.jpg';
import timicare11 from '../assests/timicare-hair-brand-2_Page_11.jpg';
import ronUiUx1 from '../assests/Ui-Ux RonZalko-WebDesign_Page_01.jpg';
import ronUiUx2 from '../assests/Ui-Ux RonZalko-WebDesign_Page_02.jpg';
import ronUiUx3 from '../assests/Ui-Ux RonZalko-WebDesign_Page_03.jpg';
import ronUiUx4 from '../assests/Ui-Ux RonZalko-WebDesign_Page_04.jpg';
import ronUiUx5 from '../assests/Ui-Ux RonZalko-WebDesign_Page_05.jpg';
import ronUiUx6 from '../assests/Ui-Ux RonZalko-WebDesign_Page_06.jpg';
import ronUiUx7 from '../assests/Ui-Ux RonZalko-WebDesign_Page_07.jpg';
import ronUiUx8 from '../assests/Ui-Ux RonZalko-WebDesign_Page_08.jpg';
import ronUiUx9 from '../assests/Ui-Ux RonZalko-WebDesign_Page_09.jpg';
import ronUiUx10 from '../assests/Ui-Ux RonZalko-WebDesign_Page_10.jpg';
import ronUiUx11 from '../assests/Ui-Ux RonZalko-WebDesign_Page_11.jpg';
import ronUiUx12 from '../assests/Ui-Ux RonZalko-WebDesign_Page_12.jpg';
import ronUiUx13 from '../assests/Ui-Ux RonZalko-WebDesign_Page_13.jpg';
import ronUiUx14 from '../assests/Ui-Ux RonZalko-WebDesign_Page_14.jpg';
import ronUiUx15 from '../assests/Ui-Ux RonZalko-WebDesign_Page_15.jpg';
import ronUiUx16 from '../assests/Ui-Ux RonZalko-WebDesign_Page_16.jpg';
import ronUiUx17 from '../assests/Ui-Ux RonZalko-WebDesign_Page_17.jpg';
import astroPlaceholder from '../assests/AstorMatchlogo.jpg';
import astroMatchA from '../assests/astro-match-app_Page_0a.jpg';
import astroMatchB from '../assests/astro-match-app_Page_0b.jpg';
import astroMatchC from '../assests/astro-match-app_Page_0c.jpg';
import astroMatchD from '../assests/astro-match-app_Page_0d.jpg';
import astroMatchE from '../assests/astro-match-app_Page_0e.jpg';
import astroMatchF from '../assests/astro-match-app_Page_0f.jpg';
import astroMatchG from '../assests/astro-match-app_Page_0g.jpg';
import astroMatchH from '../assests/astro-match-app_Page_0h.jpg';
import astroMatchI from '../assests/astro-match-app_Page_0i.jpg';
import astroMatchJ from '../assests/astro-match-app_Page_0j.jpg';
import astroMatchK from '../assests/astro-match-app_Page_0k.jpg';
import astroMatch1 from '../assests/Astro-Match-App_Page_1.jpg';
import astroMatch2 from '../assests/Astro-Match-App_Page_2.jpg';
import astroMatch3 from '../assests/Astro-Match-App_Page_3.jpg';
import astroMatch4 from '../assests/Astro-Match-App_Page_4.jpg';
import motionPlaceholder from '../assests/motion graphics.webp';
import motionGraphicVideo from '../assests/Jujitsu_Kaisen_Intro_Bumper_Timilehin Yomi-Badejo_Final comp.mp4';
gsap.registerPlugin(ScrollTrigger);

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
            <img src={image} alt={`Gallery ${index + 1}`} />
            <span className="parallax-label">Slide {index + 1}</span>
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
      overview: "Redesigned Ron Zalko Fitness & Yoga website to enhance user experience and provide seamless navigation.",
      challenges: "Overcame challenges in integrating complex booking forms, enhancing accessibility, and optimizing loading times.",
      outcome: "Delivered a presentation-ready UX case study with annotated wireframes and a clearer booking path for class review.",
      details: [
        "Implemented an intuitive navigation system.",
        "Enhanced accessibility for users with disabilities.",
        "Incorporated modern design aesthetics for improved engagement.",
      ],
      galleryImages: [
        ronWire1,
        ronWire2,
        ronWire3,
        ronWire4,
        ronWire5,
        ronWire6,
        ronWire7,
        ronWire8,
        ronWire9,
        ronWire10,
        ronWire11,
        ronWire12,
      ],
      technicalInfo: "UI/UX Design, Web Development, Accessibility Improvements",
    },
    {
      id: "2",
      title: "Melody Beats Branding",
      image: melodyBeats,
      overview: "Created cohesive branding for Melody Beats through logo and business card design to establish a strong visual identity.",
      challenges: "Balancing creative design with strict client requirements and tight deadlines.",
      outcome: "Packaged a cohesive brand system with mockups and print-ready files that met critique goals for the course.",
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
        melodyPdf1,
        melodyPdf2,
        melodyPdf3,
        melodyPdf4,
        melodyPdf5,
        melodyPdf6,
        melodyPdf7,
        melodyPdf8,
        melodyPdf9,
        melodyPdf10,
        melodyPdf11,
        melodyPdf12,
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
      overview: "Redesigned TimmyCare Hair App to improve navigation and user engagement, making it user-friendly.",
      challenges: "Simplifying navigation while maintaining brand aesthetics and addressing inconsistent user feedback.",
      outcome: "Produced an interactive prototype and usability summary showing smoother booking and product discovery for the course submission.",
      details: [
        "Redesigned app UI with a focus on simplicity.",
        "Enhanced user flows and wireframes using Figma.",
        "Improved app responsiveness across devices.",
      ],
      galleryImages: [
        timicare1,
        timicare2,
        timicare3,
        timicare4,
        timicare5,
        timicare6,
        timicare7,
        timicare8,
        timicare9,
        timicare10,
        timicare11,
        timmyHairCare1,
        timmyHairCare2,
        timmyHairCare3,
        timmyHairCare4,
      ],
      technicalInfo: "Figma, Prototyping, Wireframing",
    },
    {
      id: "4",
      title: "SCW Charity Website",
      image: scwCharity,
      overview: "Developed a user-focused website to promote social welfare initiatives and community outreach.",
      challenges: "Limited resources required creative problem-solving to deliver impactful results and ensure stakeholder satisfaction.",
      outcome: "Published a responsive prototype with accessible layouts and a storytelling deck for the outreach case study rubric.",
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
      overview: "Designed a swipe-based astrology dating experience that pairs users with matches based on compatibility scores and shared interests.",
      challenges: "Keeping the brand playful while ensuring onboarding, compatibility summaries, and chat flows stay intuitive on small screens.",
      outcome: "Documented compatibility flows and motion cues in a polished case study prepared for class critique.",
      details: [
        "Created mid and high-fidelity flows for onboarding, matching, and messaging.",
        "Documented compatibility logic, UI states, and motion cues for developer handoff.",
        "Packaged the case study with visuals and flow explanations for stakeholders.",
      ],
      technicalInfo: "Product Design, UI/UX, Prototyping",
      galleryImages: [
        astroMatch1,
        astroMatch2,
        astroMatch3,
        astroMatch4,
      ],
    },
    {
      id: "6",
      title: "Motion Graphic Intro",
      image: motionPlaceholder,
      video: motionGraphicVideo,
      overview: "Produced a fast-paced anime-inspired intro bumper with kinetic typography, lighting, and camera moves.",
      challenges: "Balancing legibility at high speed while syncing animation beats to audio cues and keeping export quality high.",
      outcome: "Rendered a web-optimized bumper that matched storyboard beats and playback requirements for the motion assignment.",
      details: [
        "Storyboarded timing beats to lock pacing before heading into After Effects.",
        "Animated typography, particle bursts, and camera sweeps to build momentum.",
        "Exported a web-friendly MP4 for smooth portfolio playback.",
      ],
      technicalInfo: "After Effects, Premiere Pro, Motion Graphics",
    },
    {
      id: "7",
      title: "KVDST Social Media Marketing Site",
      image: kvdstThumb,
      liveUrl: "https://kvdst.danielkolpakov.com/index.html",
      overview: "Co-built a collaborative marketing site for a school social campaign, pairing content strategy with a clean, scroll-friendly layout.",
      challenges: "Aligning design, copy, and handoff across GitHub while keeping the landing focused on a single CTA and smooth scroll experience.",
      outcome: "Launched a responsive landing that showcased the campaign narrative and made it simple to explore services and contact options.",
      details: [
        "Co-coded with Daniel Kolpakov using GitHub for version control, documentation, and PR reviews.",
        "Structured a hero, services, and results story that kept visitors moving down-page with anchored CTAs.",
        "Added subtle motion/hover accents while keeping performance lean for fast load on mobile.",
      ],
      technicalInfo: "Web Design, Collaboration, Social Media Marketing",
    },
  ];

  return projects.find((project) => project.id === id);
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const projectData = getProjectDataById(projectId);
  const isRon = projectData?.id === "1";
  const isMelody = projectData?.id === "2";
  const isScw = projectData?.id === "4";
  const isTimmyCare = projectData?.id === "3";
  const isAstro = projectData?.id === "5";
  const isKvdst = projectData?.id === "7";
  const ronViewportRef = useRef(null);
  const ronTrackRef = useRef(null);
  const liveFrameRef = useRef(null);

  useEffect(() => {
    if (!isRon) return;
    const viewport = ronViewportRef.current;
    const track = ronTrackRef.current;
    if (!viewport || !track) return;

    gsap.registerPlugin(ScrollTrigger);
    const getMaxMove = () => Math.max(0, track.scrollHeight - viewport.offsetHeight);

    const trigger = ScrollTrigger.create({
      trigger: viewport,
      start: "top top",
      end: () => `+=${track.scrollHeight}`,
      scrub: true,
      onUpdate: (self) => {
        const maxMove = getMaxMove();
        gsap.to(track, { y: -maxMove * self.progress, ease: "none", overwrite: true, duration: 0 });
      },
    });

    const handleResize = () => trigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      trigger.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [isRon]);

  useEffect(() => {
    if (!projectData?.liveUrl || !liveFrameRef.current) return;
    gsap.fromTo(
      liveFrameRef.current,
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: liveFrameRef.current,
          start: "top 75%",
        },
      }
    );
  }, [projectData]);

  if (!projectData) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-detail">
      <BackToHomeButton to="/work" label="Back to Work" />
      {/* Hero Section */}
      <div
        className={`project-hero ${isMelody ? 'melody-hero' : ''} ${isScw ? 'scw-hero' : ''} ${
          isTimmyCare ? 'timmy-hero' : ''
        } ${isRon ? 'ron-hero' : ''} ${isAstro ? 'astro-hero' : ''} ${isKvdst ? 'kvdst-hero' : ''}`}
      >
        {isMelody ? (
          <div className="melody-pdf-sticky">
            <div className="melody-doc-images">
              {[
                melodyPdf1,
                melodyPdf2,
                melodyPdf3,
                melodyPdf4,
                melodyPdf5,
                melodyPdf6,
                melodyPdf7,
                melodyPdf8,
                melodyPdf9,
                melodyPdf10,
                melodyPdf11,
                melodyPdf12,
              ].map((img, idx) => (
                <div key={idx} className="melody-doc-image">
                  <img src={img} alt={`Melody Beats Document page ${idx + 1}`} />
                  <span className="melody-doc-page">Page {idx + 1}</span>
                </div>
              ))}
            </div>
          </div>
        ) : isTimmyCare ? (
          <div className="timmy-scroll-hero">
            <div className="timmy-scroll-viewport">
              <div className="timmy-scroll-track">
                {[
                  timicare1,
                  timicare2,
                  timicare3,
                  timicare4,
                  timicare5,
                  timicare6,
                  timicare7,
                  timicare8,
                  timicare9,
                  timicare10,
                  timicare11,
                ].map((img, idx) => (
                  <div className="timmy-scroll-frame" key={idx}>
                    <img src={img} alt={`TimmyCare page ${idx + 1}`} />
                    <span className="timmy-scroll-page">Page {idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className="timmy-scroll-hint">Scroll to browse the TimmyCare case study</span>
          </div>
        ) : isAstro ? (
          <div className="astro-scroll-hero">
            <div className="astro-scroll-viewport">
              <div className="astro-scroll-track">
                {[
                  astroMatchA,
                  astroMatchB,
                  astroMatchC,
                  astroMatchD,
                  astroMatchE,
                  astroMatchF,
                  astroMatchG,
                  astroMatchH,
                  astroMatchI,
                  astroMatchJ,
                  astroMatchK,
                ].map((img, idx) => (
                  <div className="astro-scroll-frame" key={idx}>
                    <img src={img} alt={`AstroMatch page ${idx + 1}`} />
                    <span className="astro-scroll-page">Page {idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className="astro-scroll-hint">Scroll to browse AstroMatch</span>
          </div>
        ) : isRon ? (
          <div className="ron-scroll-hero">
            <div className="ron-scroll-viewport" ref={ronViewportRef}>
              <div className="ron-scroll-track" ref={ronTrackRef}>
              {[
                ronUiUx1,
                ronUiUx2,
                ronUiUx3,
                ronUiUx4,
                ronUiUx5,
                ronUiUx6,
                ronUiUx7,
                ronUiUx8,
                ronUiUx9,
                ronUiUx10,
                ronUiUx11,
                ronUiUx12,
                ronUiUx13,
                ronUiUx14,
                ronUiUx15,
                ronUiUx16,
                ronUiUx17,
              ].map((img, idx) => (
                <div className="ron-scroll-frame" key={idx}>
                  <img src={img} alt={`Ron Zalko page ${idx + 1}`} />
                  <span className="ron-scroll-page">Page {idx + 1}</span>
                </div>
              ))}
              </div>
            </div>
            <span className="ron-scroll-hint">Scroll to browse the Ron Zalko case study</span>
          </div>
        ) : isScw ? (
          <div className="scw-scroll-hero">
            <div className="scw-scroll-viewport">
              <img
                src={projectData.image}
                alt={projectData.title}
                className="scw-scroll-image"
              />
            </div>
            <span className="scw-scroll-hint">Scroll to explore the full page</span>
          </div>
        ) : (
          <img src={projectData.image} alt={projectData.title} className="project-image" />
        )}
        <h1>{projectData.title}</h1>
        <h3>{projectData.technicalInfo}</h3>
      </div>

      {projectData.liveUrl && (
        <div className="live-site-section" ref={liveFrameRef}>
          <div className="live-site-head">
            <h2>Live site preview</h2>
            <a
              className="project-doc-link"
              href={projectData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open live site
            </a>
          </div>
          <div className="live-site-frame">
            <div className="live-site-bar">
              <span></span><span></span><span></span>
              <p>kvdst.danielkolpakov.com</p>
            </div>
            <iframe
              className="live-site-iframe"
              src={projectData.liveUrl}
              title={`${projectData.title} live preview`}
              loading="lazy"
            />
          </div>
          <p className="live-site-note">Scroll inside to explore the campaign site.</p>
        </div>
      )}

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
        {projectData.outcome && (
          <div className="card">
            <h2>Outcome</h2>
            <p>{projectData.outcome}</p>
          </div>
        )}
        <div className="card">
          <h2>Details</h2>
          <ul>
            {projectData.details?.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* PDF Viewer */}
      {(projectData.pdf || projectData.image) && (
        <div className="project-section">
          <h2>Project Files</h2>
          <div className="project-doc-actions project-doc-actions-centered">
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
