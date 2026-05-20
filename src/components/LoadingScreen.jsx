import React from "react";
import "./LoadingScreen.css";
import timmyBadLogo from "../assets/timmybadlogo.png";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img src={timmyBadLogo} alt="Timmybad logo" />
      <p>Building experience...</p>
      <span></span>
    </div>
  );
}
