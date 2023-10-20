import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const Soluctions = () => {
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
          transition: { duration: 0.4, ease: "easeOut" },
        });
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollY, controls]);

  return (
    <motion.section
      className="section"
      style={{ marginTop: "-5rem" }}
      initial={{ opacity: 0, y: 50, x: -2000 }}
      animate={controls}
    >
      <div className="lp-layout-blockcontainer container lp-container">
        <div>
          <h2 className="display-2">
            Soluções Avançadas <i className="fas fa-newspaper"></i>
          </h2>
          <div>
            <p animation-id="pSolutionAnimation">
              Explore nosso impressionante conjunto de ferramentas inovadoras e
              eficazes, incluindo muito mais. Essas tecnologias de ponta estão à
              disposição para impulsionar o sucesso dos seus projetos e garantir
              resultados excepcionais.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <motion.div
        className="tools-slider-outer-wrapper"
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="tools-slider-wrapper">
          {renderTool(
            "HTML",
            "Criamos a base da web com HTML, a linguagem que estrutura conteúdo online de forma eficaz e versátil",
            "/assets/icons/html.webp"
          )}
          {renderTool(
            "CSS",
            "Dê vida ao design com CSS, a linguagem que estiliza e embeleza websites com precisão e elegância",
            "/assets/icons/css.webp"
          )}
          {renderTool(
            "Next.js",
            "Construímos interfaces incríveis com React, a biblioteca JavaScript que revoluciona o desenvolvimento de front-end",
            "/assets/icons/next.webp"
          )}
          {renderTool(
            "JavaScript",
            "A linguagem essencial para tornar websites dinâmicos, proporcionando interações avançadas e funcionalidade única",
            "/assets/icons/js.webp"
          )}
        </div>
      </motion.div>
    </motion.section>
  );
};

const renderTool = (title, description, imageSrc) => (
  <div className="w-dyn-item">
    <a className="card tools-card w-inline-block">
      {imageSrc && (
        <Image
          alt="Coldfy Web Tools"
          src={imageSrc}
          width={64}
          height={64} 
          className="tools-card---image tools-icon"
        />
      )}
      <h3 className="display-4">{title}</h3>
      <p style={{ fontWeight: 550 }}>{description}</p>
    </a>
  </div>
);

export default Soluctions;
