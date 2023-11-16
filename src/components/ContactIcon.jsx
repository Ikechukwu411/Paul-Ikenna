import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const ContactIcon = () => {
  return (
    <React.Fragment>
      <div>
        <p style={{ color: "white" }}>Social Media Handle</p>
      </div>
      <div className="level mt-2 is-mobile">
        <div className="level-left">
          <a
            href="https://web.facebook.com/Okaforpaulikenna411"
            target="_blank"
            rel="noreferrer"
            className="level-item"
          >
            <FontAwesomeIcon icon={faFacebook} color="#00D1B2" />
          </a>
          <a
            href="https://wa.me/2347034483661"
            target="_blank"
            rel="noreferrer"
            className="level-item"
          >
            <FontAwesomeIcon icon={faWhatsapp} color="#00D1B2" />
          </a>
          <a
            className="level-item"
            href="https://www.linkedin.com/in/paul-ikenna-423141207/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#00D1B2" />
          </a>
          <a
            className="level-item"
            href="https://twitter.com/yawe411"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} color="#00D1B2" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactIcon;
