import logo from "../../assets/logo.png";
import s from "./header.module.css";

const Header = () => {    

  let links = [{
    id: 1,
    title: "home",
    link: "#"
  }, {
    id: 2,
    title: "portfolio",
    link: "#"
  }, {
    id: 3,
    title: "about",
    link: "#"
  }, {
    id: 4,
    title: "contact",
    link: "#"
  }];    

    return (
        <header className={s["header"]}>
        <div className={s["header__logo"]}>
          <img className={s["header__icon"]} src={logo} alt="logo"></img>
          <div className={s["wrap"]}>
            <h3 className={s["header__name"]}>Bla bla</h3>
            <p className={s["header__desc"]}>One page flat template</p>
          </div>
        </div>
        <nav className={s["header__nav"]}>
          <ul className={s["header__nav-list"]}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.link} className={s["header__nav-list-item"]}>{link.title}</a>
                </li>
              )
            })}
          </ul>
        </nav>
    </header>
    )
}

export default Header;