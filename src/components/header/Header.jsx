import logo from "../../assets/logo.png";
import s from "./header.module.css";
import { links, title, desc } from "./constants";

const Header = () => {
  return (
    <header className={s["header"]}>
      <div className={s["header__logo"]}>
        <img className={s["header__icon"]} src={logo} alt="logo"></img>
        <div className={s["wrap"]}>
          <h3 className={s["header__name"]}>{title}</h3>
          <p className={s["header__desc"]}>{desc}</p>
        </div>
      </div>
      <nav className={s["header__nav"]}>
        <ul className={s["header__nav-list"]}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.link} className={s["header__nav-list-item"]}>
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
