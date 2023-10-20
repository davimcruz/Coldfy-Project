import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="section hero v1">
      <div className="lp-layout-blockcontainer container lp-container">
        <div className="w-layout-grid _2-grid hero-v2">
          <div className="grid-column">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="display-1 hero-v2"
              >
                Construindo Sucesso Online
                <motion.span
                  style={{ fontSize: "28px" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  ,{" "}
                </motion.span>{" "}
                Site a Site.{" "}
                <motion.i
                  style={{ color: "#fff" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                ></motion.i>{" "}
              </motion.h1>
            </div>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                animate={{ opacity: 1, y: 0 }}
                className="paragraph large"
              >
                Conectamos negócios ao mundo digital com nosso web design de
                excelência e profundo conhecimento técnico. Oferecemos soluções
                que transcendem as expectativas dos nossos clientes.
              </motion.p>
            </div>
            <div
              animation-id="btnHeroAnimation"
              className="hero-button-wrapper"
            >
              <motion.a
                href="#"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }} // Zoom suave ao passar o mouse
                whileTap={{ scale: 0.9 }} // Efeito de clique (opcional)
                className="button w-button font-buttons"
                transition={{ duration: 0.2 }}
              >
                Fale Conosco
              </motion.a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/assets/icons/bsvg.svg"
                alt="Coldfy Hero Brackets"
                priority={true}
                width={400} 
                height={400} 
                style={{ width: "70%", marginLeft: "25%", fill: "#fff" }}
                className="hero-image-v2"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
