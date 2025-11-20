import "./Projects.css";
import projects from "../../data/projects.json";

const Projects = () => {
  const renderProjectCards = projects.map((project, index) => (
    <div
      key={project.id}
      className="card"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="cardContent">
        <p className="projectNumber">0{index + 1}</p>
        <h3 className="cardName">{project.projectName}</h3>
        <p className="cardStack">{project.projectStack}</p>
        <p className="cardDesc">{project.projectDescription}</p>
        <div className="cardLinkWrapper">
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cardLink"
          >
            Ver proyecto en GitHub <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
      </div>
      <div className="cardImageWrapper">
        <img
          src={project.imageUrl}
          alt={project.projectName}
          className="cardImage"
        />
      </div>
    </div>
  ));

  return (
    <div id="projects">
      <h1 className="title"># Works && Projects</h1>
      <div className="projectContainer">{renderProjectCards}</div>
    </div>
  );
};

export default Projects;
