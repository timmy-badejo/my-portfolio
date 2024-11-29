import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const LandingPage = () => {
  const [showGreeting, setShowGreeting] = useState(false);

  // Use GSAP for title animation when component mounts
  useEffect(() => {
    gsap.from('.title', { opacity: 0, duration: 1, y: -50 });  // GSAP animation for title

    // Show the greeting message after 2 seconds
    setTimeout(() => {
      setShowGreeting(true);
    }, 2000);
  }, []);

  return (
    <div className="landing-page">
      <h1 className="title">Welcome to My Portfolio</h1>
      
      {showGreeting ? (
        <p>Digital Designer and Developer</p>
      ) : (
        <p>Loading...</p>  // Show loading message until greeting appears
      )}

      <p>Bringing ideas to life with creativity and technology.</p>
      <a href="/about" className="button">Learn More About Me</a>
    </div>
  );
};

export default LandingPage;


