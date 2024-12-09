import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import profileImage from '../assests/profilei_mage.jpg';
import './AboutMeSection.css';

const AboutMeSection = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);

  useEffect(() => {
    // GSAP Animation to fade in and move the heading and paragraph
    gsap.from('.about-me-section h2', { opacity: 0, duration: 1, y: -50 });

    // Animation for floating shapes
    gsap.to('.shape', {
      x: 100,
      y: 30,
      rotation: 360,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'easeInOut',
    });

    // Change paragraphs every 8 seconds
    const paragraphInterval = setInterval(() => {
      setCurrentParagraph((prevIndex) => (prevIndex + 1) % 4);
    }, 8000);

    return () => clearInterval(paragraphInterval); // Clear interval on component unmount
  }, []);

  return (
    <section className="about-me-section">
      <h2>About & Beyond</h2>

      {/* Profile Image */}
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>

      {/* About Me Paragraphs */}
      <div className="about-text">
        <p className={currentParagraph === 0 ? 'active' : ''}>
          I’m Timmy Badejo, a passionate digital designer and developer with a keen eye for creativity and a deep understanding of technology. With a background in New Media Design and Web Development, I bring a balance of design aesthetics and technical proficiency to every project I undertake. My goal is to transform digital concepts into functional, user-friendly designs that stand out.
        </p>
        <p className={currentParagraph === 1 ? 'active' : ''}>
          My passion lies in exploring the possibilities of interactive design and web design. I’m driven by the challenge of creating experiences that not only look stunning but also engage users on a deeper level. Whether it’s crafting immersive animations, seamless navigation, or responsive layouts, I aim to design websites and applications that feel alive, intuitive, and memorable. By leveraging the latest design principles and technologies, I strive to push the boundaries of digital experiences.
        </p>
        <p className={currentParagraph === 2 ? 'active' : ''}>
          As I continue to grow as a digital designer and developer, I’m excited to dive deeper into new media design and development, exploring innovative solutions that merge creativity with functionality. I believe that every project is an opportunity to learn and innovate, and I’m always eager to tackle complex challenges that expand my skills and broaden my perspective. From ideation to implementation, I enjoy the entire process of bringing ideas to life through design and code.
        </p>
        <p className={currentParagraph === 3 ? 'active' : ''}>
          Collaboration is at the heart of my approach. I’m passionate about working with others to create beautiful, impactful designs and seamless development projects. Whether it’s a client, a team, or other creatives, I believe that great design and development happen when ideas are shared, refined, and executed with care. My goal is to help businesses and individuals bring their visions to life, creating digital solutions that not only meet their needs but also inspire their audiences.
        </p>
      </div>

      {/* Floating shapes */}
      <div className="shapes-container">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
      </div>
    </section>
  );
};

export default AboutMeSection;





