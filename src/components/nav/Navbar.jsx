import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
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

  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <ul className="navList">
        <div className="logo">
          <i className="bi bi-stars"></i>
        </div>
        <div className="navLinks">
          <li>
            <a href="#hero">Inicio</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#aboutMe">Sobre mí</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
