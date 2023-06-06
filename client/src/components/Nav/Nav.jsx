import style from "./Nav.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
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
  return (
    <div className={style.body}>
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
      <div className={style.icons}>
        <Link to="https://www.linkedin.com/in/martinellilucas8/">
          <FaLinkedin className={style.icon} size={20} />
        </Link>
        <Link to="https://github.com/martinellilucas">
          <FaGithub className={style.icon} size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
