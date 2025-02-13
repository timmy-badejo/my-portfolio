import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import profileImage from '../assests/profilei_mage.jpg';
import graphicSVG from '../assests/graphic.svg';
import brandingSVG from '../assests/branding.svg';
import SkillsSection from '../components/SkillsSection';
import './AboutMePage.css';



const AboutMePage = () => {
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  const profileData = {
    name: "Timilehin Yomi-Badejo",
    title: "New Media Designer and Web Developer",
    bio: `Creative and disciplined graphic designer who collaborates with private and commercial clients to discover their styles, create breathtaking designs, and pay attention to clients’ natural preferences to achieve bespoke design.`,
    experience: [
      {
        role: "Graphic Designer",
        company: "Winner's Chapel International, Vancouver",
        duration: "Jul 2023 - Present",
        description: "Provided visual design for marketing campaigns and social media.",
      },
    ],
    education: [
      {
        degree: "Diploma in New Media Design",
        school: "BCIT",
        duration: "Jan 2024 - Jul 2025",
        details: "Enhanced skills in modern design and web trends.",
      },
    ],
    skills: ["UI Design", "JavaScript", "Photography", "HTML/CSS", "React.js"],
    values: ["Collaboration", "Quality", "Integrity", "Compassion"],
  };

  useEffect(() => {
    // Animate name and title
    gsap.timeline()
      .fromTo(
        nameRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 2, ease: "power4.out" }
      )
      .to(nameRef.current, {
        text: "Timilehin Yomi-Badejo",
        duration: 2,
        repeat: -1,
        yoyo: true,
      })
      .fromTo(
        titleRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }
      );

    // Animate floating circles
    gsap.to('.circle', {
      x: "random(-50, 50)",
      y: "random(-50, 50)",
      rotation: "random(-45, 45)",
      duration: "random(4, 8)",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Carousel for values
    const valueInterval = setInterval(() => {
      setCurrentValueIndex((prevIndex) => (prevIndex + 1) % profileData.values.length);
    }, 4000);

    return () => clearInterval(valueInterval);
  }, [profileData.values.length]);

  return (
    <div className="about-me-page">
      {/* Floating Circles */}
      <div className="floating-circles">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="circle"
            style={{
              backgroundColor: index % 2 === 0 ? "#310000" : "#BCA58E",
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 ref={nameRef}>{profileData.name}</h1>
          <p ref={titleRef}>{profileData.title}</p>
          <img src={profileImage} alt="Profile" className="profile-img" />
        </div>
      </section>

      {/* SVG Section */}
      <div className="svg-section">
        <img src={graphicSVG} alt="Graphic Design" className="svg-graphic" />
        <img src={brandingSVG} alt="Branding Design" className="svg-graphic" />
      </div>

      {/* Experience and Education */}
      <div className="cards-container">
        <div className="card">
          <h3>Experience</h3>
          {profileData.experience.map((job, index) => (
            <div key={index}>
              <h4>{job.role}</h4>
              <p>{job.company}</p>
              <span>{job.duration}</span>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
        <div className="card">
          <h3>Education</h3>
          {profileData.education.map((edu, index) => (
            <div key={index}>
              <h4>{edu.degree}</h4>
              <p>{edu.school}</p>
              <span>{edu.duration}</span>
              <p>{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Skills Section */}
      <section className="skills">
        <SkillsSection />
      </section>

      {/* Values Section */}
      <div className="values-section">
        <h3>My Values</h3>
        <div className="carousel">
          {profileData.values.map((value, index) => (
            <div
              className={`carousel-card ${index === currentValueIndex ? 'active' : ''}`}
              key={index}
            >
              <h4>{value}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;









