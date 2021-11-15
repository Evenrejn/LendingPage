import s from "./main.module.css";

const Main = () => {
    return (
        <section className={s["main"]}>
            <div className={s["main-wrap"]}>
                <h1 className={s["main__title"]}>We build <span className="main__title-bold">brand</span></h1>
                <p className={s["main__desc"]}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                <a className={s["main__btn"]}>learn more</a>
            </div>
        </section>
    )
}

export default Main;