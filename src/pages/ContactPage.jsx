import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLocationArrow,
  FaPaperPlane,
  FaLinkedin,
} from "react-icons/fa";
import "./ContactPage.css";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" });
    }

    if (formRef.current && infoRef.current) {
      gsap.fromTo(
        [formRef.current, infoRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-body", start: "top 80%" },
        }
      );
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:studio@timmybad.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page">
      <Link to="/" className="contact-back-indicator">
        <div className="contact-back-line"></div>
        <div className="contact-back-content">
          <span className="contact-back-arrow">↑</span>
          <p>Return to Landing Page</p>
        </div>
      </Link>

      <nav className="contact-page-nav" aria-label="Contact page navigation">
        <a href="#contact-message">Message</a>
        <a href="#contact-info">Info</a>
        <a href="#contact-footer">CTA</a>
      </nav>

      <section className="contact-hero" ref={heroRef}>
        <div className="contact-hero-copy">
          <p className="contact-kicker">Let’s Work Together</p>
          <h1>Have a project, role, or idea? Let’s build something sharp.</h1>
          <p className="contact-sub">
            Send a message about design work, front-end projects, branding,
            collaborations, internships, or opportunities.
          </p>

          <div className="contact-tags">
            <span>Visual Design</span>
            <span>Front-End</span>
            <span>Brand Systems</span>
            <span>UI/UX</span>
          </div>
        </div>

        <div className="contact-hero-card">
          <FaPaperPlane />
          <div>
            <h3>Open for conversations</h3>
            <p>I usually reply within 24–48 hours.</p>
          </div>
        </div>
      </section>

      <section className="contact-body">
        <div className="contact-form" ref={formRef} id="contact-message">
          <p className="contact-kicker">Message Form</p>
          <h2>Send me a message</h2>

          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
            </label>

            <label>
              Email
              <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
            </label>

            <label>
              Message
              <textarea name="message" placeholder="Tell me what you’re working on..." value={formData.message} onChange={handleChange} rows="6" required />
            </label>

            <button type="submit" className="contact-btn">Send Message ↗</button>
          </form>
        </div>

        <aside className="contact-info" ref={infoRef} id="contact-info">
          <p className="contact-kicker">Contact Info</p>
          <h3>Direct details</h3>

          <ul>
            <li><FaPhoneAlt /><a href="tel:+1236669328">236-669-328</a></li>
            <li><FaEnvelope /><a href="mailto:timmybad06@gmail.com">timmybad06@gmail.com</a></li>
            <li><FaEnvelope /><a href="mailto:studio@timmybad.com">studio@timmybad.com</a></li>
            <li>
              <FaLinkedin />
              <a href="https://linkedin.com/in/timmy-yomi-badejo-b9b773251" target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
            </li>
            <li><FaLocationArrow /><span>Vancouver, BC, Canada</span></li>
          </ul>

          <div className="contact-cta">
            <p>
              Prefer direct email? Use the studio email for portfolio, collaboration,
              and design-related work.
            </p>
            <a className="contact-btn ghost" href="mailto:studio@timmybad.com">Email Studio ↗</a>
          </div>
        </aside>
      </section>

      <footer className="contact-page-footer" id="contact-footer">
        <div>
          <p className="contact-kicker">Next Step</p>
          <h2>Let’s turn the idea into something real.</h2>
          <p>
            Whether it’s a website, interface, brand direction, or front-end build,
            this is the best place to start the conversation.
          </p>
        </div>
        <Link to="/work">View Work First ↗</Link>
      </footer>
    </main>
  );
}
