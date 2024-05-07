import { useParams } from "react-router-dom";
import projects from "../js/projets";

function ProjectPage() {
  const { id } = useParams();
  const ChosenProject = projects.filter(
    (project) => project.id === parseInt(id)
  );

  return (
    <section className="project-pagecomponent">
      <h1>ProjectPage {id} </h1>
      <h2>{ChosenProject[0].title}</h2>
      <img src={ChosenProject[0].image} alt="" />
      <p>Description: {ChosenProject[0].description}</p>
      <a target="blank" href={ChosenProject[0].link}>
        Lien GitHub
      </a>
    </section>
  );
}

export default ProjectPage;
