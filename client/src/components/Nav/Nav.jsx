import style from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={style.body}>
      <span className={style.item}>Home</span>
      <span className={style.item}>About</span>
      <span className={style.item}>Experience</span>
      <span className={style.item}>Contact</span>
    </div>
  );
};

export default Nav;
