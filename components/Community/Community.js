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

const Community = () => {
  const controls = useScrollAnimation();
  return (
    <motion.section
      className="mg-0px"
      initial={{ opacity: 0, y: 5000, x: 0 }}
      animate={controls}
    >
      <div
        animation-id="communityAnimation"
        className="lp-layout-blockcontainer container lp-container"
      >
        <div className="card large cta">
          <h2 className="display-3 mg-bottom-0px">
            Especial, Único & Inovador. Entre na Comunidade.{" "}
            <i className="fas fa-bullseye"></i>{" "}
          </h2>
          <div className="grid-column" style={{ marginLeft: "50%" }}>
            <a href="#" className="button large w-button">
              Entre em Contato!
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Community;
