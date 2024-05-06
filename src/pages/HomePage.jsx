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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In veritatis
          ipsa dolor libero id consequatur explicabo at ipsam similique et
          blanditiis, delectus a ea sed ullam vero, molestiae incidunt
          perferendis!
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsam
        excepturi vitae itaque fuga id quos minus quam impedit deleniti!
      </p>
      <Link className="liste-navBar" to="/contact">
        <button className="button-home">Me contacter</button>
      </Link>
    </div>
  );
}
export default HomePage;
