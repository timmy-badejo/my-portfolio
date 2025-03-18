import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import timmyhaircare1 from "../assests/timmyhaircare1.jpg";
import ronzalko from "../assests/RonZalkowebdesign.jpg";
import melodycard1 from "../assests/MelodyCard1.jpg";
import scwcharity from "../assests/scwcharitywebpage.png";
import astroPlaceholder from "../assests/AstorMatchlogo.jpg";
import motionPlaceholder from "../assests/motion graphics.webp";
import "./FeaturedProjects.css";

// Register GSAP plugin
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
      description: "Placeholder for AstroMatch App project.",
      image: astroPlaceholder,
      software: ["React", "Node.js"],
      link: "/projects/5",
    },
    {
      id: 6,
      title: "Motion Graphic",
      description: "Placeholder for Motion Graphic project.",
      image: motionPlaceholder,
      software: ["After Effects", "Illustrator"],
      link: "/projects/6",
    },
  ];

  useEffect(() => {
    // Fade in entire section on scroll
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

    // For each project card, set up image slide animation on hover
    projectRefs.current.forEach((cardEl) => {
      const imgEl = cardEl.querySelector(".fp-project-image");

      // Initially hide the image by shifting it left
      gsap.set(imgEl, { x: "-100%", opacity: 0 });

      // Slide image in on mouse enter
      cardEl.addEventListener("mouseenter", () => {
        gsap.to(imgEl, { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" });
      });

      // Slide image out on mouse leave
      cardEl.addEventListener("mouseleave", () => {
        gsap.to(imgEl, { x: "-100%", opacity: 0, duration: 0.5, ease: "power2.in" });
      });
    });
  }, []);

  return (
    <section className="fp-featured-projects">
      <div className="fp-projects-header">
        <h2 className="fp-section-title-4">Featured Projects</h2>
        <p>Some of my best work in UI/UX, branding, and web design.</p>
      </div>

      <div className="fp-projects-grid">
        {projects.map((project, index) => (
          <Tilt key={project.id} tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.3}>
            <div
              ref={(el) => (projectRefs.current[index] = el)}
              className="fp-project-card"
            >
              {/* Image Container */}
              <div className="fp-project-image-container">
                <img src={project.image} alt={project.title} className="fp-project-image" />
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
