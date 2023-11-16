import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import "./Technologies.css";
import "./Qualification.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";

const Qualification = () => {
  const [activeTab, setactiveTab] = useState(0);

  const handleTabClick = (index) => {
    setactiveTab(index);
  };
  return (
    <React.Fragment>
      <section className="section tech" id="section4">
        <div className="container">
          <h3 className=" is-size-4 has-text-centered">Qualification</h3>
        </div>
        <div className="has-text-centered">
          <button
            className={`btn ${activeTab === 0 ? "active" : ""}`}
            onClick={() => {
              handleTabClick(0);
            }}
          >
            <span>
              <FaGraduationCap />
            </span>
            <span>Education</span>
          </button>
          <button
            className={`btn ${activeTab === 1 ? "active" : ""}`}
            onClick={() => {
              handleTabClick(1);
            }}
          >
            <span>
              <FaPeopleArrows />
            </span>
            <span>Work</span>
          </button>
          <div className="">
            {activeTab === 0 && (
              <div>
                <div>
                  {/* QUALIFICATION DATA 1 */}
                  <div className="qualification_data">
                    <div className="ml-5 mb-4">
                      <h3 className="is-size-5 mb-3">Computer Science</h3>
                      <span>
                        <p>National Open University of Nigeria (Noun)</p>
                      </span>
                    </div>
                    <div>
                      <span className="qualification_rounded"></span>
                      <span className="qualification_line"></span>
                    </div>
                  </div>

                  {/* QUALIFICATION DATA 2 */}
                  <div className="qualification_data">
                    <div></div>
                    <div>
                      <span className="qualification_rounded"></span>
                      <span className="qualification_line"></span>
                    </div>
                    <div className="mb-5">
                      <h3 className="is-size-5">Front-End Web Development</h3>
                      <span>
                        <p>Innovation Growth Hub (IGhub)</p>
                      </span>
                    </div>
                  </div>

                  {/* QUALIFICATION DATA 3 */}
                  <div className="qualification_data">
                    <div className="ml-5">
                      <h3 className="is-size-5 mb-3">
                        Front-End Web Development
                      </h3>
                      <span>
                        <p>Udemy</p>
                      </span>
                    </div>
                    <div>
                      <span className="qualification_rounded"></span>
                      <span className="qualification_line"></span>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            )}
          </div>
          <div className="">
            {activeTab === 1 && (
              <div>
                <div>
                  {/* QUALIFICATION DATA 1 */}
                  <div className="qualification_data">
                    <div className="ml-5">
                      <h3 className="is-size-5 mb-3">
                        Three (3) Months Internship
                      </h3>
                      <span>
                        <p>Innovation Growth Hub (IGhub)</p>
                      </span>
                    </div>
                    <div>
                      <span className="qualification_rounded"></span>
                      <span className="qualification_line"></span>
                    </div>
                  </div>

                  {/* QUALIFICATION DATA 2 */}
                  <div className="qualification_data">
                    <div></div>
                    <div>
                      <span className="qualification_rounded"></span>
                      <span className="qualification_line"></span>
                    </div>
                    <div>
                      <h3 className="is-size-5 mb-3">Admin Manager</h3>
                      <span>
                        <p>South Africa Music website (SABaze)</p>
                      </span>
                    </div>
                  </div>

                  {/* QUALIFICATION DATA 3 */}
                  <div className="qualification_data">
                    <div className="ml-5">
                      <h3 className="is-size-5 mb-3">Content Creator</h3>
                      <span>
                        <p>South Africa Music website (SABaze)</p>
                      </span>
                    </div>
                    <div>
                      <span className="qualification_rounded"></span>
                      <span className="qualification_line"></span>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Qualification;
