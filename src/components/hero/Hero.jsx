import "./Hero.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Hero = () => {
  return (
    <div id="hero">
      <p className="heroBackground">Portfolio</p>
      <div>
        <h1 className="heroName">
          Lucía <br />
          &nbsp;&nbsp;&nbsp;Palazzini
        </h1>
        <p className="subtitle">
          FrontEnd Developer && <br />
          QA Tester
        </p>
        <div className="heroButtons">
          <a
            href="https://www.linkedin.com/in/lucia-palazzini/"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/lulipalazzini" target="_blank">
            <i className="bi bi-github"></i>
          </a>
          <a href="mailto:lulipalazzini4@gmail.com">
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
