import React from "react";
import NavBar from "./Navigation/NavBar";
import HeroSection from "./components/HeroSection";
import "bulma/css/bulma.min.css";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Qualification from "./components/Qualification";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <div>
      <React.Fragment>
        <NavBar />
        <HeroSection />
        <About />
        <Technologies />
        <Qualification />
        <Services />
        <Portfolio />
        <ContactMe />
      </React.Fragment>
    </div>
  );
};

export default App;
