import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";
import timmyBadLogo from "../assets/timmybadlogo.png";

const LOADING_DURATION = 3400;
const FADE_DURATION = 600;

export default function LoadingScreen({ onComplete = () => {} }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let completeTimer;

    const timer = setTimeout(() => {
      setHide(true);

      completeTimer = setTimeout(() => {
        onComplete();
      }, FADE_DURATION);
    }, LOADING_DURATION);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`loading-screen ${hide ? "hide" : ""}`}>
      <div className="loading-inner">
        <img src={timmyBadLogo} alt="Timmybad logo" />
        <p>Building experience...</p>
        <span></span>
      </div>
    </div>
  );
}
