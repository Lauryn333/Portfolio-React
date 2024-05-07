import { useParams } from "react-router-dom";
import projects from "../js/projets";

function ProjectPage() {
  const { id } = useParams();
  const ChosenProject = projects.find((project) => project.id === parseInt(id));

  return (
    <section className="project-pagecomponent">
      <h1>ProjectPage {id} </h1>

      <p>Description: {ChosenProject.description}</p>
    </section>
  );
}

export default ProjectPage;
