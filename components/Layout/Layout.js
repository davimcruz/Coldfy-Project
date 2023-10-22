import React from "react";
import { Element } from "react-scroll";
import ScrollToTopOnReload from "../ScrollToTopOnReload";
import Background from "../Background/Background";
import Background2 from "../Background/Background2";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Soluctions from "../Soluctions/Soluctions";
import Projects from "../Projects/Projects";
import Feedback from "../Feedback/Feedback";
import Community from "../Community/Community";
import Footer from "../Footer/Footer";
import Mobile from "../Mobile/Mobile";
import { useMediaQuery } from "react-responsive";

const Layout = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Defina a largura máxima para dispositivos móveis

  return (
    <div>
      {isMobile ? (
        <Mobile />
      ) : (
        <>
          <ScrollToTopOnReload />
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
        </>
      )}
    </div>
  );
};

export default Layout;
