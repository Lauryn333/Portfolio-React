function ProjectCard({ projet }) {
  return (
    <>
      <h1>{projet.title}</h1>
      <img src={projet.image} alt="image du projet" />
      <p>{projet.description}</p>
    </>
  );
}

export default ProjectCard;
