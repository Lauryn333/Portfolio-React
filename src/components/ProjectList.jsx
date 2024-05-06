import ProjectCard from "./ProjectCard";

function ProjectList({ projets }) {
  return (
    <>
      {projets.map((projet) => (
        <ProjectCard key={projet.id} projet={projet} />
      ))}
    </>
  );
}
export default ProjectList;
