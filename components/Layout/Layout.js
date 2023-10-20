import React from "react";
import { Link, Element } from "react-scroll";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Soluctions from "../../components/Soluctions/Soluctions";

import Services from "../../components/ColdfyServices/Services"; //Futuramente adicionar

import Projects from "../../components/Projects/Projects";
import Feedback from "../../components/Feedback/Feedback";
import Community from "../../components/Community/Community";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="soluctions">
        <Soluctions />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="feedback">
        <Feedback />
      </Element>
      <Element name="community">
        <Community />
      </Element>
      <Footer />
    </div>
  );
};

export default Layout;
