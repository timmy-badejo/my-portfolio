import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {
  FaGraduationCap, FaBriefcase, FaLightbulb, FaMusic, FaFilm, FaChurch, FaCog,
  FaPaintBrush, FaUserEdit, FaBullhorn, FaComments, FaFont, FaHeadset, FaPenNib,
  FaLaptopCode, FaBoxOpen, FaPrint, FaCameraRetro, FaTasks, FaCode, FaEdit
} from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import AboutHeroComposite from "../components/AboutHeroComposite";
import {
  SiHtml5, SiJavascript, SiReact, SiAdobexd,
  SiAdobephotoshop, SiAdobeillustrator
} from 'react-icons/si';
import { Tilt } from 'react-tilt';
import profileImage from '../assests/profile_image.jpg';
import './AboutMePage.css';





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
  const coreValuesContainerRef = useRef(null);
  // Declare currentCoreIndex only once.
  const [currentCoreIndex, setCurrentCoreIndex] = useState(0);

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

  useEffect(() => {
    // Animate hero name & title
    const tl = gsap.timeline();
    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2, ease: "power4.out" }
    );
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }
    );

    // Animate floating circles inside hero container
    gsap.to('.ap-floating-circle', {
      x: "random(-150,150)",
      y: "random(-150,150)",
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "power1.inOut"
    });
  }, []);

  // Auto-rotate the Core Values flip card every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(coreValuesContainerRef.current, {
        rotationY: 90,
        duration: 0.5,
        ease: "power1.in",
        onComplete: () => {
          setCurrentCoreIndex((prev) => (prev + 1) % profileData.coreValues.length);
          gsap.fromTo(coreValuesContainerRef.current, { rotationY: -90 }, { rotationY: 0, duration: 0.5, ease: "power1.out" });
        }
      });
    }, 8000);
    return () => clearInterval(interval);
  }, [profileData.coreValues.length]);

  return (
    <div className="ap-about-me-page">
      {/* Shared Hero Section */}
<HeroSection />
{/* Composite hero: profile + circles + marquee + about text */}
    <AboutHeroComposite />

      <section className="ap-hero-section">
  <div className="ap-hero-container">
    <div className="ap-floating-circles-container">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="ap-floating-circle"
          style={{
            backgroundColor: index % 2 === 0 ? "#310000" : "#BCA58E",
            width: `${Math.random() * 80 + 40}px`,
            height: `${Math.random() * 80 + 40}px`,
          }}
        ></div>
      ))}
    </div>

    <h1 ref={nameRef}>{profileData.name}</h1>
    <p ref={titleRef}>{profileData.title}</p>

    <Tilt>
      <img src={profileImage} alt="Profile" className="profile-img" />
    </Tilt>
  </div>
</section>

      {/* EDUCATION & EXPERIENCE SECTION */}
      <section className="ap-edu-exp-section">
        <div className="ap-edu-exp-container">
          {/* Education Column */}
          <div className="ap-edu-column">
            <h2 className="ap-section-title">My Education</h2>
            {profileData.education.map((edu, index) => (
              <div key={index} className="ap-edu-item">
                <Tilt>
                  <div className="ap-edu-icon">
                    <FaGraduationCap size={40} />
                  </div>
                </Tilt>
                <div className="ap-edu-content">
                  <h3>{edu.degree}</h3>
                  <p className="ap-edu-date">{edu.date}</p>
                  <p>{edu.school}</p>
                  <p>{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Experience Column */}
          <div className="ap-exp-column">
            <h2 className="ap-section-title">My Experience</h2>
            {profileData.experience.map((exp, index) => (
              <div key={index} className="ap-exp-item">
                <Tilt>
                  <div className="ap-exp-icon">
                    <FaBriefcase size={40} />
                  </div>
                </Tilt>
                <div className="ap-exp-content">
                  <h3>{exp.role}</h3>
                  <p className="ap-exp-company">{exp.company}</p>
                  <p className="ap-exp-date">{exp.date} - {exp.location}</p>
                  <p>{exp.description}</p>
                  <p><strong>Skills:</strong> {exp.skills.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES FLIP CARD CAROUSEL SECTION */}
      <section className="ap-core-values-section">
        <h2 className="ap-core-values-title">My Core Values as a Designer & Developer</h2>
        <p className="ap-core-values-subtitle">
          As a digital designer and developer, I strive to embody certain values that guide my work and fuel my creativity. These values are at the heart of everything I do, whether I’m building a sleek portfolio, developing an engaging app, or crafting user-centered designs.
        </p>
        <div className="ap-core-value-slider">
          <Tilt options={{ max: 10, scale: 1.02 }}>
            <div className="ap-core-value-card" ref={coreValuesContainerRef}>
              <div className="ap-core-value-inner">
                <div className="ap-core-value-front">
                  <h3>{profileData.coreValues[currentCoreIndex].front}</h3>
                </div>
                <div className="ap-core-value-back">
                  <p>{profileData.coreValues[currentCoreIndex].back}</p>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
        <p className="ap-core-values-conclusion">
          These values shape my approach to every project I take on, driving me to create experiences that are not only visually stunning but also intuitive and effective.
        </p>
      </section>

      {/* FUN FACTS SECTION */}
      <section className="ap-fun-fact-section">
        <h2 className="ap-section-title">Fun Facts About Me</h2>
        <div className="ap-fun-fact-container">
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
      </section>

      {/* SKILLS SECTION */}
      <section className="ap-skills-section">
        <h2 className="ap-section-title">Skills</h2>
        <div className="ap-skills-container">
          {profileData.skills.map((skill, index) => (
            <Tilt key={index} options={{ max: 25 }}>
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