import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <h1 className="title"># About me</h1>
      <div className="grid-container">
        <section className="sobre-mi">
          <h2>Sobre mi</h2>
          <p>Lorem ipsum dolor sit amet...</p>
        </section>

        <section className="herramientas">
          <h2>Herramientas</h2>
          <ul className="tool-grid">
            <li>
              <div className="icono"></div> Lorem ipsum
            </li>
            <li>
              <div className="icono"></div> Lorem ipsum
            </li>
            <li>
              <div className="icono"></div> Lorem ipsum
            </li>
            <li>
              <div className="icono"></div> Lorem ipsum
            </li>
            <li>
              <div className="icono"></div> Lorem ipsum
            </li>
            <li>
              <div className="icono"></div> Lorem ipsum
            </li>
            <li>
              <div className="icono"></div> Lorem ipsum
            </li>
            <li>
              <div className="icono"></div> Lorem ipsum
            </li>
            <li>
              <div className="icono"></div> Lorem ipsum
            </li>
          </ul>
        </section>

        <section className="certificaciones">
          <h2>Certificaciones</h2>
          <p>Lorem ipsum dolor sit amet – Lorem ipsum</p>
          <p>Lorem ipsum dolor sit amet – Lorem ipsum</p>
          <p>Lorem ipsum dolor sit amet – Lorem ipsum</p>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
