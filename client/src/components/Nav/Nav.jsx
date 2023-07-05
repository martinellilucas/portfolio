import style from "./Nav.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Toggle from "react-styled-toggle";
const Nav = ({ language, setLanguage }) => {
  const scrollTo = (where) => {
    const section = document.getElementById(where);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const changeLanguage = () => {
    if (language === "eng") {
      setLanguage("esp");
    } else {
      setLanguage("eng");
    }
  };

  return (
    <div className={style.body}>
      <div className={style.language}>
        <Toggle
          backgroundColorChecked="black"
          width="30"
          height="15"
          sliderHeight="13"
          sliderWidth="13"
          labelLeft="Eng / Esp"
          onChange={changeLanguage}
        />
      </div>
      {language === "eng" ? (
        <div className={style.itemContainer}>
          <span className={style.item} onClick={() => scrollTo("home")}>
            Home
          </span>
          <span className={style.item} onClick={() => scrollTo("about")}>
            About
          </span>
          <h1 className={style.initials}>LM</h1>
          <span className={style.item} onClick={() => scrollTo("projects")}>
            Projects
          </span>
          <span className={style.item} onClick={() => scrollTo("contact")}>
            Contact
          </span>
        </div>
      ) : (
        <div className={style.itemContainer}>
          <span className={style.item} onClick={() => scrollTo("home")}>
            Inicio
          </span>
          <span className={style.item} onClick={() => scrollTo("about")}>
            Acerca
          </span>
          <h1 className={style.initials}>LM</h1>
          <span className={style.item} onClick={() => scrollTo("projects")}>
            Proyectos
          </span>
          <span className={style.item} onClick={() => scrollTo("contact")}>
            Contacto
          </span>
        </div>
      )}

      <div className={style.icons}>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/martinellilucas8/"
        >
          <FaLinkedin className={style.icon} size={20} />
        </Link>
        <Link target="_blank" to="https://github.com/martinellilucas">
          <FaGithub className={style.icon} size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
