import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import projetsListe from "../js/projets";
function ProjectsPage() {
  return (
    <div className="projects-page">
      <h1>Mes projets</h1>
      <ProjectList projets={projetsListe} />
    </div>
  );
}

export default ProjectsPage;
