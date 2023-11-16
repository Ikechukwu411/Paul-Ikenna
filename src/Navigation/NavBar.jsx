import React, { useState } from "react";
import "./NavBar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const [isActive, setisActive] = useState(false);
  const handleClick = () => {
    setisActive(false);
  };
  const icon = `👊 Duke`;
  const home = "Home";
  const about = "About";
  const skill = "Skills";
  const Service = "Services";
  const Portfolio = "Portfolio";
  const contactMe = "Contact Me";
  return (
    <div>
      <React.Fragment>
        <header>
          <nav className="navbar is-fixed-top has-shadow">
            <div className="container">
              <div className="navbar-brand">
                <label className="navbar-item">{icon}</label>
                <a
                  onClick={() => {
                    setisActive(!isActive);
                  }}
                  role="button"
                  className={`navbar-burger burger ${
                    isActive ? "is-active" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-end ">
                  <Link
                    className="navbar-item is-active"
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleClick}
                  >
                    {home}
                  </Link>
                  <Link
                    className="navbar-item"
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleClick}
                  >
                    {about}
                  </Link>
                  <Link
                    className="navbar-item"
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleClick}
                  >
                    {skill}
                  </Link>
                  <Link
                    className="navbar-item"
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleClick}
                  >
                    {Service}
                  </Link>
                  <Link
                    className="navbar-item"
                    activeClass="active"
                    to="section5"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleClick}
                  >
                    {Portfolio}
                  </Link>
                  <Link
                    className="navbar-item"
                    activeClass="active"
                    to="section6"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleClick}
                  >
                    {contactMe}
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    </div>
  );
};

export default NavBar;
