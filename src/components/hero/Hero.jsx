import "./Hero.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Hero = () => {
  return (
    <div id="hero">
      <p className="heroBackground">Portfolio</p>

      {/* Carousel flotante */}
      <div className="floating-carousel">
        <div className="carousel-track">
          <span className="carousel-item">Estudiando Docker</span>
          <span className="carousel-item">
            Explorando el mundo del Project Management
          </span>
          <span className="carousel-item">Aprendiendo TypeScript</span>
          <span className="carousel-item">Estudiando Docker</span>
          <span className="carousel-item">
            Explorando el mundo del Project Management
          </span>
          <span className="carousel-item">Aprendiendo TypeScript</span>
        </div>
      </div>

      <div>
        <h1 className="heroName">
          Lucía <br />
          &nbsp;&nbsp;&nbsp;Palazzini
        </h1>
        <p className="subtitle">
          FullStack Developer && <br />
          QA Tester
        </p>
        <div className="heroButtons">
          <a
            href="https://www.linkedin.com/in/lucia-palazzini/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/lulipalazzini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=lulipalazzini4@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar correo"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
      <img
        src="/images/fotoPortfolio.png"
        alt="Foto Lucia"
        className="heroImg"
      />
    </div>
  );
};

export default Hero;
