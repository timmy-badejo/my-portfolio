
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaPhoneAlt, FaLocationArrow, FaPaperPlane } from 'react-icons/fa';
import './ContactPage.css';
import BackToHomeButton from '../components/BackToHomeButton';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' }
      );
    }
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        }
      );
    }
    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.1,
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <BackToHomeButton />
      <section className="contact-hero" ref={heroRef}>
        <div className="contact-hero-copy">
          <p className="contact-kicker">Let’s collaborate</p>
          <h1>Say hello</h1>
          <p className="contact-sub">
            Share a project idea, feedback, or a quick hello. I’m open to roles, collaborations, and critiques.
          </p>
          <div className="contact-tags">
            <span>UI/UX</span>
            <span>Front-end</span>
            <span>Motion</span>
          </div>
        </div>
        <div className="contact-hero-card">
          <FaPaperPlane size={42} />
          <p>Drop a line I'll reply within 24–48 hours.</p>
        </div>
      </section>

      <section className="contact-body">
        <div className="contact-form" ref={formRef}>
          <h2>Send a message</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </label>
            <button type="submit" className="contact-btn">
              Send it over
            </button>
            {submitted && <p className="contact-success">Message sent! I’ll get back to you soon.</p>}
          </form>
        </div>

        <div className="contact-info" ref={infoRef}>
          <h3>Contact details</h3>
          <ul>
            <li>
              <FaEnvelope /> <a href="mailto:timmybadejo@gmail.com">timmybad@gmail.com</a>
            </li>
            <li>
              <FaPhoneAlt /> <a href="tel:+1234567890">+1 (236) 662-9328</a>
            </li>
            <li>
              <FaLocationArrow /> Vancouver, BC
            </li>
          </ul>
          <div className="contact-cta">
            <p>Prefer a quick note? Email me directly.</p>
            <a className="contact-btn ghost" href="mailto:timmybadejo@gmail.com">
              Email me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
