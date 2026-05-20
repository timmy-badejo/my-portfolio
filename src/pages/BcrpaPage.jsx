import React from "react";
import { Link } from "react-router-dom";
import "./BcrpaPage.css";

import bcrpaVideo from "../assets/BCRPASYPOSUM.mp4";
import eventSetup from "../assets/EventSetup.jpeg";
import printWork from "../assets/PrintWork.jpeg";
import signage from "../assets/Signage.jpeg";

const bcrpaProjects = [
  {
    title: "Thank You Cards",
    type: "Print Design",
    text: "Foldable 5x7 thank-you card direction using BCRPA brand elements, typography, and print-ready layout thinking.",
  },
  {
    title: "Business Cards",
    type: "Brand Collateral",
    text: "Staff business card layouts refined with updated logo usage, typography, spacing, and Midnight Navy brand application.",
  },
  {
    title: "Registration Banner",
    type: "Event Signage",
    text: "Large-format registration banner for Symposium, designed for visibility, wayfinding, and brand launch consistency.",
  },
  {
    title: "Table Runner",
    type: "Event Branding",
    text: "Branded table runner concept using BCRPA’s updated visual system for physical event presence.",
  },
  {
    title: "Award Engraving Template",
    type: "Recognition Design",
    text: "Updated award template direction applying the refreshed BCRPA identity while respecting production constraints.",
  },
  {
    title: "Letterhead & Digital Templates",
    type: "Brand System",
    text: "Explored branded letterhead and digital communication templates built around BCRPA’s movement-focused identity.",
  },
];

export default function BcrpaPage() {
  return (
    <main className="bcrpa-page">
      <Link to="/" className="bcrpa-back-indicator">
        <div className="bcrpa-back-line"></div>

        <div className="bcrpa-back-content">
          <span className="bcrpa-back-arrow">↑</span>
          <p>Return to Landing Page</p>
        </div>
      </Link>

      <section className="bcrpa-hero">
        <p className="bcrpa-kicker">Internship Experience</p>

        <h1>BCRPA Visual Communication & Event Design</h1>

        <p>
          A dedicated look at my BCRPA internship work — covering event setup,
          signage, print design, brand collateral, and Symposium support.
        </p>

        <div className="bcrpa-hero-pills">
          <span>Visual Communication</span>
          <span>Print Design</span>
          <span>Event Branding</span>
          <span>Brand Systems</span>
        </div>
      </section>

      <section className="bcrpa-media-grid">
        <div className="bcrpa-video-card">
          <video src={bcrpaVideo} autoPlay muted loop playsInline controls />
          <span>BCRPA Symposium Video Glimpse</span>
        </div>

        <div className="bcrpa-photo-stack">
          <img src={eventSetup} alt="BCRPA event setup" />
          <img src={printWork} alt="BCRPA print work" />
          <img src={signage} alt="BCRPA signage" />
        </div>
      </section>

      <section className="bcrpa-section">
        <div className="bcrpa-section-head">
          <p className="bcrpa-kicker">BCRPA Projects</p>
          <h2>Design work I supported during the internship.</h2>
        </div>

        <div className="bcrpa-project-grid">
          {bcrpaProjects.map((project) => (
            <article className="bcrpa-project-card" key={project.title}>
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <span>{project.text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="bcrpa-section bcrpa-process">
        <p className="bcrpa-kicker">My Role</p>
        <h2>What I contributed</h2>

        <div className="bcrpa-process-grid">
          <div>
            <h3>Visual Communication</h3>
            <p>
              I worked on layouts, hierarchy, spacing, typography, and brand
              consistency across print and digital deliverables.
            </p>
          </div>

          <div>
            <h3>Event Support</h3>
            <p>
              I supported the Symposium through setup, signage, wayfinding, and
              on-site communication materials.
            </p>
          </div>

          <div>
            <h3>Brand System Thinking</h3>
            <p>
              I explored how BCRPA’s refreshed identity could work across
              cards, banners, runners, awards, and event touchpoints.
            </p>
          </div>
        </div>
      </section>

      <footer className="bcrpa-footer">
        <div>
          <p className="bcrpa-kicker">Real Experience</p>
          <h2>Professional design work in a real organization.</h2>
          <p>
            This internship became one of my strongest examples of visual
            communication, production design, brand adaptation, and event-based
            design execution.
          </p>
        </div>

        <div className="bcrpa-footer-actions">
          <Link to="/work">View More Work ↗</Link>
          <Link to="/contact">Let’s Work Together ↗</Link>
        </div>
      </footer>
    </main>
  );
}