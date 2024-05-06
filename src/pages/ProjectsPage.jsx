import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import projetsListe from "../js/projets";
function ProjectsPage() {
  return (
    <>
      <h1>Mes projets</h1>
      <ProjectList projets={projetsListe} />
    </>
  );
}

export default ProjectsPage;
