// LoadingScreen.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';  // Import GSAP for animation

const LoadingScreen = ({ onAnimationComplete }) => {
  useEffect(() => {
    // GSAP animation for the "TC" text
    gsap.fromTo(
      '.tc-text',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: 'bounce.out' }
    );

    // Shake and float animation
    gsap.to('.tc-text', {
      scale: 1.2,
      rotation: 360,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'easeInOut',
    });

    // After 2 seconds (adjust timing as needed), fade out the loading screen
    setTimeout(() => {
      gsap.to('.loading-screen', {
        opacity: 0,
        duration: 1,
        onComplete: onAnimationComplete,  // Callback to indicate the animation is complete
      });
    }, 2000); // Set the timing to match the loading screen duration
  }, [onAnimationComplete]);

  return (
    <div className="loading-screen">
      <div className="tc-text">TC</div>
    </div>
  );
};

export default LoadingScreen;

