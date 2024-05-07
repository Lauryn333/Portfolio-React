import { useState } from "react";
import "../scss/contact.scss";
function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <form>
        <label htmlFor="firstName">Prénom :</label>
        <input
          required
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChangeFirstName}
        />
        <label htmlFor="lastName">Nom :</label>
        <input
          required
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChangeLastName}
        />
        <label htmlFor="mail">Mail :</label>
        <input
          required
          id="mail"
          type="text"
          name="mail"
          value={mail}
          onChange={handleChangeMail}
        />
        <label htmlFor="message">Message :</label>
        <textarea
          required
          id="message"
          type="text"
          name="message"
          value={message}
          onChange={handleChangeMessage}
        />

        <button className="button" type="submit">
          Envoyez votre demande
        </button>
      </form>
    </>
  );
}
export default ContactForm;
