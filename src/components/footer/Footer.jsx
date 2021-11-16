import s from "./footer.module.css";

const Footer = () => {
  const copy = " Copyright 2016 Bla Bla Studio";
  const desc = "One Page Flat Template";
  return (
    <footer className={s["footer"]}>
      <p className={s["footer__copy"]}>
        &copy;{copy} | {desc}
      </p>
      <img className={s["footer__up"]} src="#" alt="logo"></img>
    </footer>
  );
};

export default Footer;
