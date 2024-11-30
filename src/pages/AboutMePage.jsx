import React, { useState, useEffect } from 'react';
import './AboutMePage.css';

const AboutMePage = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Simulating fetching data for profile
    setTimeout(() => {
      setProfileData({
        name: "Timmy",
        bio: "I'm Timmy, a passionate digital designer and developer with a background in New Media Design and Web Development.",
        values: ["Collaboration", "Quality", "Integrity", "Compassion"],
      });
    }, 2000);
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

      {/* Main Content Section */}
      <section className="profile-content">
        <div className="profile-intro">
          {profileData ? (
            <>
              <p>{profileData.bio}</p>
              <div className="values-section">
                <h3>My Values</h3>
                <ul>
                  {profileData.values.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p>Loading Profile...</p>
          )}
        </div>

        {/* Featured Section */}
        <section className="featured-section">
          <h3>What I Bring to the Table</h3>
          <div className="featured-cards">
            <div className="card">
              <h4>Design Services</h4>
              <p>Crafting seamless, user-friendly designs that delight and engage.</p>
            </div>
            <div className="card">
              <h4>Development Services</h4>
              <p>Building responsive, scalable, and functional websites and applications.</p>
            </div>
            <div className="card">
              <h4>Brand Identity</h4>
              <p>Creating visually striking brands that reflect the essence of your business.</p>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="connect-section">
          <h3>Let's Connect and Create</h3>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Your name" />
            <label>Email</label>
            <input type="email" placeholder="Your email" />
            <button type="submit">Next</button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default AboutMePage;



