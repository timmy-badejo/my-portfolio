import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ThemeToggle.css";

const validThemes = ["dark", "light"];

export default function ThemeToggle() {
  const location = useLocation();

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("timmybad-theme");
    return validThemes.includes(saved) ? saved : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("timmybad-theme", theme);
  }, [theme]);

  const isBcrpa = location.pathname.startsWith("/bcrpa");
  const isMelody = location.pathname === "/projects/2";

  const label = useMemo(() => {
    if (isBcrpa) return theme === "dark" ? "BCRPA Light" : "BCRPA Dark";
    if (isMelody) return theme === "dark" ? "Melody Light" : "Melody Dark";
    return theme === "dark" ? "Light" : "Dark";
  }, [isBcrpa, isMelody, theme]);

  return (
    <button
      className={[
        "theme-toggle",
        isBcrpa ? "theme-toggle-bcrpa" : "",
        isMelody ? "theme-toggle-melody" : "",
      ].join(" ").trim()}
      type="button"
      onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      aria-label={`Switch to ${label} mode`}
    >
      <span>{theme === "dark" ? "☀" : "☾"}</span>
      <p>{label}</p>
    </button>
  );
}
