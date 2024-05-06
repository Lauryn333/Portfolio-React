import { useParams } from "react-router-dom";
import projets from "../js/projets";

function ProjectPage() {
  const { id } = useParams();
  const ChosenProject = projets.find((project) => project.id === parseInt(id));

  return (
    <section className="ProjectPageComponent">
      <h1>ProjectPage {id} </h1>

      <p>Description: {ChosenProject.description}</p>
    </section>
  );
}

export default ProjectPage;
