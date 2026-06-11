import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaPause, FaPlay } from "react-icons/fa";
import { projectsData } from "../data/projectsData";
import "./WorkPage.css";

const filters = [
  "All",
  "UI/UX",
  "Visual Design",
  "Front-End",
  "Branding",
  "Web",
  "Motion",
  "Internship",
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [previewProject, setPreviewProject] = useState(null);
  const [playingId, setPlayingId] = useState(null);
  const audioRefs = useRef({});

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => {
          if (project.category.includes(activeFilter)) return true;
          return activeFilter === "Branding" && project.category.includes("Brand");
        });

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
    } else {
      audio.play().then(() => setPlayingId(project.id)).catch(() => setPlayingId(null));
    }
  };

  const handleTiltMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `
      perspective(1000px)
      rotateX(${y / -25}deg)
      rotateY(${x / 25}deg)
      translateY(-10px)
    `;
  };

  const handleTiltLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <main className="work-page">
      <Link to="/" className="back-home-indicator">
        <div className="back-home-line"></div>
        <div className="back-home-content">
          <span className="back-home-arrow">↑</span>
          <p>Return to Landing Page</p>
        </div>
      </Link>

      <section className="work-hero">
        <p className="work-kicker">Project Library</p>
        <h1>All selected projects, case studies, and design systems.</h1>
        <p>
          A collection of my visual design, UI/UX, front-end, motion, branding,
          internship, and web design work.
        </p>
      </section>

      <div className="work-filters" aria-label="Project filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`tb-filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <section className="tb-project-library">
        {filteredProjects.map((project) => {
          const projectThemeClass = project.cardTheme
            ? `tb-project-card-${project.cardTheme}`
            : "";

          return (
            <Link
              to={project.link}
              className={[
                "tb-project-card",
                "magnetic-card",
                projectThemeClass,
              ].join(" ").trim()}
              key={project.id}
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
            >
              <div className="tb-project-image">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
              </div>

              {project.audio && (
                <audio
                  ref={(el) => {
                    if (el) audioRefs.current[project.id] = el;
                  }}
                  src={project.audio}
                  preload="none"
                  onEnded={() => setPlayingId(null)}
                />
              )}

              <div className="tb-project-content">
                <p>{project.category}</p>
                <h2>{project.title}</h2>
                <span>{project.description}</span>

                <div className="tb-project-tools">
                  {project.software.map((tool) => (
                    <small key={tool}>{tool}</small>
                  ))}
                </div>

                <div className="tb-card-actions">
                  <strong>{project.cardTheme === "bcrpa" ? "View Internship ↗" : "View Project ↗"}</strong>

                  {project.audio && (
                    <button
                      type="button"
                      className="tb-audio-btn"
                      onClick={(event) => handleAudioToggle(event, project)}
                    >
                      {playingId === project.id ? <FaPause /> : <FaPlay />}
                      <span>{playingId === project.id ? "Stop Audio" : "Play Audio"}</span>
                    </button>
                  )}

                  {project.liveUrl && (
                    <button
                      type="button"
                      className="tb-preview-btn"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        setPreviewProject(project);
                      }}
                    >
                      Live Preview
                    </button>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      <footer className="work-page-footer">
        <div>
          <p className="work-kicker">Project Thinking</p>
          <h2>Want to see how I build the system behind the work?</h2>
          <p>
            Explore my Studio System to see the skills, tools, services, and process
            behind these case studies.
          </p>
        </div>

        <div className="work-footer-actions">
          <Link to="/studio-system">View Studio System ↗</Link>
          <Link to="/contact">Contact Me ↗</Link>
        </div>
      </footer>

      {previewProject && (
        <div className="preview-modal">
          <div
            className="preview-modal-backdrop"
            onClick={() => setPreviewProject(null)}
          />

          <div className="preview-modal-panel">
            <div className="preview-modal-head">
              <div>
                <p>Live Preview</p>
                <h3>{previewProject.title}</h3>
              </div>

              <button type="button" onClick={() => setPreviewProject(null)}>
                Close
              </button>
            </div>

            <iframe
              src={previewProject.previewUrl || previewProject.liveUrl}
              title={previewProject.title}
              className="preview-frame"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </main>
  );
}
