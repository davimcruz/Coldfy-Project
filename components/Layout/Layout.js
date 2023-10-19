import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Soluctions from "../../components/Soluctions/Soluctions";
import Services from "../../components/ColdfyServices/Services";
import Projects from "../../components/Projects/Projects";
import Feedback from "../../components/Feedback/Feedback";
import Community from "../../components/Community/Community";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Soluctions />
      <Services />
      <Projects />
      <Feedback />
      <Community />
      <Footer />
    </div>
  );
};

export default Layout