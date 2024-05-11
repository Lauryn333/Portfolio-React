import "../scss/projects.scss";

function ProjectCard({ projet }) {
  return (
    <div className="project-card">
      <h1>{projet.title}</h1>
      <img src={projet.image} alt="image du projet" />
      <p>{projet.description}</p>
    </div>
  );
}

export default ProjectCard;
