import ContactForm from "../components/ContactForm";
import tel from "../assets/tel.png";
import mail from "../assets/mail.png";
import github from "../assets/githubContact.png";
import linkedin from "../assets/linkedin.png";

function ContactPage() {
  return (
    <section className="contact-page">
      <h1 className="title-contact">Me contacter</h1>

      <div className="contact-container">
        <address>
          <div className="contact-sous-u">
            <img src={tel} alt="icone telephone" />
            <a href="tel:0782060244">07.82.06.02.44</a>
          </div>

          <div className="contact-sous-u">
            <img src={mail} alt="icone mail" />
            <a href="mailto:lauryn.martin333@gmail.com" target="_blank">
              Email
            </a>
          </div>
          <div className="contact-sous-u">
            <img src={github} alt="icone GitHub" />
            <a href="https://github.com/Lauryn333" target="_blank">
              {" "}
              Github{" "}
            </a>
          </div>

          <div className="contact-sous-u">
            <img src={linkedin} alt="icone Linkedin" />
            <a
              href="https://www.linkedin.com/in/lauryn-martin-8a15a22ba/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </address>
      </div>

      {/* <ContactForm /> */}
    </section>
  );
}
export default ContactPage;
