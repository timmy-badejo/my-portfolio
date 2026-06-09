import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaFileDownload, FaTimes } from "react-icons/fa";
import timmyBadLogo from "../assets/optimized/timmybadlogo-mobile.png";
import "./Header.css";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/studio-system", label: "Studio" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <Link to="/" className="site-header__brand" aria-label="Timmy Bad home" onClick={closeMenu}>
        <img src={timmyBadLogo} alt="Timmy Bad logo" width="44" height="34" />
        <span className="site-header__brand-text">
          <span>timmy</span>
          <span>bad</span>
        </span>
      </Link>

      <button
        type="button"
        className="site-header__menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav
        id="site-navigation"
        className={`site-header__nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `site-header__link ${isActive ? "is-active" : ""}`
            }
            onClick={closeMenu}
          >
            {item.label}
          </NavLink>
        ))}

        <div className="site-header__downloads">
          <a
            href="/timmy-badejo-resume.pdf"
            download="Timmy_Badejo_Resume.pdf"
            className="site-header__download"
            onClick={closeMenu}
          >
            <FaFileDownload />
            <span>Resume</span>
          </a>
          <a
            href="/timmy-badejo-cv.pdf"
            download="Timmy_Badejo_CV.pdf"
            className="site-header__download site-header__download--ghost"
            onClick={closeMenu}
          >
            <FaFileDownload />
            <span>CV</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
