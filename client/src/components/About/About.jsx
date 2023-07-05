import style from "./About.module.css";
import picture from "../../assets/picture.jpg";
import {
  FaCheckSquare,
  FaCss3,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import {
  SiExpress,
  SiJavascript,
  SiPostgresql,
  SiRedux,
  SiSequelize,
} from "react-icons/si";

const About = ({ language }) => {
  return (
    <div id="about" className={style.body}>
      <div className={style.descContainer}>
        <div className={style.imgContainer}>
          <img className={style.img} src={picture} alt="Lucas" />
        </div>
        {language === "eng" ? (
          <div className={style.textContainer}>
            <h1 className={style.name}>Lucas Martinelli</h1>
            <h2 className={style.heading}>Full Stack Developer</h2>
            <p className={style.text}>
              <FaCheckSquare color="orange" size={18} /> I'm a Full Stack
              Developer with the ability to build and optimize end-user-oriented
              web sites and applications in a scalable and modularized manner
            </p>
            <p className={style.text}>
              <FaCheckSquare color="orange" size={18} /> I love to investigate,
              solve problems, learn from others and teach, that is why in me you
              will find a developer with conflict resolution skills, willing to
              listen to ideas and contribute all my knowledge to achieve the
              proposed objectives.
            </p>
            <p className={style.text}>
              <FaCheckSquare color="orange" size={18} /> I have experience in
              JavaScript and Java languages, HTML, CSS and also in technologies
              like Node.js, Express, Sequelize, PostgreSQL, React.js, Redux. VCS
              tool: Git. Agile: Scrum.
            </p>
          </div>
        ) : (
          <div className={style.textContainer}>
            <h1 className={style.name}>Lucas Martinelli</h1>
            <h2 className={style.heading}>Full Stack Developer</h2>
            <p className={style.text}>
              <FaCheckSquare color="orange" size={18} />
              Soy un Full Stack Developer con la capacidad de construir y
              optimizar webs y aplicaciones orientados al usuario de manera
              escalable y modularizada
            </p>
            <p className={style.text}>
              <FaCheckSquare color="orange" size={18} /> Me encanta investigar,
              resolver problemas, aprender de los demás y enseñar, por eso en mí
              encontrarás un desarrollador con habilidades de resolución de
              conflictos, dispuesto a escuchar ideas y aportar todo mi
              conocimiento para lograr los objetivos propuestos.
            </p>
            <p className={style.text}>
              <FaCheckSquare color="orange" size={18} /> Tengo experiencia en
              lenguajes como JavaScript y Java, HTML, CSS y también en
              tecnologías como Node.js, Express, Sequelize, PostgreSQL,
              React.js, Redux. Herramienta de control de versiones: Git. Agile:
              Scrum.
            </p>
          </div>
        )}
      </div>
      <div className={style.tecnologies}>
        <SiJavascript className={style.tech} color="white" size={60} />
        <FaJava className={style.tech} color="white" size={60} />
        <FaHtml5 className={style.tech} color="white" size={60} />
        <FaCss3 className={style.tech} color="white" size={60} />
        <FaNodeJs className={style.tech} color="white" size={60} />
        <SiExpress className={style.tech} color="white" size={60} />
        <SiSequelize className={style.tech} color="white" size={60} />
        <SiPostgresql className={style.tech} color="white" size={60} />
        <FaReact className={style.tech} color="white" size={60} />
        <SiRedux className={style.tech} color="white" size={60} />
      </div>
    </div>
  );
};

export default About;
