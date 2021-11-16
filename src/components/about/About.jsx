import s from "./about.module.css";
import { persons, title, desc } from "./constants.jsx";

const About = () => {
  return (
    <section className={s["about"]}>
      <div className={s["about__header"]}>
        <h3 className={s["about__header-title"]}>{title}</h3>
        <p className={s["about__header-desc"]}>{desc}</p>
      </div>
      <div className={s["about__card"]}>
        {persons.map((person) => {
          return (
            <div
              key={person.id}
              className={`${s["about-card-wrap"]} ${s["about-card-wrap--left"]}`}
            >
              <img
                className={s["about__card-img"]}
                src={person.img}
                alt={person.description}
              ></img>
              <h4 className={s["about__card-name"]}>{person.name}</h4>
              <p className={s["about__card-job"]}>{person.job}</p>
              <p className={s["about__card-desc"]}>{person.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
