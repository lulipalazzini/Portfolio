import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <div className="navContainer">
        <div className="logo">
          <i className="bi bi-stars"></i>
        </div>

        <button className="hamburger" onClick={toggleMobileMenu}>
          <i className="bi bi-list"></i>
        </button>

        <ul className={`navLinks ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#hero" onClick={toggleMobileMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMobileMenu}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#aboutMe" onClick={toggleMobileMenu}>
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMobileMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
