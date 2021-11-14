import logo from "./assets/logo.png";

import photo from "./assets/photo.png";
import music from "./assets/music.png";
import settings from "./assets/settings.png";
import browser from "./assets/browser.png";
import phone from "./assets/phone.png";
import bubbles from "./assets/bubbles.png";

import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        {/* <div> */}
          <div className="header__logo">
            <img className="header__icon" src={logo} alt="logo"></img>
            <div className="wrap">
              <h3 className="header__name">Bla bla</h3>
              <p className="header__desc">One page flat template</p>
            </div>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li>
                <a className="header__nav-list-item">home</a>
              </li>
              <li>
                <a className="header__nav-list-item">portfolio</a>
              </li>
              <li>
                <a className="header__nav-list-item">about</a>
              </li>
              <li>
                <a className="header__nav-list-item">contact</a>
              </li>
            </ul>
          </nav>
        {/* </div> */}
      </header>

      <section className="main">
        <div className="main-wrap">
          <h1 className="main__title">We build <span className="main__title-bold">brand</span></h1>
          <p className="main__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
          <a className="main__btn">learn more</a>
        </div>
      </section>

      <section className="portfolio">
        <div className="portfolio__header">
          <h3 className="portfolio__header-title">Portfolio</h3>
          <p className="portfolio__header-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          <ul className="portfolio__header-list">
            <li className="portfolio__header-list-item">all</li>
            <li className="portfolio__header-list-item">web design</li>
            <li className="portfolio__header-list-item">graphic design</li>
            <li className="portfolio__header-list-item">flat design</li>
          </ul>
        </div>
        <div className="portfolio__menu">
          <a className="portfolio__menu-link"><img className="portfolio__menu-item" src={photo}></img></a>
          <a className="portfolio__menu-link"><img className="portfolio__menu-item" src={music}></img></a>
          <a className="portfolio__menu-link"><img className="portfolio__menu-item" src={settings}></img></a>
          <a className="portfolio__menu-link"><img className="portfolio__menu-item" src={browser}></img></a>
          <a className="portfolio__menu-link"><img className="portfolio__menu-item" src={phone}></img></a>
          <a className="portfolio__menu-link"><img className="portfolio__menu-item" src={bubbles}></img></a>
          <a className="portfolio__menu-link"><img className="portfolio__menu-item" src={photo}></img></a>
          <a className="portfolio__menu-link"><img className="portfolio__menu-item" src={music}></img></a>
        </div>
      </section>

      <section className="about">
        <div className="about__header">
          <h3 className="about__header-title">about us</h3>
          <p className="about__header-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
        </div>
        <div className="about__card">
          <div className="about-card-wrap about-card-wrap--left">
            <img className="about__card-img" src={photo1}></img>
            <h4 className="about__card-name">Melannie Doe</h4>
            <p className="about__card-job">project manager</p>
            <p className="about__card-desc">Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
          </div>
          <div className="about-card-wrap">
            <img className="about__card-img" src={photo2}></img>
            <h4 className="about__card-name">Jhonnie Doe</h4>
            <p className="about__card-job">graphic designer</p>
            <p className="about__card-desc">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamc</p>
          </div>
          <div className="about-card-wrap about-card-wrap--right">
            <img className="about__card-img" src={photo3}></img>
            <h4 className="about__card-name">Daniel Doe</h4>
            <p className="about__card-job">web designer</p>
            <p className="about__card-desc">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamc</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="contact__header">
          <h3 className="contact__header-title">contact us</h3>
          <p className="contact__header-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>

        <div className="contact-wrap">
          <form className="contact__form">
            <input type="text" placeholder="Your name" className="contact__form-input"></input>
            <input type="email" placeholder="Your email" className="contact__form-input"></input>
            <input type="textarea" placeholder="Your message" className="contact__form-text"></input>
            <button className="contact__form-btn">submit</button>
          </form>

          <div className="contact__map">

          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="footer__copy">&copy; Copyright 2016 Bla Bla Studio  |  One Page Flat Template</p>
        <img className="footer__up" src="#"></img>
      </footer>
    </div>
  );
}

export default App;
