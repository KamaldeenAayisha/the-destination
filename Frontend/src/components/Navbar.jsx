import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../assets/images/logo.png.webp";
import "../css/Navbar.css";

function Navbar() {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  const previousScrollPosition = useRef(0);

  const isBookingPage = location.pathname === "/booking";

  const getLinkClass = ({ isActive }) =>
    isActive ? "navbar-link active" : "navbar-link";

  const getBookingClass = ({ isActive }) =>
    isActive ? "navbar-book-link active" : "navbar-book-link";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = () => {
    setIsMenuOpen(false);
    setIsNavbarVisible(true);
  };

  const toggleMenu = () => {
    setIsNavbarVisible(true);
    setIsMenuOpen((previousState) => !previousState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const previousPosition = previousScrollPosition.current;
      const scrollDifference =
        currentScrollPosition - previousPosition;

      setIsAtTop(currentScrollPosition < 20);

      // Always visible near the top
      if (currentScrollPosition < 120) {
        setIsNavbarVisible(true);
      }
      // Hide while scrolling down
      else if (scrollDifference > 8 && !isMenuOpen) {
        setIsNavbarVisible(false);
      }
      // Show while scrolling upward
      else if (scrollDifference < -5) {
        setIsNavbarVisible(true);
      }

      previousScrollPosition.current = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  // Scroll to the top after changing pages.
  // No React state is changed directly inside this effect.
  useEffect(() => {
    previousScrollPosition.current = 0;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  // Prevent page scrolling when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close mobile menu using Escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const getNavbarBackgroundClass = () => {
    if (isBookingPage) {
      return "navbar-booking-page";
    }

    if (isAtTop && !isMenuOpen) {
      return "navbar-transparent";
    }

    return "navbar-floating";
  };

  return (
    <header
      className={`site-navbar ${getNavbarBackgroundClass()} ${
        isNavbarVisible || isMenuOpen
          ? "navbar-visible"
          : "navbar-hidden"
      }`}
    >
      <NavLink
        to="/About"
        className="navbar-brand"
        onClick={handleNavigation}
        aria-label="The Destination home page"
      >
        <img
          src={logo}
          alt="The Destination logo"
          className="navbar-logo"
        />

        <div className="navbar-brand-content">
          <strong>THE DESTINATION</strong>
          <span>VISUAL STORYTELLING STUDIO</span>
        </div>
      </NavLink>

      <nav
        id="main-navigation"
        className={`navbar-navigation ${
          isMenuOpen ? "navbar-navigation-open" : ""
        }`}
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          className={getLinkClass}
          onClick={handleNavigation}
        >
          Home
        </NavLink>

        <NavLink
          to="/services"
          className={getLinkClass}
          onClick={handleNavigation}
        >
          Services
        </NavLink>

        <NavLink
          to="/portfolio"
          className={getLinkClass}
          onClick={handleNavigation}
        >
          Portfolio
        </NavLink>

        <NavLink
          to="/about"
          className={getLinkClass}
          onClick={handleNavigation}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={getLinkClass}
          onClick={handleNavigation}
        >
          Contact
        </NavLink>

        <NavLink
          to="/booking"
          className={getBookingClass}
          onClick={handleNavigation}
        >
          Book a Shoot
        </NavLink>
      </nav>

      <button
        type="button"
        className={`navbar-menu-button ${
          isMenuOpen ? "navbar-menu-button-open" : ""
        }`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isMenuOpen && (
        <button
          type="button"
          className="navbar-mobile-overlay"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        />
      )}
    </header>
  );
}

export default Navbar;