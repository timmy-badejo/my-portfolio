import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("timmybad-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("timmybad-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme}>
      <span>{theme === "dark" ? "☀" : "☾"}</span>
      <p>{theme === "dark" ? "Light" : "Dark"}</p>
    </button>
  );
}
