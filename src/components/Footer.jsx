import logoGithub from "../assets/logoGitHub.png";
import "../scss/footer.scss";

function Footer() {
  return (
    <>
      <footer>
        <a target="blank" href="https://github.com/Lauryn333/Portfolio-React">
          <img src={logoGithub} alt="logo github" />
        </a>
        <p>© Copyright - Lauryn MARTIN - 2024</p>
      </footer>
    </>
  );
}

export default Footer;
