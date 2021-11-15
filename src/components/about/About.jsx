import s from "./about.module.css";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo1.png";
import photo3 from "../../assets/photo1.png";

const About = () => {          
    return (
        <section className={s["about"]}>
            <div className={s["about__header"]}>
                <h3 className={s["about__header-title"]}>about us</h3>
                <p className={s["about__header-desc"]}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
            </div>
            <div className={s["about__card"]}>
                <div className={`${s["about-card-wrap"]} ${s["about-card-wrap--left"]}`}>
                    <img className={s["about__card-img"]} src={photo1}></img>
                    <h4 className={s["about__card-name"]}>Melannie Doe</h4>
                    <p className={s["about__card-job"]}>project manager</p>
                    <p className={s["about__card-desc"]}>Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                </div>
                <div className={s["about-card-wrap"]}>
                    <img className={s["about__card-img"]} src={photo2}></img>
                    <h4 className={s["about__card-name"]}>Jhonnie Doe</h4>
                    <p className={s["about__card-job"]}>graphic designer</p>
                    <p className={s["about__card-desc"]}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamc</p>
                </div>
                <div className={`${s["about-card-wrap"]} ${s["about-card-wrap--right"]}`}>
                    <img className={s["about__card-img"]} src={photo3}></img>
                    <h4 className={s["about__card-name"]}>Daniel Doe</h4>
                    <p className={s["about__card-job"]}>web designer</p>
                    <p className={s["about__card-desc"]}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamc</p>
                </div>
            </div>
        </section>
    )
}

export default About;