import s from "./portfolio.module.css";
import { links, items } from "./constants";

const Portfolio = () => {
  const title = "Portfolio";
  const desc = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit";

  return (
    <section className={s["portfolio"]}>
      <div className={s["portfolio__header"]}>
        <h3 className={s["portfolio__header-title"]}>{title}</h3>
        <p className={s["portfolio__header-desc"]}>{desc}</p>
        <div className={s["portfolio__header-list"]}>
          {links.map((link) => {
            return (
              <button
                key={link.id}
                className={s["portfolio__header-list-item"]}
              >
                {link.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className={s["portfolio__menu"]}>
        {items.map((item) => {
          return (
            <a
              key={item.id}
              href={item.link}
              className={s["portfolio__menu-link"]}
            >
              <img
                className={s["portfolio__menu-item"]}
                src={item.title}
                alt={item.title}
              ></img>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
