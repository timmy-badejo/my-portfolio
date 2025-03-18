import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Tilt from "react-parallax-tilt";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import timmyhaircare1 from "../assests/timmyhaircare1.jpg";
import timmyhaircare2 from "../assests/timmyhaircare2.jpg";
import timmyhaircare3 from "../assests/timmyhaircare3.jpg";
import timmyhaircare4 from "../assests/timmyhaircare4.jpg";
import ronzalko from "../assests/RonZalkowebdesign.jpg";
import melodycard1 from "../assests/MelodyCard1.jpg";
import melodycard2 from "../assests/MelodyCard2.jpg";
import scwcharity from "../assests/scwcharitywebpage.png";
import "./FeaturedProjects.css";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Ron Zalko Fitness Website Redesign",
      description:
        "Redesigning Ron Zalko Fitness & Yoga's website to enhance UX, accessibility, and user engagement.",
      images: [ronzalko],
      link: "/projects/1",
      categories: ["UI/UX Design", "Web Design"],
    },
    {
      id: 2,
      title: "Melody Beats Headphones Branding",
      description:
        "Designing a logo and business card for Melody Beats to establish cohesive branding.",
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
      description:
        "Building a user-focused website to promote social welfare and community development.",
      images: [scwcharity],
      link: "/projects/4",
      categories: ["Web Design", "UI/UX Design"],
    },
  ];

  useEffect(() => {
    // GSAP animations for staggered entrance
    gsap.from(".project-card", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 80%",
      },
    });

    // Hover animation for project cards
    projectRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 1 },
        {
          scale: 1.05,
          duration: 0.3,
          ease: "power1.inOut",
          paused: true,
        }
      );
    });
  }, []);

  return (
    <section className="featured-projects">
      {/* Section Title */}
      <div className="projects-header">
        <h2 className="section-title-3">Portfolio</h2>
        <p>Check out some of my featured projects.</p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={400}
            glareEnable={true}
            glareMaxOpacity={0.3}
          >
            <div
              ref={(el) => (projectRefs.current[index] = el)}
              className="project-card"
            >
              {/* Project Image */}
              <div className="project-image-container">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="project-image"
                />
                {project.images.length > 1 && (
                  <div className="image-overlay">+{project.images.length - 1} more</div>
                )}
              </div>

              {/* Project Details */}
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="categories">
                  {project.categories.map((category, index) => (
                    <span key={index} className="category-badge">
                      {category}
                    </span>
                  ))}
                </div>
                <Link to={project.link} className="view-project-btn">
                  View Project
                </Link>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Fun Facts Section */}
      <div className="fun-facts">
        <h3>Some fun facts about my work:</h3>
        <ul>
          <li>⭐ 10+ completed projects</li>
          <li>🔥 5+ years of design & development</li>
          <li>📈 100% client satisfaction</li>
          <li>💡 Always learning & innovating</li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturedProjects;
