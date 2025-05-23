import "./Projects.css";
import projects from "../../data/projects.json";

const Projects = () => {
  const renderProjectCards = projects.map((project) => (
    <div key={project.id} className="card">
      <img
        src={project.imageUrl}
        alt={project.projectName}
        className="cardImage"
      />
      <div>
        <h3 className="cardName">{project.projectName}</h3>
        <p className="cardDesc">{project.projectDescription}</p>
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cardLink"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  ));

  return (
    <div className="projects">
      <h1 className="title"># Works && Projects</h1>
      <div className="projectContainer">{renderProjectCards}</div>
    </div>
  );
};

export default Projects;
