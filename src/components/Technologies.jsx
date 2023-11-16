import React, { useState } from "react";
import "./Technologies.css";
import "bulma/css/bulma.min.css";
import { FaCode } from "react-icons/fa";
import { FaCaretSquareDown } from "react-icons/fa";
import { FaNotEqual } from "react-icons/fa";

const Technologies = () => {
  const [text, setText] = useState(!true);

  return (
    <React.Fragment>
      <section className="section tech" id="section3">
        <div className="container">
          <h3 className="is-size-3 has-text-centered mb-4 pb-4">
            Technologies
          </h3>
          <div className="columns mt-5">
            <div className="column is-half">
              <h3
                className="has-text-centered is-size-4-desktop"
                style={{ color: "white" }}
              >
                <span>
                  <FaCode />
                </span>
                <span className="ml-2">Front-End Development</span>
                <span className="ml-4">
                  <FaCaretSquareDown
                    onClick={() => {
                      setText(!text);
                    }}
                  />
                </span>
              </h3>
              <p className="has-text-centered is-size-5-desktop">
                Over One Year Experience
              </p>
              {text && (
                <ul className="ml-4 mt-2">
                  <li
                    className="ml-4 pt-5 pb-2"
                    style={{ borderBottom: "2px solid white" }}
                  >
                    HTML
                  </li>
                  <li
                    className="ml-4 pt-5 pb-2"
                    style={{ borderBottom: "1px solid white" }}
                  >
                    CSS
                  </li>
                  <li
                    className="ml-4 pt-5 pb-2"
                    style={{ borderBottom: "2px solid white" }}
                  >
                    BULMA
                  </li>
                  <li
                    className="ml-4 pt-5 pb-2"
                    style={{ borderBottom: "1px solid white" }}
                  >
                    JAVASCRIPT
                  </li>
                  <li
                    className="ml-4 pt-5 pb-2"
                    style={{ borderBottom: "2px solid white" }}
                  >
                    REACT JS
                  </li>
                  <li
                    className="ml-4 pt-5 pb-2"
                    style={{ borderBottom: "1px solid white" }}
                  >
                    WORDPRESS
                  </li>
                </ul>
              )}
            </div>
            <div className="column is-half is-size-4-desktop">
              <h3 className="has-text-centered" style={{ color: "white" }}>
                <span>
                  <FaNotEqual />
                </span>
                <span className="ml-2">Back-End Development</span>
                <span className="ml-4">
                  <FaCaretSquareDown />
                </span>
              </h3>
              <p className="has-text-centered is-size-5-desktop">
                In View ......
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Technologies;
