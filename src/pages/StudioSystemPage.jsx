import React from "react";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaGithub,
  FaImage,
  FaLayerGroup,
  FaLightbulb,
  FaPalette,
  FaPenNib,
  FaRocket,
  FaSearch,
  FaTools,
} from "react-icons/fa";
import {
  SiFigma,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "./StudioSystemPage.css";

import uiuxIcon from "../assets/uiux.svg";
import brandingIcon from "../assets/branding.svg";
import frontendIcon from "../assets/webdev.svg";
import prototypeIcon from "../assets/prototypewireframing.svg";
import graphicIcon from "../assets/graphic.svg";
import webdevIcon from "../assets/webdev.svg";

const coreSkills = [
  { title: "Visual Design", text: "Layouts, hierarchy, typography, colour systems, and visuals that communicate clearly.", icon: graphicIcon },
  { title: "UI/UX Design", text: "Wireframes, prototypes, user flows, interaction thinking, and interface structure.", icon: uiuxIcon },
  { title: "Front-End Development", text: "Responsive React builds, clean CSS systems, interactive pages, and polished implementation.", icon: frontendIcon },
  { title: "Brand Systems", text: "Logo direction, colour palettes, visual rules, design elements, and brand consistency.", icon: brandingIcon },
];

const services = [
  { title: "Design Direction", text: "I help shape the look, feel, structure, and visual direction of digital brands and products.", icon: brandingIcon },
  { title: "Website & Interface Design", text: "Clean landing pages, portfolio pages, product screens, dashboards, and responsive interfaces.", icon: uiuxIcon },
  { title: "Front-End Build", text: "Turning designs into React/JSX pages with structure, animation, responsiveness, and interaction.", icon: webdevIcon },
  { title: "Prototyping & Wireframing", text: "Planning user journeys, screens, and layout systems before the final design is built.", icon: prototypeIcon },
  { title: "Graphic Design", text: "Digital graphics, social visuals, print layouts, event materials, and communication pieces.", icon: graphicIcon },
  { title: "Brand Identity Support", text: "Colour systems, logo explorations, visual assets, and identity applications across touchpoints.", icon: brandingIcon },
];

const tools = [
  { name: "Figma", icon: <SiFigma /> },
  { name: "React", icon: <SiReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "VS Code", icon: <VscVscode /> },
  { name: "Photoshop", icon: <FaImage /> },
  { name: "Illustrator", icon: <FaPenNib /> },
  { name: "InDesign", icon: <FaLayerGroup /> },
];

const process = [
  { step: "01", title: "Discovery", text: "Understand the goal, audience, problem, brand, and what the project needs to achieve.", icon: <FaSearch /> },
  { step: "02", title: "Direction", text: "Define the visual mood, structure, references, user flow, and creative system.", icon: <FaLightbulb /> },
  { step: "03", title: "Prototype", text: "Create wireframes, layout systems, and early screens to test the experience before polish.", icon: <FaTools /> },
  { step: "04", title: "Visual Build", text: "Apply typography, colour, spacing, components, imagery, and brand details.", icon: <FaPalette /> },
  { step: "05", title: "Development", text: "Build the interface with clean front-end structure, responsive behaviour, and interaction.", icon: <FaCode /> },
  { step: "06", title: "Refine & Launch", text: "Test, adjust, improve, and prepare the final experience for presentation or deployment.", icon: <FaRocket /> },
];

export default function StudioSystemPage() {
  return (
    <main className="studio-page">
      <Link to="/" className="studio-back-indicator">
        <div className="studio-back-line"></div>
        <div className="studio-back-content">
          <span className="studio-back-arrow">↑</span>
          <p>Return to Landing Page</p>
        </div>
      </Link>

      <nav className="studio-page-nav" aria-label="Studio System navigation">
        <a href="#skills">Skills</a>
        <a href="#tools">Tools</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#studio-cta">CTA</a>
      </nav>

      <section className="studio-hero">
        <p className="studio-kicker">Studio System</p>
        <h1>Where visuals, systems, and code connect.</h1>
        <p>
          This is my creative command center — the skills, tools, services, and
          process I use to turn ideas into polished digital experiences.
        </p>

        <div className="studio-hero-pills">
          <span>Visual Design</span>
          <span>UI/UX</span>
          <span>Front-End</span>
          <span>Brand Systems</span>
        </div>
      </section>

      <section className="studio-command">
        <div className="studio-command-copy">
          <p className="studio-kicker">Capability Map</p>
          <h2>One system. Multiple creative lanes.</h2>
          <p>
            I work across design and development, but the goal stays the same:
            create work that feels clear, useful, sharp, and intentional.
          </p>
        </div>

        <div className="studio-command-panel">
          <div className="studio-radar">
            <span></span>
            <span></span>
            <span></span>
            <div className="studio-radar-core">TB</div>
          </div>
        </div>
      </section>

      <section className="studio-section" id="skills">
        <div className="studio-section-head">
          <p className="studio-kicker">Core Skills</p>
          <h2>What I’m building around.</h2>
        </div>

        <div className="studio-card-grid">
          {coreSkills.map((skill) => (
            <article className="studio-card" key={skill.title}>
              <img src={skill.icon} alt={skill.title} />
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-section studio-tools-section" id="tools">
        <div className="studio-section-head">
          <p className="studio-kicker">Tools I Use</p>
          <h2>The software stack behind the work.</h2>
        </div>

        <div className="studio-tools-grid">
          {tools.map((tool) => (
            <div className="studio-tool-card" key={tool.name}>
              <span>{tool.icon}</span>
              <p>{tool.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="studio-section" id="services">
        <div className="studio-section-head">
          <p className="studio-kicker">What I Can Offer</p>
          <h2>Design support that moves from idea to execution.</h2>
        </div>

        <div className="studio-service-grid">
          {services.map((service) => (
            <article className="studio-service-card" key={service.title}>
              <img src={service.icon} alt={service.title} />
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-section" id="process">
        <div className="studio-section-head">
          <p className="studio-kicker">My Process</p>
          <h2>How I move from messy idea to polished experience.</h2>
        </div>

        <div className="studio-process">
          {process.map((item) => (
            <article className="studio-process-card" key={item.step}>
              <div className="studio-process-icon">{item.icon}</div>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="studio-footer" id="studio-cta">
        <div>
          <p className="studio-kicker">Next Step</p>
          <h2>Need design and front-end support?</h2>
          <p>
            I can help turn your idea, brand, or interface into a sharper,
            cleaner, more intentional digital experience.
          </p>
        </div>
        <Link to="/contact" className="tb-btn tb-btn-primary">
          Let’s Work Together ↗
        </Link>
      </footer>
    </main>
  );
}
