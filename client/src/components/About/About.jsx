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

const About = () => {
  return (
    <div id="about" className={style.body}>
      <div className={style.descContainer}>
        <div className={style.imgContainer}>
          <img className={style.img} src={picture} alt="Lucas" />
        </div>
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
      </div>
      <div className={style.tecnologies}>
        <SiJavascript color="white" size={60} />
        <FaJava color="white" size={60} />
        <FaHtml5 color="white" size={60} />
        <FaCss3 color="white" size={60} />
        <FaNodeJs color="white" size={60} />
        <SiExpress color="white" size={60} />
        <SiSequelize color="white" size={60} />
        <SiPostgresql color="white" size={60} />
        <FaReact color="white" size={60} />
        <SiRedux color="white" size={60} />
      </div>
    </div>
  );
};

export default About;
