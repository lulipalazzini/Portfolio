import "./Hero.css";

const Hero = () => {
  return (
    <div id="hero">
      <div>
        <h1>
          Lucia <br />
          &nbsp;Palazzini
        </h1>
        <p className="subtitle">
          FrontEnd Developer && <br />
          QA Tester
        </p>
      </div>
      <img
        src="../../../public/images/calaveraPerroRobot.png"
        alt="Calavera perro robot"
        className="perroRobot"
      />
    </div>
  );
};

export default Hero;
