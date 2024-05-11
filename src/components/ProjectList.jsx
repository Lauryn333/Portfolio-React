import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

function ProjectList({ projets }) {
  return (
    <div className="project-list">
      {projets.map((projet) => (
        <Link key={projet.id} to={`/projectPage/${projet.id}`}>
          <ProjectCard key={projet.id} projet={projet} />
        </Link>
      ))}
    </div>
  );
}
export default ProjectList;
