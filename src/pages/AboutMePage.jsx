import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLightbulb,
  FaMusic,
  FaFilm,
  FaCog,
  FaChurch,
} from "react-icons/fa";

import profileImage from "../assets/profile_image.jpg";
import ideaIcon from "../assets/branding.svg";
import prototypeWire from "../assets/prototypewireframe.png";
import webdevIcon from "../assets/webdev.png";
import bcitDowntown from "../assets/bcit-downtown.jpg";

import "./AboutMePage.css";

gsap.registerPlugin(ScrollTrigger);

const AboutMePage = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const coreStackRefs = useRef([]);
  const eduRefs = useRef([]);
  const expRefs = useRef([]);
  const storyRefs = useRef([]);
  const funFactsRef = useRef(null);

  const profileData = {
    name: "Timilehin Yomi-Badejo",
    title: "Visual Designer & Front-End Designer / Developer",
    bio: `I’m a visual designer and front-end designer/developer who builds clean, functional, and polished digital experiences. My work connects brand systems, interface design, and code — with a strong eye for structure, detail, and premium visual feel.`,

    education: [
      {
        degree: "Diploma, New Media Design & Web Development",
        school: "British Columbia Institute of Technology",
        date: "2024 - 2026",
        image: bcitDowntown,
        details:
          "Studied New Media Design & Web Development at BCIT, building a strong foundation in visual design, UI/UX, front-end development, motion graphics, branding, project management, and digital product thinking.",
      },
    ],

    experience: [
      {
        role: "Volunteer Visual Communication Designer",
        company: "Winners Chapel International Vancouver",
        date: "Jan 2024 - Dec 2025",
        location: "Vancouver, BC",
        description:
          "Created weekly visual communication materials for church services, events, and digital announcements. Supported consistent visual branding through layouts, graphics, and communication-focused design.",
        skills: [
          "Visual Design",
          "Graphic Design",
          "Communication",
          "Layout Design",
          "Brand Consistency",
        ],
      },
      {
        role: "Visual Communication Designer",
        company: "BC Recreation & Parks Association",
        date: "Jan 2026 - Mar 2026",
        location: "Vancouver, BC",
        description:
          "Designed and supported print, digital, event, and brand communication assets during my BCRPA internship. Worked across signage, business cards, banners, table runners, letterhead, award templates, and Symposium materials.",
        skills: [
          "Print Design",
          "Brand Systems",
          "Event Design",
          "Visual Communication",
          "Production Design",
        ],
      },
      {
        role: "Front-End Designer & Graphic Designer",
        company: "Triumph Strides Hub Collaboration Project",
        date: "2026 - Present",
        location: "Remote / Surrey, BC",
        description:
          "Collaborating on TStride Hub as a front-end and visual design project, shaping the user interface, brand direction, layout system, and visual identity for a connected platform ecosystem.",
        skills: [
          "React",
          "UI Design",
          "Front-End Design",
          "Brand Direction",
          "Graphic Design",
        ],
      },
    ],

    funFacts: [
      {
        icon: <FaCog />,
        title: "Car Enthusiast",
        description:
          "I’m inspired by performance cars, clean interiors, sharp body lines, and premium build quality.",
      },
      {
        icon: <FaMusic />,
        title: "Music Lover",
        description:
          "Music helps me lock into creative flow while designing and coding.",
      },
      {
        icon: <FaFilm />,
        title: "Anime & Movies",
        description:
          "I enjoy anime, movies, and stories with strong visuals, emotion, and world-building.",
      },
      {
        icon: <FaChurch />,
        title: "Community Rooted",
        description:
          "My community experience shaped how I understand communication, consistency, and service.",
      },
      {
        icon: <FaLightbulb />,
        title: "Creative Systems",
        description:
          "I like turning messy ideas into structured design systems that feel clear and usable.",
      },
    ],

    coreValues: [
      {
        title: "Creativity & Innovation",
        back: "I’m always pushing myself to think beyond the obvious and create work that feels memorable, useful, and visually strong.",
      },
      {
        title: "User-Centered Thinking",
        back: "I care about how people move through a product, how they feel using it, and how design can make the experience clearer.",
      },
      {
        title: "Attention to Detail",
        back: "Typography, spacing, alignment, colour, and small interactions matter. Those details are what make the work feel polished.",
      },
      {
        title: "Lifelong Learning",
        back: "I keep learning through design, code, feedback, and real projects. Every project teaches me something new.",
      },
      {
        title: "Resilience",
        back: "When something breaks or doesn’t work, I stay with it. I test, adjust, and keep building until the solution becomes clearer.",
      },
      {
        title: "Collaboration",
        back: "I value feedback and communication. Stronger work usually comes from listening, refining, and building with others.",
      },
    ],
  };

  const storyArc = [
    {
      title: "Foundation — BCIT & Visual Thinking",
      text:
        "My design path became clearer through BCIT’s New Media Design & Web Development program. I learned how to connect design, code, motion, storytelling, branding, and user experience into one digital system.",
      badge: "Education",
      visual: bcitDowntown,
    },
    {
      title: "Practice — Visual Communication in Real Spaces",
      text:
        "At Winners Chapel International Vancouver, I built consistency through weekly graphics and event visuals. That experience helped me understand how design supports communication, trust, and community.",
      badge: "Volunteer Design",
      visual: ideaIcon,
    },
    {
      title: "Professional Growth — BCRPA Internship",
      text:
        "At BCRPA, I moved from school projects into real production work. I supported brand launch materials, Symposium assets, print design, signage, business cards, banners, award templates, and event communication.",
      badge: "Internship",
      visual: prototypeWire,
    },
    {
      title: "Now — Building Systems Like TimmyBad",
      text:
        "Now I’m shaping my portfolio, TStride Hub, and future projects around one idea: clean systems, strong visuals, thoughtful interfaces, and front-end builds that feel polished and intentional.",
      badge: "Current Direction",
      visual: webdevIcon,
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    const animateStack = (cards, trigger) => {
      if (!cards.length) return;

      gsap.set(cards, (card, i) => ({
        y: i * 24,
        scale: 1 - i * 0.05,
        opacity: 0,
        rotate: i % 2 ? -2 : 2,
      }));

      gsap.to(cards, {
        opacity: 1,
        y: (i) => i * 12,
        scale: (i) => 1 - i * 0.02,
        rotate: 0,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger,
          start: "top 75%",
        },
      });
    };

    animateStack(eduRefs.current, ".ap-edu-exp-grid");
    animateStack(expRefs.current, ".ap-edu-exp-grid");
  }, []);

  useEffect(() => {
    if (!storyRefs.current.length) return;

    gsap.set(storyRefs.current, (card, i) => ({
      y: i * 28,
      scale: 1 - i * 0.06,
      opacity: 0,
      rotateX: -6,
    }));

    gsap.to(storyRefs.current, {
      opacity: 1,
      rotateX: 0,
      y: (i) => i * 18,
      scale: (i) => 1 - i * 0.03,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".ap-story-arc",
        start: "top 70%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    const cards = coreStackRefs.current;
    if (!cards.length) return;

    gsap.set(cards, (card, i) => ({
      y: i * 20,
      scale: 1 - i * 0.04,
      opacity: 0,
      rotateX: -8,
    }));

    gsap.to(cards, {
      opacity: 1,
      rotateX: 0,
      y: (i) => i * 10,
      scale: (i) => 1 - i * 0.015,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".ap-core-values-grid",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <main className="ap-about-me-page">
      <Link to="/" className="about-back-indicator">
        <div className="about-back-line"></div>

        <div className="about-back-content">
          <span className="about-back-arrow">↑</span>
          <p>Return to Landing Page</p>
        </div>
      </Link>

      <section className="ap-hero-section">
        <div className="ap-hero-grid">
          <div className="ap-hero-copy">
            <p className="ap-hero-kicker">About Me</p>

            <h1 ref={nameRef}>{profileData.name}</h1>

            <p ref={titleRef} className="ap-hero-title">
              {profileData.title}
            </p>

            <p className="ap-hero-bio">
              I design like a system builder and refine like a car enthusiast —
              clean lines, strong structure, purposeful details, and a premium
              finish. My work connects visual design, brand systems, UI/UX, and
              front-end development.
            </p>

            <div className="ap-hero-pills">
              <span>Visual Design</span>
              <span>Front-End Dev</span>
              <span>Brand Systems</span>
              <span>Car-Inspired Precision</span>
            </div>
          </div>

          <div className="ap-profile-network">
            <div className="ap-network-orbit orbit-a"></div>
            <div className="ap-network-orbit orbit-b"></div>
            <div className="ap-network-orbit orbit-c"></div>

            <span className="ap-network-node node-1"></span>
            <span className="ap-network-node node-2"></span>
            <span className="ap-network-node node-3"></span>
            <span className="ap-network-node node-4"></span>

            <div className="ap-profile-core">
              <img src={profileImage} alt="Timmy Badejo" />
            </div>
          </div>
        </div>
      </section>

      <section className="ap-design-drive">
        <div>
          <p className="ap-hero-kicker">Design Philosophy</p>
          <h2>Clean like a dashboard. Sharp like a body line. Built like a system.</h2>
        </div>

        <p>
          My taste in cars influences how I think about design: balance,
          proportion, performance, structure, and small details that make the
          whole experience feel intentional. I bring that mindset into websites,
          interfaces, brand systems, and visual communication.
        </p>
      </section>

      <section className="ap-edu-exp-section">
        <div className="ap-edu-exp-head">
          <h2 className="ap-section-title">Education & Experience</h2>
          <p>Studies, volunteer work, internships, and collaborations that shaped how I design and build.</p>
        </div>

        <div className="ap-edu-exp-grid">
          <div className="ap-edu-stack">
            {profileData.education.map((edu, index) => (
              <div
                key={edu.degree}
                className="ap-edu-card"
                ref={(el) => (eduRefs.current[index] = el)}
              >
                {edu.image && (
                  <div className="ap-edu-image">
                    <img src={edu.image} alt={edu.school} />
                  </div>
                )}

                <div className="ap-edu-top">
                  <span className="ap-pill">Education</span>
                  <span className="ap-edu-date">{edu.date}</span>
                </div>

                <h3>{edu.degree}</h3>
                <p className="ap-edu-school">{edu.school}</p>
                <p className="ap-edu-details">{edu.details}</p>
              </div>
            ))}
          </div>

          <div className="ap-exp-stack">
            {profileData.experience.map((exp, index) => (
              <div
                key={exp.role}
                className="ap-exp-card"
                ref={(el) => (expRefs.current[index] = el)}
              >
                <div className="ap-exp-top">
                  <span className="ap-pill ap-pill-warm">Experience</span>
                  <span className="ap-exp-date">{exp.date}</span>
                </div>

                <h3>{exp.role}</h3>
                <p className="ap-exp-company">{exp.company}</p>
                <p className="ap-exp-location">{exp.location}</p>
                <p className="ap-exp-description">{exp.description}</p>

                <p className="ap-exp-skills">
                  <strong>Focus:</strong> {exp.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-core-values-section">
        <div className="ap-core-header">
          <h2 className="ap-core-values-title">Core Values</h2>

          <p className="ap-core-values-subtitle">
            The principles that steer how I design, code, communicate, and ship.
          </p>
        </div>

        <div className="ap-core-values-grid">
          {profileData.coreValues.map((val, index) => (
            <div
              key={val.title}
              className="ap-core-card"
              ref={(el) => (coreStackRefs.current[index] = el)}
            >
              <div className="ap-core-tag">{val.title}</div>
              <p>{val.back}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ap-story-arc">
        <div className="ap-story-header">
          <h2 className="ap-section-title">Story Arc</h2>
          <p>Where I started, what shaped me, and where I’m building next.</p>
        </div>

        <div className="ap-story-stack">
          {storyArc.map((story, index) => (
            <div
              key={story.title}
              className="ap-story-card"
              ref={(el) => (storyRefs.current[index] = el)}
            >
              <div className="ap-story-top">
                <span className="ap-story-badge">{story.badge}</span>
                <img src={story.visual} alt={story.title} className="ap-story-visual" />
              </div>

              <h3>{story.title}</h3>
              <p>{story.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ap-fun-fact-section">
        <h2 className="ap-section-title">Fun Facts About Me</h2>

        <div className="ap-fun-fact-slider">
          <button
            className="ap-fun-fact-nav"
            onClick={() => {
              funFactsRef.current?.scrollBy({ left: -320, behavior: "smooth" });
            }}
            aria-label="Scroll fun facts left"
          >
            ‹
          </button>

          <div className="ap-fun-fact-track" ref={funFactsRef}>
            {profileData.funFacts.map((fact) => (
              <div key={fact.title} className="ap-fun-fact-item">
                <div className="ap-fun-fact-icon">{fact.icon}</div>

                <div className="ap-fun-fact-content">
                  <h3>{fact.title}</h3>
                  <p>{fact.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="ap-fun-fact-nav"
            onClick={() => {
              funFactsRef.current?.scrollBy({ left: 320, behavior: "smooth" });
            }}
            aria-label="Scroll fun facts right"
          >
            ›
          </button>
        </div>
      </section>

      <footer className="ap-about-footer">
        <div>
          <p className="ap-hero-kicker">More of the system</p>
          <h2>Want to see how I design and build?</h2>
          <p>
            Explore my Studio System for skills, tools, services, and process.
          </p>
        </div>

        <Link to="/studio-system">Explore Studio System ↗</Link>
      </footer>
    </main>
  );
};

export default AboutMePage;