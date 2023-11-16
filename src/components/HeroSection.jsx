import React from "react";
import HeroImage from "../assets/Untitled Project.jpg";
import "./HeroSection.css";
import "bulma/css/bulma.min.css";
import ContactIcon from "./ContactIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const intro = `Hi, I'm Paul Ikenna`;
  const additionalInfo = ` I Develop Dynamic and User friendly Front-End websites.`;
  const hireMe = `Want to Build Dynamic website ?`;

  return (
    <div>
      <React.Fragment>
        <section className="section heroSec" id="section1">
          <div className="container">
            <div className="columns">
              <div
                className="column is-half is-mobile has-text-centered-mobile"
                style={{ color: "white" }}
              >
                <h1
                  className="title is-size-1-desktop"
                  style={{ color: "white" }}
                >
                  {`🖐 ${intro}`}
                </h1>
                <p
                  className="mt-3 is-size-5-desktop"
                  style={{ color: "#00D1B2" }}
                >
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      strings: "A Creative Front-End Web Developer....",
                    }}
                  />
                </p>
                <p
                  className="mt-3 mb-5 is-size-5-desktop"
                  style={{ color: "#00D1B2" }}
                >
                  {additionalInfo}
                </p>
                <p
                  style={{ color: "#00D1B2" }}
                  className="mb-4 is-size-5-desktop"
                >
                  {hireMe}
                </p>
                <a
                  href="https://wa.me/2347034483661"
                  target="_blank"
                  rel="noreferrer"
                  type="button"
                  className="button is-primary is-medium"
                >
                  {" "}
                  Hire Me -
                  <FontAwesomeIcon icon={faAndroid} />
                </a>
              </div>
              <div className="column is-half" style={{ textAlign: "center" }}>
                <img
                  className="is-rounded"
                  src={HeroImage}
                  alt="Paul Ikenna"
                  style={{ width: "60%" }}
                />
              </div>
            </div>
            <ContactIcon />
          </div>
        </section>
      </React.Fragment>
    </div>
  );
};

export default HeroSection;
