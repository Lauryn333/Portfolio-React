import Lauryn from "../assets/photo-Lauryn.jpg";
import "../scss/homePage.scss";
import { Link } from "react-router-dom";
import technologiesFront from "../js/technologies-front";
import technologiesBack from "../js/technologies-back";

function HomePage() {
  return (
    <div className="global-div-home">
      <h1>Développeuse web full stack JavaScript</h1>
      <div className="first-div-home">
        <img className="photo-Lauryn" src={Lauryn} alt="photo-Lauryn" />
        <p>
          Après avoir obtenu un Master en Neurosciences et passé un an en tant
          que technicienne de laboratoire dans le milieu médical, je souhaite me
          reconvertir dans le domaine du développement web.
          <br />
          Actuellement en formation à la Wild Code School, je recherche une
          alternance de 15 mois à partir de septembre 2024.
        </p>
      </div>
      <h2>Technologies utilisées </h2>
      <div className="techno">
        <h3>Front-End : </h3>
        {technologiesFront.map((technologie) => (
          <div className="sous-unite" key={technologie.description}>
            <img src={technologie.image} alt={technologie.description} />
            <p>{technologie.description}</p>
          </div>
        ))}
      </div>

      <div className="techno">
        <h3>Back-End :</h3>
        {technologiesBack.map((technologie) => (
          <div className="sous-unite" key={technologie.description}>
            <img src={technologie.image} alt={technologie.description} />
            <p>{technologie.description}</p>
          </div>
        ))}
      </div>

      <Link className="liste-navBar" to="/contact">
        <button className="button-home">Me contacter</button>
      </Link>
    </div>
  );
}

export default HomePage;
