import s from "./portfolio.module.css";
import photo from "../../assets/photo.png";
import music from "../../assets/music.png";
import settings from "../../assets/settings.png";
import browser from "../../assets/browser.png";
import phone from "../../assets/phone.png";
import bubbles from "../../assets/bubbles.png";

const Portfolio = () => {
    
    let items = [{
        id: 1,
        title: photo,
        link: "#"
      }, {
        id: 2,
        title: music,
        link: "#"
      }, {
        id: 3,
        title: settings,
        link: "#"
      }, {
        id: 4,
        title: browser,
        link: "#"
      }, {
        id: 5,
        title: phone,
        link: "#"
      }, {
        id: 6,
        title: bubbles,
        link: "#"
      }, {
        id: 7,
        title: photo,
        link: "#"
      }, {
        id: 8,
        title: music,
        link: "#"
      }];

    return (
        <section className={s["portfolio"]}>
            <div className={s["portfolio__header"]}>
                <h3 className={s["portfolio__header-title"]}>Portfolio</h3>
                <p className={s["portfolio__header-desc"]}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                <ul className={s["portfolio__header-list"]}>
                    <li className={s["portfolio__header-list-item"]}>all</li>
                    <li className={s["portfolio__header-list-item"]}>web design</li>
                    <li className={s["portfolio__header-list-item"]}>graphic design</li>
                    <li className={s["portfolio__header-list-item"]}>flat design</li>
                </ul>
            </div>
            <div className={s["portfolio__menu"]}>
                {items.map((item) => {
                    return <a key={item.id} href={item.link} className={s["portfolio__menu-link"]}><img className={s["portfolio__menu-item"]} src={item.title}></img></a>
                })}
            </div>
        </section>
    )
}

export default Portfolio;
