import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Portfolio.css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./Technologies.css";
import Valmessage from "../assets/Val Messages.png";

const Portfolio = () => {
  return (
    <React.Fragment>
      <section className="section tech" id="section6">
        <div className="container">
          <div className="has-text-centered mb-5">
            <h2 className="is-size-2">Portfolio</h2>
            <p>My Works</p>
          </div>
          <Swiper
            modules={[Navigation, EffectFade]}
            navigation
            effect
            speed={800}
            slidesPerView={1}
            loop
            className="swipe box"
            style={{ backgroundColor: "#1D2135", color: "#00d1b2" }}
          >
            <div className="container">
              <SwiperSlide>
                <div className="columns">
                  <div className="column is-centerd is-half">
                    <div className="p-4">
                      <img src={Valmessage} alt="" width={250} />
                    </div>
                  </div>
                  <div className="column">
                    <div className="p-4">
                      <h1
                        className="title is-size-4-desktop mt-3"
                        style={{ color: "white" }}
                      >
                        Valentine Message App
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa doloremque ducimus quisquam harum nobis aliquid
                        fugiat voluptatibus inventore dolores labore.{" "}
                      </p>
                      <button className="button is-primary mt-3">
                        {" "}
                        View Demo
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="columns">
                  <div className="column is-centerd is-half">
                    <div className="p-4">
                      <img src={Valmessage} alt="" width={250} />
                    </div>
                  </div>
                  <div className="column">
                    <div className="p-4">
                      <h1
                        className="title is-size-4-desktop mt-3"
                        style={{ color: "white" }}
                      >
                        Todo App
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa doloremque ducimus quisquam harum nobis aliquid
                        fugiat voluptatibus inventore dolores labore.{" "}
                      </p>
                      <button className="button is-primary mt-3">
                        {" "}
                        View Demo
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="columns">
                  <div className="column is-centerd is-half">
                    <div className="p-4">
                      <img src={Valmessage} alt="" width={250} />
                    </div>
                  </div>
                  <div className="column">
                    <div className="p-4">
                      <h1
                        className="title is-size-4-desktop mt-3"
                        style={{ color: "white" }}
                      >
                        Expense Tracker
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa doloremque ducimus quisquam harum nobis aliquid
                        fugiat voluptatibus inventore dolores labore.{" "}
                      </p>
                      <button className="button is-primary mt-3">
                        {" "}
                        View Demo
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="columns">
                  <div className="column is-centerd is-half">
                    <div className="p-4">
                      <img src={Valmessage} alt="" width={250} />
                    </div>
                  </div>
                  <div className="column">
                    <div className="p-4">
                      <h1
                        className="title is-size-4-desktop mt-3"
                        style={{ color: "white" }}
                      >
                        SABaze
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa doloremque ducimus quisquam harum nobis aliquid
                        fugiat voluptatibus inventore dolores labore.{" "}
                      </p>
                      <button className="button is-primary mt-3">
                        {" "}
                        View Demo
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;
