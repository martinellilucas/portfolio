import style from "./Projects.module.css";
import { Link } from "react-router-dom";

const Projects = ({ language }) => {
  return (
    <div className={style.body}>
      {language === "eng" ? (
        <h1 className={style.title}>Projects</h1>
      ) : (
        <h1 className={style.title}>Proyectos</h1>
      )}
      {language === "eng" ? (
        <div id="projects" className={style.timeline}>
          <div data-aos="fade-left" className={style.childImpar}>
            <h1>Henry's Gym</h1>
            <p>
              Web application for a gym with third-party authentication, payment
              gateway, admin dashboard, subscriptions, user bans and reviews
            </p>
            <Link className={style.link} to="https://henry-gym.onrender.com/">
              Visit
            </Link>
          </div>
          <div data-aos="fade-right" className={style.childPar}>
            <h1>Healthy Food</h1>
            <p>
              Web application for healthy food recipes with filtering, search by
              name, ordering and recipe creation form.
            </p>
            <Link className={style.link} to="https://henry-gym.onrender.com/">
              Visit
            </Link>
          </div>
          <div data-aos="fade-left" className={style.childImpar}>
            <h1>Rick & Morty</h1>
            <p>
              Web application of the animated series rick and morty with login,
              search by character id, ordering, filtering and a favorites
              section.
            </p>
            <Link className={style.link} to="https://henry-gym.onrender.com/">
              Visit
            </Link>
          </div>
        </div>
      ) : (
        <div id="projects" className={style.timeline}>
          <div className={style.childImpar}>
            <h1>Henry's Gym</h1>
            <p>
              Aplicación web para un gimnasio con autenticación de terceros,
              pasarela de pagos, panel de administración, suscripciones, baneos
              de usuarios y comentarios
            </p>
            <Link className={style.link} to="https://henry-gym.onrender.com/">
              Visit
            </Link>
          </div>
          <div className={style.childPar}>
            <h1>Healthy Food</h1>
            <p>
              Aplicación web de recetas de comida saludable con filtrado,
              búsqueda por nombre, ordenamiento ascendente y descendente y
              formulario de creación recetas
            </p>
            <Link className={style.link} to="https://henry-gym.onrender.com/">
              Visit
            </Link>
          </div>
          <div className={style.childImpar}>
            <h1>Rick & Morty</h1>
            <p>
              Aplicación web de la serie animada Rick and Morty con login,
              búsqueda por id de personaje, ordenamiento, filtrado y sección de
              favoritos
            </p>
            <Link className={style.link} to="https://henry-gym.onrender.com/">
              Visit
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
