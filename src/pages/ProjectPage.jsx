import { useParams } from "react-router-dom";

function ProjectPage() {
  const { id } = useParams();
  return (
    <>
      <h1>Page un projet</h1>
      <Link to="/projectsPage/projectPage"> Project</Link>
    </>
  );
}

export default ProjectPage;
