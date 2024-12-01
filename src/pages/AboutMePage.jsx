import React, { useState, useEffect } from 'react';
import './AboutMePage.css';

const AboutMePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [currentValueIndex, setCurrentValueIndex] = useState(0);

  const values = ["Collaboration", "Quality", "Integrity", "Compassion"];

  useEffect(() => {
    // Simulating fetching data for profile
    setTimeout(() => {
      setProfileData({
        name: "Timmy",
        bio: "I'm Timmy, a passionate digital designer and developer with a background in New Media Design and Web Development.",
      });
    }, 2000);

    // Change value every 4 seconds
    const valueInterval = setInterval(() => {
      setCurrentValueIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 4000);

    return () => clearInterval(valueInterval);
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
              <p>{profileData.bio}</p>
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
