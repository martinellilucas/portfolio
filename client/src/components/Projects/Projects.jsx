import Project from "../Project/Project";
import style from "./Projects.module.css";
import gym from "../../assets/gym.png";
import food from "../../assets/food.png";
import rick from "../../assets/rick.png";

const Projects = ({ language }) => {
  return (
    <div className={style.body}>
      {language === "eng" ? (
        <h1 className={style.title}>Projects</h1>
      ) : (
        <h1 className={style.title}>Proyectos</h1>
      )}
      <div id="projects" className={style.projectsContainer}>
        <Project
          name="Henry's Gym"
          image={gym}
          url={"https://henry-gym.onrender.com/"}
          desc="Web application for a gym with third-party authentication, payment gateway, admin dashboard, subscriptions, user bans and reviews"
        />
        <Project
          name="Healthy food"
          image={food}
          url="https://healty-food.onrender.com/"
          desc="
          Web application for healthy food recipes with filtering, search by name, ordering and recipe creation form. "
        />
        <Project
          name="Rick And Morty"
          image={rick}
          url="https://rickandmorty-zlgu.onrender.com"
          desc="
          Web application of the animated series rick and morty with login, search by character id, ordering, filtering and a favorites section."
        />
      </div>
    </div>
  );
};

export default Projects;
