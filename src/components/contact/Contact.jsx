import s from "./contact.module.css";

const Contact = () => {
    return (
        <section className={s["contact"]}>
            <div className={s["contact__header"]}>
                <h3 className={s["contact__header-title"]}>contact us</h3>
                <p className={s["contact__header-desc"]}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div className={s["contact-wrap"]}>
                <form className={s["contact__form"]}>
                    <input type="text" placeholder="Your name" className={s["contact__form-input"]}></input>
                    <input type="email" placeholder="Your email" className={s["contact__form-input"]}></input>
                    <input type="textarea" placeholder="Your message" className={s["contact__form-text"]}></input>
                    <button className={s["contact__form-btn"]}>submit</button>
                </form>
                <div className={s["contact__map"]}></div>
            </div>
        </section>
    )
}

export default Contact;