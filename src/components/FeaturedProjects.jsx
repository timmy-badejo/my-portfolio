import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import timmyhaircare1 from "../assests/timmyhaircare1.jpg";
import ronzalko from "../assests/Ron Zalko web design.jpg";
import ronZalkoWireframe from "../assests/Ron-Zalko-Web-Design-Wireframe.pdf";
import melodycard1 from "../assests/MelodyCard1.jpg";
import scwcharity from "../assests/scwcharitywebpage.png";
import astroPlaceholder from "../assests/AstorMatchlogo.jpg";
import motionPlaceholder from "../assests/motion graphics.webp";
import "./FeaturedProjects.css";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Ron Zalko Fitness Website Redesign",
      description: "Enhancing UX, accessibility, and engagement.",
      image: ronzalko,
      software: ["Figma", "HTML", "CSS", "JavaScript"],
      pdf: ronZalkoWireframe,
      link: "/projects/1",
    },
    {
      id: 2,
      title: "Melody Beats Branding",
      description: "Designed branding and business cards for Melody Beats.",
      image: melodycard1,
      software: ["Illustrator", "Photoshop"],
      link: "/projects/2",
    },
    {
      id: 3,
      title: "Timmy Care Hair App",
      description: "Revamped the UI/UX of Timmy Care Hair App.",
      image: timmyhaircare1,
      software: ["Adobe XD", "React Native"],
      link: "/projects/3",
    },
    {
      id: 4,
      title: "SCW Charity Web Design",
      description: "Developed a charity website for social engagement.",
      image: scwcharity,
      software: ["WordPress", "Elementor"],
      link: "/projects/4",
    },
    {
      id: 5,
      title: "AstroMatch App",
      description: "Swipe-based astrology dating experience with compatibility scoring.",
      image: astroPlaceholder,
      software: ["Product Design", "UI/UX", "Prototyping"],
      link: "/projects/5",
    },
    {
      id: 6,
      title: "Motion Graphic Intro",
      description: "Anime-inspired kinetic typography bumper, optimized for web playback.",
      image: motionPlaceholder,
      software: ["After Effects", "Premiere Pro"],
      link: "/projects/6",
    },
  ];

  useEffect(() => {
    // Keep the section fade-in on scroll
    gsap.fromTo(
      ".fp-featured-projects",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fp-featured-projects",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="fp-featured-projects">
      <div className="fp-projects-header">
        <h2 className="fp-section-title-4">Featured Projects</h2>
        <p>Some of my best work in UI/UX, branding, and web design.</p>
      </div>

      <div className="fp-projects-grid">
        {projects.map((project, index) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={true}
            glareMaxOpacity={0.3}
          >
            <div
              ref={(el) => (projectRefs.current[index] = el)}
              className="fp-project-card"
            >
              {/* Image Container */}
              <div className="fp-project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="fp-project-image"
                />
              </div>

              {/* Project Details */}
              <div className="fp-project-details">
                <h3 className="fp-project-title">{project.title}</h3>
                <p className="fp-project-desc">{project.description}</p>
                <div className="fp-software-used">
                  <strong>Software Used:</strong>{" "}
                  {project.software.map((tool, i) => (
                    <span key={i}>{tool}</span>
                  ))}
                </div>
                <Link to={project.link} className="fp-view-project-btn">
                  View Project
                </Link>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
