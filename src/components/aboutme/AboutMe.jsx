import { useEffect, useRef } from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = aboutMeRef.current.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div id="aboutMe" ref={aboutMeRef}>
      <h1 className="title"># About me</h1>
      <div className="grid-container">
        <section className="sobre-mi">
          <h2 className="cardsTitle">
            <i className="bi bi-stars"></i>
            Quién soy
          </h2>
          <p className="aboutMeParagraph">
            Soy Lucía, una estudiante de programación, creativa, adaptativa y
            comunicativa. Me gustan los desafíos y creo que siempre se trabaja
            mejor en equipo. <br />
            Tengo experiencia con tecnologías como{" "}
            <b>React.js, Node.js, Python, SQL y WordPress</b>, además de un buen
            dominio de <b>HTML y CSS</b>, lo que me permite adaptarme a
            distintos tipos de proyectos tanto en frontend como backend. También
            me desempeño como <b>tester QA manual</b>, lo que me permite tener
            una mirada más amplia sobre la calidad del software. <br />
            Tengo un buen nivel de inglés y estoy comprometida a mantenerme
            actualizada con las tecnologías que se usen en el entorno laboral.{" "}
            <br />
            Me motiva seguir aprendiendo y crecer profesionalmente para
            construir una carrera en el mundo IT.
          </p>
        </section>

        <section className="herramientas">
          <h2 className="cardsTitle">
            <i className="bi bi-stars"></i>
            Herramientas
          </h2>
          <ul className="tool-grid">
            <li>React.js</li>
            <li>JavaScript</li>
            <li>Wordpress</li>
            <li>.NET</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>Postman</li>
            <li>Bruno</li>
            <li>Python</li>
            <li>SQL</li>
            <li>SQLite</li>
            <li>SQL Server</li>
            <li>Firebase</li>
            <li>Diseño de Bases de Datos</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Figma</li>
            <li>Metodologías Ágiles</li>
            <li>Scrum</li>
            <li>Kanban</li>
            <li>Jira</li>
          </ul>
        </section>

        <section className="certificaciones">
          <h2 className="cardsTitle">
            <i className="bi bi-stars"></i>
            Certificaciones
          </h2>
          <div className="certificationContainer">
            <p className="certificationParagraph">
              Desarrollo FrontEnd - CoderHouse
            </p>
            <p className="certificationParagraph">
              Testing QA Manual - CoderHouse
            </p>
            <p className="certificationParagraph">
              Oracle Next Education F2 T6 Back-end (Java) - Oracle
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
