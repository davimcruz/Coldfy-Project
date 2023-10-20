import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";

const useScrollAnimation = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    const section = document.querySelector(".section");
    if (!section) return;

    const sectionTop = section.offsetTop;
    const scrollTrigger = sectionTop - window.innerHeight / 2;

    const onScroll = () => {
      if (scrollY.get() > scrollTrigger) {
        controls.start({
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: 0.3, ease: "easeOut" },
        });
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollY, controls]);

  return controls;
};

const Footer = () => {
  const controls = useScrollAnimation();
  return (
    <motion.section
      className="section footer"
      initial={{ opacity: 0, y: 5000, x: 0 }}
      animate={controls}
    >
      <div className="lp-layout-blockcontainer container lp-container">
        <div className="footer-bottom-row">
          <div className="copyright-block">
            <div className="footer-small-text">
              Coldfy &copy; Copyright 2023 - Todos os Direitos Reservados.
            </div>
          </div>
          <div className="social-media-wrapper">
            <div className="fa-social-icon">
              <a href="#">
                <i className="fab fa-discord"></i>
              </a>
            </div>
            <div className="fa-social-icon">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="fa-social-icon">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="fa-social-icon">
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
