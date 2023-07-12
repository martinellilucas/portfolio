import { FaCheckSquare } from "react-icons/fa";
import style from "./Contact.module.css";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = ({ language }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_e9n2sqh",
      "template_9izldwj",
      e.target,
      "vc3WZfsRXvECr-E7P"
    );
  };

  return (
    <div id="contact" className={style.body}>
      <form onSubmit={sendEmail} id="form" className={style.form}>
        <div data-aos="fade-left" className={style.section}>
          <label htmlFor="name" className={style.label}>
            <FaCheckSquare color="orange" size={30} />{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={language === "eng" ? "Name" : "Nombre"}
            className={style.input}
          ></input>
        </div>
        <div data-aos="fade-right" className={style.section}>
          <label htmlFor="email" className={style.label}>
            <FaCheckSquare color="orange" size={30} />{" "}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder={language === "eng" ? "Email" : "Email"}
            className={style.input}
          ></input>
        </div>
        <div data-aos="fade-left" className={style.section}>
          <label htmlFor="message" className={style.label}>
            <FaCheckSquare color="orange" size={30} />{" "}
          </label>
          <textarea
            name="message"
            id="message"
            placeholder={language === "eng" ? "Message" : "Mensaje"}
            className={style.input}
          ></textarea>
        </div>
        <button type="submit" data-aos="fade-right" className={style.button}>
          Submit
        </button>
      </form>
      <div className={style.line}></div>
      <div className={style.titleContainer}>
        {language === "eng" ? (
          <h1 className={style.title}>Contact</h1>
        ) : (
          <h1 className={style.title}>Contacto</h1>
        )}
      </div>
    </div>
  );
};

export default Contact;
