import { Link } from "react-router-dom";
import "../scss/navBar.scss";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <Link className="liste-navBar" to="/">
            Accueil
          </Link>
          <Link className="liste-navBar" to="/contact">
            {" "}
            Contact{" "}
          </Link>
          <Link className="liste-navBar" to="/projectsPage">
            {" "}
            Projets{" "}
          </Link>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
