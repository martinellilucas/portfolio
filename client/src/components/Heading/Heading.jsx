import style from "./Heading.module.css";
import developer from "../../assets/developer.png";

const Heading = ({ language }) => {
  if (language === "eng") {
    return (
      <div id="home" className={style.body}>
        <div className={style.textContainer}>
          <h2 className={style.greetings}>Hi! I'm Lucas Martinelli</h2>
          <h1 className={style.heading}>Full Stack Developer</h1>
          <p className={style.about}>
            I present myself as a flexible and resilient person. I have the
            capacity for teamwork, problem solving, decision making, adaptation
            to change and continuous learning.
          </p>
          <p className={style.slogan}>
            It's times like this you learn to live again.
          </p>
        </div>
        <div className={style.imgContainer}>
          <img src={developer} alt="developer"></img>
        </div>
      </div>
    );
  } else {
    return (
      <div id="home" className={style.body}>
        <div className={style.textContainer}>
          <h2 className={style.greetings}>Hola, soy Lucas Martinelli</h2>
          <h1 className={style.heading}>Full Stack Developer</h1>
          <p className={style.about}>
            Me presento como una persona flexible y resiliente. Tengo capacidad
            de trabajo en equipo, resolución de problemas, toma de decisiones,
            adaptación al cambio y al aprendizaje continuo.
          </p>
          <p className={style.slogan}>
            It's times like this you learn to live again.
          </p>
        </div>
        <div className={style.imgContainer}>
          <img src={developer} alt="developer"></img>
        </div>
      </div>
    );
  }
};

export default Heading;
