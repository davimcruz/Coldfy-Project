import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Keyboard from "./ImageHero";

const Hero = () => {
  return (
    <section className="section hero v3">
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
                excelência e profundo conhecimento técnico. <br /> Oferecemos
                soluções que transcendem as expectativas dos nossos clientes.
              </motion.p>
            </div>
            <div className="hero-button-wrapper">
              <motion.a
                href="https://api.whatsapp.com/send?phone=62982166830"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }} // Zoom suave ao passar o mouse
                whileTap={{ scale: 0.9 }} // Efeito de clique (opcional)
                className="button w-button font-buttons"
                transition={{ duration: 0.2 }}
                style={{ marginTop: "15px" }}
              >
                Fale Conosco
              </motion.a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <motion.div
              initial={{ opacity: 1, x: -5, y: 0 }}
              animate={{ x: 5, y: 20 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3,
              }}
            >
              <Keyboard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
