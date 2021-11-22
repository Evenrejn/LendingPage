import s from "./contact.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Contact = () => {
  const title = "contact us";
  const desc = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";
  const btnName = "submit";
  return (
    <section className={s["contact"]}>
      <div className={s["contact__header"]}>
        <h3 className={s["contact__header-title"]}>{title}</h3>
        <p className={s["contact__header-desc"]}>{desc}</p>
      </div>
      <div className={s["contact-wrap"]}>
        <form className={s["contact__form"]}>
          <input
            type="text"
            placeholder="Your name"
            className={s["contact__form-input"]}
          ></input>
          <input
            type="email"
            placeholder="Your email"
            className={s["contact__form-input"]}
          ></input>
          <input
            type="textarea"
            placeholder="Your message"
            className={s["contact__form-text"]}
          ></input>
          <button className={s["contact__form-btn"]}>{btnName}</button>
        </form>

        <MapBlock />

        {/* <div className={s["contact__map"]}></div> */}
      </div>
    </section>
  );
};

const MapBlock = () => {
  const mapData = {
    center: [55.793946, 37.704651],
    point: [55.798682, 37.695816],
    zoom: 13,
    address: "Москва, Колодезный переулок д.2а",
  };

  return (
    <>
      <div id="map" className={s["contact__map"]}>
        <YMaps height="270">
          <div className={s["contact__map"]}>
            <p className={s["contact__map-title"]}>{mapData.address}</p>
            <Map
              width="100%"
              height="280px"
              defaultState={{ center: mapData.center, zoom: mapData.zoom }}
            >
              <Placemark defaultGeometry={mapData.point} />
            </Map>
          </div>
        </YMaps>
      </div>
    </>
  );
};

//   return (
//     <YMaps height="270">
//       <div className={s["contact__map"]}>
//         <p className={s["contact__map-title"]}>{mapData.address}</p>
//         <Map
//           width="100%"
//           height="280px"
//           defaultState={{ center: mapData.center, zoom: mapData.zoom }}
//         >
//           <Placemark defaultGeometry={mapData.point} />
//         </Map>
//       </div>
//     </YMaps>
//   );
//};

export default Contact;
