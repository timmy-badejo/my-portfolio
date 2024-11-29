import React, { useState, useEffect } from 'react';

const AboutMePage = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Simulating fetching data for profile
    setTimeout(() => {
      setProfileData({
        name: "Timmy",
        bio: "I'm Timmy, a passionate digital designer and developer.",
        values: ["Collaboration", "Quality", "Integrity", "Compassion"],
      });
    }, 2000);
  }, []);

  return (
    <div className="about-me-page">
      <h2>About Me</h2>
      {profileData ? (
        <>
          <p>{profileData.bio}</p>
          <div className="values">
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
      <a href="/projects" className="button">View My Projects</a>
    </div>
  );
};

export default AboutMePage;


