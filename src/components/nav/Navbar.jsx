import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navList">
        <img
          src="../../../public/images/equis.png"
          alt="Logo"
          className="logo"
        />
        <div className="navLinks">
          <li>Opcion 1</li>
          <li>Opcion 2</li>
          <li>Opcion 3</li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
