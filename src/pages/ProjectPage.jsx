import { useParams } from "react-router-dom";
import projects from "../js/projets";

function ProjectPage() {
  const { id } = useParams();
  const ChosenProject = projects.filter(
    (project) => project.id === parseInt(id)
  );

  return (
    <section className="project-pagecomponent">
      <h1>{ChosenProject[0].title}</h1>
      <img src={ChosenProject[0].image} alt="image du projet" />
      <p>{ChosenProject[0].description}</p>
      <a target="blank" href={ChosenProject[0].linkGitHub}>
        Lien GitHub
      </a>
      <a target="blank" href={ChosenProject[0].linkDeploy}>
        Lien du site
      </a>
    </section>
  );
}

export default ProjectPage;
