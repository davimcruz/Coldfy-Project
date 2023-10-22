import React from "react";
import { Element } from "react-scroll";
import Background from "../Background/Background";
import Background2 from "../Background/Background2";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Soluctions from "../Soluctions/Soluctions";
import Projects from "../Projects/Projects";
import Feedback from "../Feedback/Feedback";
import Community from "../Community/Community";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Background />
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
      <Background2 />
    </div>
  );
};

export default Layout;
