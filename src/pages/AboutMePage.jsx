import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap'; // Import GSAP for animations
import './AboutMePage.css'; // Import the CSS file for styling

const AboutMePage = () => {
  const [profileData, setProfileData] = useState(null); // State for profile data
  const [currentValueIndex, setCurrentValueIndex] = useState(0); // Current value for "My Values" section
  const nameRef = useRef(null); // Reference for animated name
  const titleRef = useRef(null); // Reference for animated title

  // Hardcoded values for "Skills" and "Values"
  const skills = ["UI Design", "JavaScript", "Photography", "HTML/CSS", "React.js"];
  const values = ["Collaboration", "Quality", "Integrity", "Compassion"];

  useEffect(() => {
    // Simulate loading profile data
    setTimeout(() => {
      setProfileData({
        name: "Timilehin Yomi-Badejo",
        title: "Media Designer/Web Developer | Eager to Learn and Grow",
        bio: `Creative and disciplined graphic designer who collaborates with private and commercial clients to discover their styles, create breathtaking designs, and pay attention to clients’ natural preferences, to achieve bespoke design.`,
        experience: [
          {
            role: "Graphic Designer",
            company: "Winner's Chapel International, Vancouver",
            duration: "Jul 2023 - Present",
            description: "Provided visual design for marketing campaigns and social media."
          },
          {
            role: "Freelance Graphic Designer",
            company: "Freelance",
            duration: "Sep 2020 - Present",
            description: "Designed logos, branding, and promotional materials."
          }
        ],
        education: [
          {
            degree: "Diploma in New Media Design",
            school: "BCIT",
            duration: "Jan 2024 - Jul 2025",
            details: "Enhanced skills in modern design and web trends."
          }
        ]
      });

      // Kinetic Typography Animation
      const timeline = gsap.timeline();
      timeline
        .fromTo(
          nameRef.current, // Animates the name
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1.5, ease: "bounce.out" }
        )
        .to(nameRef.current, {
          letterSpacing: "5px",
          duration: 0.5,
          repeat: 2,
          yoyo: true
        })
        .fromTo(
          titleRef.current, // Animates the title
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" },
          "-=1"
        );
    }, 2000);

    // Carousel for "My Values" section
    const valueInterval = setInterval(() => {
      setCurrentValueIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 4000);

    // Floating Circles Animation
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle) => {
      const xRange = Math.random() * 100 - 50; // Random range for X movement
      const yRange = Math.random() * 100 - 50; // Random range for Y movement
      const duration = Math.random() * 5 + 3; // Random duration between 3s and 8s

      gsap.to(circle, {
        x: xRange,
        y: yRange,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });

    return () => clearInterval(valueInterval); // Cleanup interval
  }, []);

  return (
    <div className="about-me-page">
      {/* Floating Circles */}
      <div className="floating-circles">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="circle"
            style={{
              backgroundColor:
                index % 3 === 0
                  ? '#310000'
                  : index % 3 === 1
                  ? '#bca58e'
                  : '#1cb5e0',
              width: `${Math.random() * 100 + 20}px`, // Random size between 20px and 120px
              height: `${Math.random() * 100 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 ref={nameRef}>{profileData?.name || "Loading..."}</h1>
          <p ref={titleRef}>{profileData?.title || "Please wait..."}</p>
        </div>
      </section>

      {/* Profile Content */}
      <section className="profile-content">
        {profileData && (
          <>
            {/* Experience and Education Cards */}
            <div className="cards-container">
              <div className="card">
                <h3>Experience</h3>
                {profileData.experience.map((job, index) => (
                  <div key={index} className="job">
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
                  <div key={index} className="education">
                    <h4>{edu.degree}</h4>
                    <p>{edu.school}</p>
                    <span>{edu.duration}</span>
                    <p>{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="skills-section">
              <h3>Skills</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            {/* Values Section */}
            <div className="values-section">
              <h3>My Values</h3>
              <div className="carousel">
                {values.map((value, index) => (
                  <div
                    className={`carousel-card ${index === currentValueIndex ? 'active' : ''}`}
                    key={index}
                  >
                    <h4>{value}</h4>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default AboutMePage;






