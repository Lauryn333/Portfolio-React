import Lauryn from "../assets/photo-Lauryn.jpg";
import "../scss/homePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="global-div-home">
      <h1>Développeuse web full stack JavaScript</h1>
      <div className="first-div-home">
        <img className="photo-Lauryn" src={Lauryn} alt="photo-Lauryn" />
        <p>
          Après 1 an en tant que Technicienne de laboratoire dans le milieu
          médical, je souhaite me reconvertir dans le domaine du développement
          web. Actuellement en formation à la Wild Code School, je recherche une
          alternance de 15 mois à partir de septembre 2024.
        </p>
      </div>
      <h2>Technologies utilisées </h2>
      <div className="techno">
        <h3>Front-End : </h3>
        <div className="sous-unite">
          <img
            src="https://www.wildcodeschool.com/hubfs/markentive/favicons/skills/HTML5.svg"
            alt="logo html5"
          />
          <p>HTML5</p>
        </div>

        <div className="sous-unite">
          <img
            src="https://www.wildcodeschool.com/hubfs/markentive/favicons/skills/CSS3.svg"
            alt="logo CSS 3 "
          />
          <p>CSS 3</p>
        </div>

        <div className="sous-unite">
          <img
            src="https://www.wildcodeschool.com/hubfs/markentive/favicons/skills/Javascript.svg"
            alt="logo JavaScript "
          />
          <p>JavaScript</p>
        </div>

        <div className="sous-unite">
          <img
            src="https://www.wildcodeschool.com/hubfs/markentive/favicons/skills/React.svg"
            alt="logo React"
          />
          <p>React</p>
        </div>
      </div>

      <div className="techno">
        <h3>Back-End :</h3>
        <div className="sous-unite">
          <img
            src="https://www.wildcodeschool.com/hubfs/markentive/favicons/skills/SQL.svg"
            alt="logo SQL"
          />
          <p>SQL</p>
        </div>

        <div className="sous-unite">
          <img
            src="https://www.wildcodeschool.com/hubfs/markentive/favicons/skills/NodeJS.svg"
            alt="logo Node.js"
          />
          <p>Node.js</p>
        </div>

        <div className="sous-unite">
          <img
            src="https://www.wildcodeschool.com/hs-fs/hubfs/234b110fb32958f68f318e13c7a0610e.png?width=28&height=28&name=234b110fb32958f68f318e13c7a0610e.png"
            alt="logo Express"
          />
          <p>Express</p>
        </div>
      </div>

      <Link className="liste-navBar" to="/contact">
        <button className="button-home">Me contacter</button>
      </Link>
    </div>
  );
}
export default HomePage;
