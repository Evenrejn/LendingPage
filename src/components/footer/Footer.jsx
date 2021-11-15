import s from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={s["footer"]}>
            <p className={s["footer__copy"]}>&copy; Copyright 2016 Bla Bla Studio  |  One Page Flat Template</p>
            <img className={s["footer__up"]} src="#"></img>
        </footer>
    )
}

export default Footer;