import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navList">
        <div className="logo">
          <i className="bi bi-stars"></i>
        </div>
        {/* <img
          src="../../../public/images/equis.png"
          alt="Logo"
          className="logo"
        /> */}
        <div className="navLinks">
          <li>
            <a href="#hero">Inicio</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#aboutMe">Sobre mi</a>
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
