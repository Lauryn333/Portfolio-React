import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/contact"> Formulaire de contact </Link>
        <Link to="/projectsPage"> Projets </Link>
      </nav>
    </>
  );
}
export default Navbar;
