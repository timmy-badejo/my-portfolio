import React, { useState, useEffect } from 'react';
import './AboutMePage.css'; // Make sure to create a new CSS file for styling

const AboutMePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
  const [shuffleOrder, setShuffleOrder] = useState([0, 1]);

  // Values for carousel
  const values = ["Collaboration", "Quality", "Integrity", "Compassion"];
  const skills = ["User Interface Design", "JavaScript", "Digital Photography", "HTML/CSS", "React.js"];

  // Profile data
  useEffect(() => {
    setTimeout(() => {
      setProfileData({
        name: "Timilehin Yomi-Badejo",
        title: "Media Designer/Web Developer | Eager to Learn and Grow",
        bio: `Creative and disciplined graphic designer who collaborates with private and commercial clients to discover their styles, create breath-taking designs, and pay attention to clients’ natural preferences, to achieve bespoke design. I am passionate about translating ideas into visually compelling designs and seek entry-level positions to gain valuable experience.`,
        experience: [
          {
            role: "Graphic Designer",
            company: "Winner's Chapel International, Vancouver",
            duration: "Jul 2023 - Present",
            description: "Actively contribute to the online presence of Winners Chapel, providing design for marketing campaigns and visual content."
          },
          {
            role: "Freelance Graphic Designer",
            company: "Freelance",
            duration: "Sep 2020 - Present",
            description: "Successfully executed diverse design projects, including logos, branding, and promotional materials."
          },
          {
            role: "Social Media Designer",
            company: "JECO-EDUCATION",
            duration: "Feb 2023 - Sep 2023",
            description: "Contributed to Jeco Education's brand by designing engaging visuals for their Instagram page."
          }
        ],
        education: [
          {
            degree: "Diploma in New Media Design and Web Development",
            school: "British Columbia Institute of Technology",
            duration: "Jan 2024 - Jul 2025",
            details: "Actively pursuing an Interactive Design Program to enhance skills and stay at the forefront of industry trends."
          },
          {
            degree: "Certificate in Communication Design Essentials",
            school: "British Columbia Institute of Technology",
            duration: "Sep 2020 - Sep 2021",
            details: "Focused on Design and Arts, enhancing skills in visual design and communication."
          }
        ]
      });
    }, 2000);

    // Change value every 4 seconds for carousel
    const valueInterval = setInterval(() => {
      setCurrentValueIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 4000);

    // Shuffle the cards every 10 seconds
    const shuffleInterval = setInterval(() => {
      setShuffleOrder((prevOrder) => {
        // Shuffle the order of Experience and Education sections
        return prevOrder[0] === 0 ? [1, 0] : [0, 1];
      });
    }, 10000);

    return () => {
      clearInterval(valueInterval);
      clearInterval(shuffleInterval);
    };
  }, []);

  return (
    <div className="about-me-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1>Welcome to My World of Creativity</h1>
          <p>Bringing innovative digital experiences to life through design and development.</p>
        </div>
      </section>

      {/* Profile Content */}
      <section className="profile-content">
        <div className="profile-intro">
          {profileData ? (
            <>
              <h2>{profileData.name}</h2>
              <h3>{profileData.title}</h3>
              <p>{profileData.bio}</p>

              {/* Shuffle Cards: Experience and Education */}
              <div className="cards-container">
                <div className={`card ${shuffleOrder[0] === 0 ? 'active' : ''}`}>
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

                <div className={`card ${shuffleOrder[1] === 0 ? 'active' : ''}`}>
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
                <div className="skills-carousel">
                  {skills.map((skill, index) => (
                    <div key={index} className="carousel-item">
                      <p>{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Values Section */}
              <div className="values-section">
                <h3>My Values</h3>
                {/* Wheel Carousel for Values */}
                <div className="carousel">
                  {values.map((value, index) => (
                    <div
                      className={`carousel-card ${
                        index === currentValueIndex ? 'active' : ''
                      }`}
                      key={index}
                    >
                      <h4>{value}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p>Loading Profile...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;
