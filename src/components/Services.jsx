import React from "react";
import "./Technologies.css";
import { FaLaptopCode } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";

const Services = () => {
  return (
    <React.Fragment>
      <section className="section tech" id="section5">
        <div className="container">
          <div>
            <p className="is-size-2 has-text-centered mb-4">Services</p>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article
                className="tile is-child box"
                style={{ backgroundColor: "#1D2135" }}
              >
                <p className="subtitle">
                  <FaLaptopCode color="#00d1b2" size={30} />
                </p>
                <p className="title is-size-4" style={{ color: "white" }}>
                  Front-End Web Development
                </p>
                <div className="content">
                  <a>View more...</a>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article
                className="tile is-child box"
                style={{ backgroundColor: "#1D2135" }}
              >
                <p className="subtitle">
                  <FaCogs color="#00d1b2" size={30} />
                </p>
                <p className="title is-size-4" style={{ color: "white" }}>
                  Wordpress SEO Optmization
                </p>
                <div className="content">
                  <a>View more...</a>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article
                className="tile is-child box"
                style={{ backgroundColor: "#1D2135" }}
              >
                <p className="subtitle">
                  <FaPen color="#00d1b2" size={30} />
                </p>
                <p className="title is-size-4" style={{ color: "white" }}>
                  Content Creator
                </p>
                <div className="content">
                  <a>View more...</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Services;
