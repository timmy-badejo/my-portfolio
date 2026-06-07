import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaImage,
  FaLayerGroup,
  FaPenNib,
} from "react-icons/fa";
import {
  SiFigma,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import "./LandingPage.css";
import { projectsData } from "../data/projectsData";

import timmyBadLogo from "../assets/optimized/timmybadlogo-mobile.png";
import heroVisual from "../assets/prototypewireframe.png";
import footerVisual from "../assets/uiux.svg";
import profileImage from "../assets/optimized/profile-image-mobile.jpg";

import bcrpaVideo from "../assets/optimized/bcrpa-loop-mobile.mp4";
import eventSetup from "../assets/optimized/event-setup-mobile.jpg";
import printWork from "../assets/optimized/print-work-mobile.jpg";
import signage from "../assets/optimized/signage-mobile.jpg";

import uiuxIcon from "../assets/uiux.svg";
import brandingIcon from "../assets/branding.svg";
import frontendIcon from "../assets/webdev.svg";
import graphicIcon from "../assets/graphic.svg";
import bcrpaLogo from "../assets/BCRPA-primary-logo.png";

const coreSkills = [
  {
    title: "Visual Design",
    text: "Creating strong visual systems, layouts, branding, typography, and digital experiences with clarity and personality.",
    icon: graphicIcon,
  },
  {
    title: "UI/UX Design",
    text: "Designing intuitive user experiences, interaction flows, responsive interfaces, and usable digital products.",
    icon: uiuxIcon,
  },
  {
    title: "Front-End Development",
    text: "Building responsive and scalable interfaces using React, JavaScript, HTML, CSS, and modern web technologies.",
    icon: frontendIcon,
  },
  {
    title: "Brand Systems",
    text: "Developing scalable identity systems, logo directions, color systems, and cohesive digital branding.",
    icon: brandingIcon,
  },
];

const tools = [
  { name: "Figma", icon: <SiFigma /> },
  { name: "VS Code", icon: <VscVscode /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Photoshop", icon: <FaImage /> },
  { name: "Illustrator", icon: <FaPenNib /> },
  { name: "Adobe Creative Suite", icon: <FaLayerGroup /> },
];

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const featuredWork = projectsData.filter((project) => project.featured).slice(0, 4);

  const handleTiltMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `
      perspective(1000px)
      rotateX(${y / -28}deg)
      rotateY(${x / 28}deg)
      translateY(-8px)
    `;
  };

  const handleTiltLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <main className="tb-site">
      <nav className="tb-nav">
        <Link to="/" className="tb-logo tb-logo-hover" aria-label="Timmybad home">
          <img src={timmyBadLogo} alt="Timmybad logo" width="44" height="34" />
          <span className="tb-logo-slide">
            <span className="slide-timmy">timmy</span>
            <span className="slide-bad">bad</span>
          </span>
        </Link>

        <button
          type="button"
          className="tb-menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="landing-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span></span><span></span>
          <span className="sr-only">Toggle navigation</span>
        </button>

        <div id="landing-navigation" className={`tb-nav-links ${isMenuOpen ? "is-open" : ""}`}>
          <a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>

        <Link to="/contact" className="tb-btn tb-btn-primary tb-nav-action">
          Let’s Work Together ↗
        </Link>
      </nav>

      <section id="home" className="tb-hero tb-section">
        <div className="tb-hero-copy">
          <p className="tb-kicker">Visual Designer & Front-End Designer / Developer</p>
          <h1>
            I design systems, <span>not just screens.</span>
          </h1>
          <p className="tb-hero-text">
            I create clean, functional, and visually strong digital experiences
            that connect brand identity, UI/UX thinking, and front-end development.
          </p>

          <div className="tb-hero-actions">
            <a href="#work" className="tb-btn tb-btn-primary">View My Work</a>
            <Link to="/contact" className="tb-btn tb-btn-primary">Let’s Work Together ↗</Link>
          </div>
        </div>

        <div className="tb-hero-visual">
          <div className="tb-hero-visual-card">
            <img
              src={heroVisual}
              alt="Prototype wireframing visual"
              width="1100"
              height="1064"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <p>clean build structure • premium feel • system thinking</p>
        </div>

        <a href="#work" className="tb-scroll-indicator">
          <span></span>
          <p>Scroll</p>
        </a>
      </section>

      <section id="work" className="tb-section tb-work">
        <div className="tb-section-head">
          <div>
            <p className="tb-kicker">Selected Work</p>
            <h2>Building digital experiences that solve real problems.</h2>
          </div>

          <Link to="/work" className="view-link">
            View all projects →
          </Link>
        </div>

        <div className="tb-work-grid">
          {featuredWork.map((project) => (
            <Link
              to={project.link}
              className={[
                "tb-work-card",
                project.id === "1" ? "tb-work-card-ron" : "",
                project.id === "2" ? "tb-work-card-melody" : "",
                project.id === "3" ? "tb-work-card-timmycare" : "",
                project.id === "4" ? "tb-work-card-scw" : "",
                project.id === "5" ? "tb-work-card-astro" : "",
              ].join(" ").trim()}
              key={project.id}
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
            >
              <div className="tb-work-image">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
              </div>
              <p>{project.category}</p>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
              <strong>↗</strong>
            </Link>
          ))}
        </div>
      </section>

      <section id="experience" className="tb-section experience-section">
  <div className="experience-left">
    <p className="tb-kicker">Experience Highlight</p>
    <h2>BCRPA Internship Experience</h2>
    <p className="experience-text">
      Contributed to real-world communications, event support, visual
      branding, print and digital design for the BC Recreation & Parks Association.
    </p>

    <div
      className="bcrpa-brand-card tilt-card"
      onMouseMove={handleTiltMove}
      onMouseLeave={handleTiltLeave}
    >
      <div className="bcrpa-brand-mark">
        <img src={bcrpaLogo} alt="BCRPA logo" loading="lazy" decoding="async" />
      </div>

      <div className="bcrpa-brand-copy">
        <span>Visual Communication Designer</span>
        <h3>British Columbia Recreation and Parks Association</h3>
      </div>
    </div>

    <Link to="/bcrpa" className="tb-section-link">
      View Experience →
    </Link>
  </div>

  <div className="experience-media">
    <div className="experience-video tilt-card" onMouseMove={handleTiltMove} onMouseLeave={handleTiltLeave}>
      <video
        src={bcrpaVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={eventSetup}
      />
      <div className="experience-video-overlay">
        <span>BCRPA Symposium</span>
      </div>
    </div>

    <div className="experience-gallery">
      {[
        {
          image: eventSetup,
          label: "Event Setup",
          className: "event-setup",
          position: "center center",
        },
        {
          image: printWork,
          label: "Print & Branding",
          className: "print-branding",
          position: "center 45%",
        },
        {
          image: signage,
          label: "Wayfinding",
          className: "wayfinding",
          position: "center 42%",
        },
      ].map((item) => (
        <div
          className={`gallery-card tilt-card ${item.className}`}
          onMouseMove={handleTiltMove}
          onMouseLeave={handleTiltLeave}
          key={item.label}
        >
          <img
            src={item.image}
            alt={`BCRPA ${item.label}`}
            style={{ objectPosition: item.position }}
            loading="lazy"
            decoding="async"
          />

          <div className="gallery-overlay">
            <span>{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="experience-right tilt-card" onMouseMove={handleTiltMove} onMouseLeave={handleTiltLeave}>
    <h3>Key Contributions</h3>
    <ul>
      <li>Supported planning and execution of BCRPA Symposium assets.</li>
      <li>Worked on print, signage, and brand communication materials.</li>
      <li>Created design assets within real brand guidelines.</li>
      <li>Supported visual communication for event and launch needs.</li>
    </ul>
  </div>
</section>

      <section id="about" className="tb-section tb-about">
        <div className="tb-about-copy">
          <p className="tb-kicker">About</p>
          <h2>Clean design, strong systems, and intentional execution.</h2>
          <p>
            I’m Timmy Badejo, a visual designer and front-end designer/developer.
            I build digital experiences that connect brand identity, interface design,
            and front-end development.
          </p>
          <p>
            I think about design the same way I appreciate cars: clean lines,
            structure, detail, performance, and a finish that feels intentional.
          </p>

          <div className="tb-about-tags">
            <span>Visual Design</span>
            <span>Brand Systems</span>
            <span>Front-End Dev</span>
            <span>UI/UX</span>
          </div>

          <Link to="/about" className="tb-section-link">View More Info →</Link>
        </div>

        <div className="tb-atom-profile" onMouseMove={handleTiltMove} onMouseLeave={handleTiltLeave}>
          <div className="atom-orbit orbit-one"></div>
          <div className="atom-orbit orbit-two"></div>
          <div className="atom-orbit orbit-three"></div>
          <span className="atom-dot dot-one"></span>
          <span className="atom-dot dot-two"></span>
          <span className="atom-dot dot-three"></span>
          <div className="profile-nucleus">
            <img src={profileImage} alt="Timmy Badejo" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section id="skills" className="tb-section tb-skills">
        <div className="tb-section-head">
          <div>
            <p className="tb-kicker">Skills & Tools</p>
            <h2>Systems, visuals, and development working together.</h2>
          </div>
          <Link to="/studio-system" className="tb-section-link">Explore More →</Link>
        </div>

        <div className="core-skills-grid">
          {coreSkills.map((skill) => (
            <div
              key={skill.title}
              className="core-skill-card tilt-card"
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
            >
              <div className="skill-icon-wrap">
                <img src={skill.icon} alt={skill.title} loading="lazy" decoding="async" />
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
            </div>
          ))}
        </div>

        <div className="tools-wrapper">
          <p className="tb-mini-label">Tools I Use</p>
          <div className="tools-grid">
            {tools.map((tool) => (
              <div
                className="tool-card tilt-card"
                key={tool.name}
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                <div className="tool-icon-wrap">
                  <span className="tool-icon">{tool.icon}</span>
                </div>
                <h3>{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="tb-footer tb-section">
        <div>
          <Link to="/" className="tb-footer-brand" aria-label="Timmybad home">
            <img className="tb-footer-logo" src={timmyBadLogo} alt="Timmybad logo" loading="lazy" decoding="async" />
            <span className="tb-footer-slide">
              <span className="slide-timmy">timmy</span>
              <span className="slide-bad">bad</span>
            </span>
          </Link>
          <p>
            Visual Designer & Front-End Designer / Developer focused on clean,
            scalable, and user-centered digital solutions.
          </p>
        </div>

        <div>
          <h3>Contact</h3>
          <p className="tb-contact-line"><FaEnvelope /> <a href="mailto:timmybad06@gmail.com">timmybad06@gmail.com</a></p>
          <p className="tb-contact-line"><FaEnvelope /> <a href="mailto:studio@timmybad.com">studio@timmybad.com</a></p>
          <p className="tb-contact-line"><FaMapMarkerAlt /> Vancouver, BC, Canada</p>
          <Link to="/contact" className="tb-btn tb-btn-primary">Let’s Work Together ↗</Link>
        </div>

        <div className="tb-footer-visual">
          <img src={footerVisual} alt="UI UX visual" loading="lazy" decoding="async" />
          <span className="tb-footer-orbit tb-footer-orbit-one"></span>
          <span className="tb-footer-orbit tb-footer-orbit-two"></span>
          <span className="tb-footer-line line-one"></span>
          <span className="tb-footer-line line-two"></span>
        </div>
      </footer>
    </main>
  );
}
