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

        <div className="sous-unite">
          <img
            src="data:image/png;base64,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"
            alt="logo JAVA"
          />
          <p>JAVA</p>
        </div>
      </div>

      <Link className="liste-navBar" to="/contact">
        <button className="button-home">Me contacter</button>
      </Link>
    </div>
  );
}
export default HomePage;
