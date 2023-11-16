import React from "react";
import "./About.css";
import Paul from "../assets/Ikenna1-removebg-preview.png";
import "bulma/css/bulma.min.css";
import { FaDownload } from "react-icons/fa";

const About = () => {
  const aboutMe = `As a front-end developer with a year of 
  experience building professional websites for businesses,
  I combine an artistic eye with technical prowess. 
  I have mastered the trio of HTML, CSS, and JavaScript, 
  leveraging these foundational languages to bring life to 
  static designs. With a keen understanding of design principles, 
  I transform wireframes and mockups into pixel-perfect,
   responsive, and visually captivating user interfaces.`;

  const onButtonClick = () => {
    fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };

  return (
    <React.Fragment>
      <section className="section about" id="section2">
        <div className="container">
          <div className="has-text-centered">
            <h2 className="title is-size-2-desktop" style={{ color: "white" }}>
              About Me
            </h2>
            <p>Get to Know Me</p>
          </div>
          <div className="columns mt-4">
            <div className="column is-half">
              <img src={Paul} alt="Paul Ikenna" />
            </div>
            <div className="column is-half is-size-5-desktop">
              <div className="mb-5 has-text-centered-mobile">{aboutMe}</div>
              <div className="mt-5">
                <p style={{ color: "white" }}>
                  Got a project?, Hire me and enjoy Quality/ Excellence Delivery
                </p>
              </div>
              <nav className="level is-mobile mt-5">
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Experience</p>
                    <p className="title" style={{ color: "white" }}>
                      1+
                    </p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Project</p>
                    <p className="title" style={{ color: "white" }}>
                      15+
                    </p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Team Work</p>
                    <p className="title" style={{ color: "white" }}>
                      5+
                    </p>
                  </div>
                </div>
              </nav>
              <button
                type="button"
                className="button is-primary is-medium is-responsive"
                onClick={onButtonClick}
              >
                Download CV
                <span className="ml-2">
                  <FaDownload />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
