import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const navbarVariants = {
    hidden: { opacity: 0, y: -500 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      className="navbar-wrapper"
      style={{
        position: "sticky",
        width: "100%",
        top: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.div
        className="navbar w-nav"
        variants={navbarVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <div className="container navigation lp-container">
          <div className="nav-content-wrapper">
            <nav role="navigation" className="menu-content w-nav-menu">
              <ul className="nav-menu-list w-list-unstyled">
                <li className="nav-menu-item" style={{ cursor: "pointer" }}>
                  <Link href="/"  o="hero" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>

                <li className="nav-menu-item" style={{ cursor: "pointer" }}>
                  <Link href="/" to="soluctions" smooth={true} duration={500}>
                    Soluções
                  </Link>
                </li>

                <li className="nav-menu-item" style={{ cursor: "pointer" }}>
                  <Link href="/" to="projects" smooth={true} duration={500}>
                    Projetos
                  </Link>
                </li>

                <li className="nav-menu-item" style={{ cursor: "pointer" }}>
                  <Link href="/" to="feedback" smooth={true} duration={500}>
                    Feedback
                  </Link>
                </li>

                <li
                  className="nav-menu-item"
                  style={{ marginLeft: "10%", cursor: "pointer" }}
                >
                  <motion.a
                    href="https://api.whatsapp.com/send?phone=62982166830"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="button small nav-button w-nav-menu"
                  >
                    Whatsapp
                  </motion.a>
                </li>
              </ul>
            </nav>

            <div className="menu-icon-block w-nav-button">
              <div animation-id="navMobileAnimation" className="nav-icon">
                <div className="top-line"></div>
                <div className="middle-line"></div>
                <div className="bottom-line"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
