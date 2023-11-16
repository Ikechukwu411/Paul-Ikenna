import React from "react";
import "./Technologies.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
const ContactMe = () => {
  return (
    <React.Fragment>
      <section className="section tech" id="section7">
        <div className="container">
          <div className=" has-text-centered">
            <h3 className="is-size-3">Contact Me</h3>
            <p>Get In Touch</p>
          </div>
          <div className="columns mt-5">
            <div className="column">
              <div className="pl-6">
                <div className="mb-4">
                  <p className="is-size-5">
                    <FaPhoneAlt className="mr-4" />
                    Phone Number
                  </p>
                  <p>07034483661</p>
                </div>
                <div className="mb-4">
                  <p className="is-size-5">
                    <FaRegEnvelope className="mr-4" />
                    Email
                  </p>
                  <p>OkaforIkennaPaul@gmail.com</p>
                </div>
                <div className="mb-4">
                  <p className="is-size-5">
                    <FaMapMarkerAlt />
                    Location{" "}
                  </p>
                  <p>Remote</p>
                </div>
              </div>
            </div>
            <div className="column">
              <form></form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactMe;
