import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import { FaPause, FaPlay } from "react-icons/fa";
import { projectsData } from "../data/projectsData";
import "./FeaturedProjects.css";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const projectRefs = useRef([]);
  const audioRefs = useRef({});
  const [playingId, setPlayingId] = useState(null);
  const projects = projectsData.slice(0, 6);

  const handleAudioToggle = (event, project) => {
    event.preventDefault();
    event.stopPropagation();

    if (!project.audio) return;

    Object.entries(audioRefs.current).forEach(([id, audio]) => {
      if (id !== project.id && audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const audio = audioRefs.current[project.id];
    if (!audio) return;

    if (playingId === project.id && !audio.paused) {
      audio.pause();
      audio.currentTime = 0;
      setPlayingId(null);
      return;
    }

    audio.play().then(() => setPlayingId(project.id)).catch(() => setPlayingId(null));
  };

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
    return () => {
      Object.values(audioRefs.current).forEach((audio) => audio?.pause());
    };
  }, []);

  return (
    <section className="fp-featured-projects">
      <div className="fp-projects-header">
        <h2 className="fp-section-title-4">Featured Projects</h2>
        <p>Some of my best work in UI/UX, branding, and web design.</p>
      </div>

      <div className="fp-projects-grid">
        {projects.map((project, index) => {
          const isMotion = project.cardTheme === "motion" || project.id === "6";

          return (
            <Tilt
              key={project.id}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={true}
              glareMaxOpacity={0.3}
            >
              <div
                ref={(el) => (projectRefs.current[index] = el)}
                className={`fp-project-card ${isMotion ? "fp-project-card-motion" : ""}`}
              >
                <div className="fp-project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="fp-project-image"
                  />
                </div>

                {project.audio && (
                  <audio
                    ref={(el) => {
                      if (el) audioRefs.current[project.id] = el;
                    }}
                    src={project.audio}
                    preload="auto"
                    onEnded={() => setPlayingId(null)}
                  />
                )}

                <div className="fp-project-details">
                  <h3 className="fp-project-title">{project.title}</h3>
                  <p className="fp-project-desc">{project.description}</p>
                  <div className="fp-software-used">
                    <strong>Software Used:</strong>{" "}
                    {project.software.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                  <Link to={project.link} className="fp-view-project-btn">
                    View Project
                  </Link>

                  {project.audio && (
                    <button
                      type="button"
                      className="fp-audio-btn"
                      onClick={(event) => handleAudioToggle(event, project)}
                    >
                      {playingId === project.id ? <FaPause /> : <FaPlay />}
                      <span>{playingId === project.id ? "Stop Audio" : "Play Audio"}</span>
                    </button>
                  )}
                </div>
              </div>
            </Tilt>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;
