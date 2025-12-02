import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  FaLightbulb, FaMusic, FaFilm, FaChurch, FaCog,
  FaPaintBrush, FaUserEdit, FaBullhorn, FaComments, FaFont, FaHeadset, FaPenNib,
  FaLaptopCode, FaBoxOpen, FaPrint, FaCameraRetro, FaTasks, FaCode, FaEdit
} from 'react-icons/fa';
import {
  SiHtml5, SiJavascript, SiReact, SiAdobexd,
  SiAdobephotoshop, SiAdobeillustrator
} from 'react-icons/si';
import Tilt from 'react-parallax-tilt';
import profileImage from '../assests/profile_image.jpg';
import ideaIcon from '../assests/idea.svg';
import prototypeWire from '../assests/prototypewireframe.png';
import webdevIcon from '../assests/webdev.png';
import './AboutMePage.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);




const getSkillIcon = (skill, size = 40) => {
  switch (skill) {
    case "UI Design":                 return <FaCog size={size} />;
    case "HTML/CSS":                 return <SiHtml5 size={size} />;
    case "JavaScript":               return <SiJavascript size={size} />;
    case "React.js":                 return <SiReact size={size} />;
    case "Graphic Design":           return <FaPaintBrush size={size} />;
    case "UI/UX":                    return <FaUserEdit size={size} />;
    case "Adobe XD":                 return <SiAdobexd size={size} />;
    case "Branding":                 return <FaBullhorn size={size} />;
    case "Communication":            return <FaComments size={size} />;
    case "Adobe Photoshop":          return <SiAdobephotoshop size={size} />;
    case "Adobe Illustrator":        return <SiAdobeillustrator size={size} />;
    case "Adobe InDesign":           return <FaPrint size={size} />;
    case "Typography":               return <FaFont size={size} />;
    case "Social Media Advertising": return <FaBullhorn size={size} />;
    case "Customer Service":         return <FaHeadset size={size} />;
    case "Logo Design":              return <FaPenNib size={size} />;
    case "Web Design":               return <FaLaptopCode size={size} />;
    case "Packaging Design":         return <FaBoxOpen size={size} />;
    case "Print Design":             return <FaPrint size={size} />;
    case "Digital Photography":      return <FaCameraRetro size={size} />;
    case "Project Management":       return <FaTasks size={size} />;
    case "Web Development":          return <FaCode size={size} />;
    case "Content Creation":         return <FaEdit size={size} />;
    default:                         return <FaCog size={size} />;
  }
};

const AboutMePage = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const coreStackRefs = useRef([]);
  const eduRefs = useRef([]);
  const expRefs = useRef([]);
  const storyRefs = useRef([]);
  const skillsRef = useRef(null);
  const funFactsRef = useRef(null);

  const profileData = {
    name: "Timilehin Yomi-Badejo",
    title: "New Media Designer and Web Developer",
    bio: `Creative and disciplined graphic designer who collaborates with private and commercial clients to discover their styles, create breath-taking designs, and pay attention to clients’ natural preferences, to achieve bespoke design.`,
    education: [
      {
        degree: "Diploma , New Media Design and Web Development",
        school: "British Columbia Institute of Technology",
        date: "Jan 2024 - Jul 2025",
        details: `Actively pursuing an Interactive Design Program at BCIT to enhance skills 
                  and stay at the forefront of industry trends. Skills: JavaScript · Digital Photography · Communication · Computer Literacy · UI/UX · User Interface Design · Adobe XD`
      },
      {
        degree: "Certificate , Communication Design Essential",
        school: "British Columbia Institute of Technology",
        date: "Sep 2020 - Sep 2021",
        details: `Activities and societies: Design and Arts
                  Skills: Brochures · Business Cards · Print Design · Graphic Design · JavaScript · Digital Photography · Adobe Creative Suite · Communication · Logo Design · Branding & Identity · Packaging Design · Branding · Illustration · Computer Literacy · Graphics · Art · Branding & Identity · Presentations · Web Design · UI/UX · User Interface Design · Page Layout · Design`
      },
      {
        degree: "Took courses in Graphic Design",
        school: "LaSalle College Vancouver",
        date: "Jan 2017 - Feb 2019",
        details: `Skills: Brochures · Print Design · Graphic Design · Adobe Creative Suite · Communication · Logo Design · Packaging Design · Branding · Illustration · Computer Literacy · Graphics · Art · Page Layout · Design`
      },
      {
        degree: "Associate's degree, interactive arts and technology",
        school: "Fraser International College",
        date: "Apr 2013 - Sep 2015",
        details: `Skills: Adobe Creative Suite · Communication · Computer Literacy · Graphics · Page Layout · Design`
      }
    ],
    experience: [
      {
        role: "Graphic Designer",
        company: "Winner's Chapel International, Vancouver · Full-time",
        date: "Jul 2023 - Present",
        location: "Vancouver, BC, Canada · Hybrid",
        description: `Actively contribute to the online presence of Winners Chapel, providing design services for weekly events and services. Collaborate with the events team to ensure a consistent and engaging visual brand.`,
        skills: ["Communication", "Computer Literacy", "Presentations", "Graphic Design", "Social Media Graphic Design"]
      },
      {
        role: "Freelance Graphic Designer",
        company: "Freelance · Full-time",
        date: "Sep 2020 - Present",
        location: "Vancouver, BC, Canada · Remote",
        description: `Successfully executed diverse design projects, including logos, branding, and promotional materials. Developed a keen understanding of clients' needs, delivering tailored and impactful solutions.`,
        skills: [
          "HTML", "Adobe Photoshop", "Communication", "Adobe InDesign", "Branding", "Computer Literacy",
          "Logo Design", "Art", "Presentations", "Branding & Identity", "Graphic Design", "Illustration", 
          "Page Layout", "Adobe Illustrator", "Typography", "Adobe Creative Suite", "Design", 
          "Cascading Style Sheets (CSS)", "Graphics", "Business Cards", "Brochures", "Print Design", "Social Media"
        ]
      },
      {
        role: "Social Media Designer",
        company: "JECO-EDUCATION · Contract Full-time",
        date: "Feb 2023 - Sep 2023",
        location: "Lagos, Nigeria · Remote",
        description: `Contributed to Jeco Education's brand by designing engaging visuals for their Instagram page. Collaborated with cross-functional teams to ensure brand consistency and impact. Actively participated in shaping social media strategies.`,
        skills: [
          "Communication", "Branding", "Computer Literacy", "Customer Service", "Presentations", 
          "Social Media Graphic Design", "Social Media Advertising"
        ]
      }
    ],
    skills: [
      "UI Design", "HTML/CSS", "JavaScript", "React.js", "Graphic Design", "UI/UX", "Adobe XD", 
      "Branding", "Communication", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Typography",
      "Social Media Advertising", "Customer Service", "Logo Design", "Web Design", "Packaging Design", 
      "Print Design", "Digital Photography", "Project Management", "Web Development", "Content Creation"
    ],
    funFacts: [
      { icon: <FaMusic />, title: "Music Lover", description: "I enjoy creating playlists for every mood." },
      { icon: <FaFilm />, title: "Anime & Movies", description: "I love watching anime and horror films." },
      { icon: <FaChurch />, title: "Church Community", description: "I am deeply involved in my church community." },
      { icon: <FaLightbulb />, title: "Creative Design", description: "Design videos and AMVs are my passion." }
    ],
    coreValues: [
      {
        title: "Creativity & Innovation",
        front: "Creativity & Innovation",
        back: "I'm always pushing myself to think beyond the obvious and come up with fresh, engaging ideas. I love experimenting with visuals, animations, and interfaces to create standout projects. My projects, like the AniAPI Anime App and the TimiCares website, are examples of my desire to build interactive, user-friendly experiences."
      },
      {
        title: "User-Centric Focus",
        front: "User-Centric Focus",
        back: "Understanding and prioritizing the user experience is essential to me. I put myself in the user’s shoes, ensuring my designs are intuitive, accessible, and cohesive. I design responsive and adaptive interfaces that are enjoyable for everyone."
      },
      {
        title: "Attention to Detail",
        front: "Attention to Detail",
        back: "I pay meticulous attention to every aspect of my work—from typography and color choices to layout and spacing. I believe polished, well-thought-out designs make projects shine."
      },
      {
        title: "Lifelong Learning & Adaptability",
        front: "Lifelong Learning",
        back: "I'm committed to continuously learning and evolving. Whether it's mastering new frameworks or refining my design approach, I embrace challenges as opportunities for growth."
      },
      {
        title: "Resilience & Perseverance",
        front: "Resilience",
        back: "I don't give up when things get tough. I've faced technical and creative challenges, and I keep pushing forward—turning obstacles into opportunities for improvement."
      },
      {
        title: "Collaboration & Communication",
        front: "Collaboration",
        back: "Working with others and communicating effectively is vital to me. I strive to explain my ideas clearly, listen actively, and incorporate feedback to build great projects."
      },
      {
        title: "Professionalism & Integrity",
        front: "Professionalism",
        back: "I hold myself to high standards, delivering quality work on time and with integrity. I'm dedicated to constant self-improvement and excellence."
      },
      {
        title: "Problem-Solving & Analytical Thinking",
        front: "Problem-Solving",
        back: "I love breaking down complex problems and finding creative solutions—whether in code, design, or user interactions."
      },
      {
        title: "Consistency & Reliability",
        front: "Consistency",
        back: "I strive to be dependable and consistent in every project—from design and prototyping to development and deployment."
      },
      {
        title: "Passion for My Craft",
        front: "Passion",
        back: "Above all, I'm deeply passionate about digital design and development. I aim to create work that leaves a lasting impact both visually and functionally."
      }
    ]
  };

  const storyArc = [
    {
      title: "Origin — How I Got Here",
      text: "I’ve always been that person who loves making things look good and work smoothly. That curiosity led me into BCIT’s New Media Design & Web Development program, where I’ve been building a foundation in UX/UI, front-end development, and digital design. Along the way, I’ve picked up skills in React/React Native, motion and visual design, and learned how much I enjoy turning messy ideas into clear, interactive experiences.",
      badge: "Foundations",
      visual: ideaIcon,
    },
    {
      title: "Right Now — What I’m Building",
      text: "I’m in the final stretch of my diploma, polishing my portfolio and shipping projects that feel like real products, not just assignments. Right now I’m focusing on Astro-Match, an astrology-themed matchmaking app that combines UI design, React Native development, and data-driven features like compatibility logic and favorites. I’m also refining my personal brand and case studies so everything—from code to visuals—shows how I think, design, test, and iterate.",
      badge: "In Progress",
      visual: prototypeWire,
    },
    {
      title: "What’s Next — Where I’m Heading",
      text: "Next, I’m aiming for an internship or junior role where I can grow as a digital designer and front-end developer, ideally in a team that values thoughtful UX, clean interfaces, and experimentation. I want to keep leveling up in interaction design, motion, and product thinking while contributing to real-world apps and experiences. Long term, I see myself leading or co-creating products that sit at the intersection of design, storytelling, and technology.",
      badge: "Next Steps",
      visual: webdevIcon,
    },
  ];

  useEffect(() => {
    // Animate hero name & title
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
    const container = skillsRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.ap-skill-card');
    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const progress = gsap.utils.clamp(
        0,
        1,
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      );

      cards.forEach((card, idx) => {
        const depth = -20 * (idx % 6);
        const tilt = (progress * 16 - 8) + (idx % 2 ? 3 : -3);
        const yShift = -10 * progress * (idx % 3);
        const scale = 0.9 + progress * 0.1;
        card.style.transform = `translateZ(${depth}px) rotateX(${tilt}deg) rotateY(${tilt / 2}deg) translateY(${yShift}px) scale(${scale})`;
        card.style.opacity = 0.5 + progress * 0.5;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const edCards = eduRefs.current;
    const exCards = expRefs.current;
    if (!edCards.length && !exCards.length) return;

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

    animateStack(edCards, ".ap-edu-exp-grid");
    animateStack(exCards, ".ap-edu-exp-grid");
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
    <div className="ap-about-me-page">
      <section className="ap-hero-section">
        <div className="ap-hero-grid">
          <div className="ap-hero-copy">
            <p className="ap-hero-kicker">About Me</p>
            <h1 ref={nameRef}>{profileData.name}</h1>
            <p ref={titleRef} className="ap-hero-title">{profileData.title}</p>
            <p className="ap-hero-bio">
              Creative and disciplined designer/developer crafting interfaces, motion, and brand systems that make digital products feel polished and human.
            </p>
            <div className="ap-hero-pills">
              <span>UI/UX</span>
              <span>Front-end</span>
              <span>Motion</span>
              <span>Brand Systems</span>
            </div>
          </div>
          <div className="ap-hero-visual">
            <div className="ap-hero-orb"></div>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.12} scale={1.02}>
              <img src={profileImage} alt="Profile" className="ap-hero-img" />
            </Tilt>
          </div>
        </div>
      </section>

      {/* EDUCATION & EXPERIENCE SECTION */}
      <section className="ap-edu-exp-section">
        <div className="ap-edu-exp-head">
          <h2 className="ap-section-title">Education & Experience</h2>
          <p>Coursework, client work, and roles that shaped how I build and design.</p>
        </div>
        <div className="ap-edu-exp-grid">
          <div className="ap-edu-stack">
            {profileData.education.map((edu, index) => (
              <div
                key={index}
                className="ap-edu-card"
                ref={(el) => (eduRefs.current[index] = el)}
              >
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
                key={index}
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
                  <strong>Skills:</strong> {exp.skills.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES STACK */}
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

      {/* STORY ARC SECTION */}
      <section className="ap-story-arc">
        <div className="ap-story-header">
          <h2 className="ap-section-title">Story Arc</h2>
          <p>Where I started, what I’m shipping now, and where I’m headed next.</p>
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

      {/* FUN FACTS SECTION */}
      <section className="ap-fun-fact-section">
        <h2 className="ap-section-title">Fun Facts About Me</h2>
        <div className="ap-fun-fact-slider">
          <button
            className="ap-fun-fact-nav"
            onClick={() => {
              funFactsRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
            }}
            aria-label="Scroll fun facts left"
          >
            ‹
          </button>
          <div className="ap-fun-fact-track" ref={funFactsRef}>
            {profileData.funFacts.map((fact, index) => (
              <div key={index} className="ap-fun-fact-item">
                <div className="ap-fun-fact-icon">
                  {fact.icon}
                </div>
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
              funFactsRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
            }}
            aria-label="Scroll fun facts right"
          >
            ›
          </button>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="ap-skills-section">
        <h2 className="ap-section-title">Skills</h2>
        <p className="ap-skills-subtitle">A 3D stack of tools and practices I’m growing through BCIT projects and client work.</p>
        <div className="ap-skills-container ap-skills-stack" ref={skillsRef}>
          {profileData.skills.map((skill, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0.08}
              scale={1.02}
            >
              <div className="ap-skill-card">
                {getSkillIcon(skill, 40)}
                <h3>{skill}</h3>
              </div>
            </Tilt>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;
