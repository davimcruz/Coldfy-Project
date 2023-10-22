import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

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
          transition: { duration: 0.5, ease: "easeOut" },
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

const Feedback = () => {
  const controls = useScrollAnimation();
  return (
    <motion.section
      className="section"
      style={{ marginTop: "-8%" }}
      initial={{ opacity: 0, y: 0, x: 2000 }}
      animate={controls}
    >
      <div className="lp-layout-blockcontainer container lp-container">
        <div className="feedMobile">
          <div>
            <h2>
              Feedback de Sucesso <i className="fas fa-headphones"></i>
            </h2>
            <p>
              Feedbacks incríveis! Nossos clientes adoram nossa dedicação,
              qualidade e compromisso. Veja o que estão dizendo sobre nossa
              excelência.
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="testimonial-slider w-slider">
          <div className="testimonial-mask w-slider-mask">
            <div className="testimonial-slide w-slide">
              <div className="card">
                <div className="w-layout-hflex avatar-block">
                  <div className="avatar">
                    <Image
                      src="/assets/icons/profile-1.webp"
                      alt="Avatar Images Coldfy"
                      height={64}
                      width={64}
                      className="avatar-image"
                    />
                  </div>
                  <div className="avatar-text-block">
                    <div className="avatar-name">Davi M.</div>
                    <div className="avatar-position">CEO @Coldfy</div>
                  </div>
                </div>
                <div className="display-4 white">
                  "Comprometimento Com a Qualidade"
                </div>
                <p className="paragraph small">
                  "Cada projeto que abraçamos é uma promessa de excelência,
                  criatividade e inovação. Estamos dedicados a transformar
                  ideias em experiências notáveis, proporcionando resultados que
                  superam as expectativas. Não medimos esforços para garantir
                  que cada projeto seja uma história de triunfo compartilhada
                  entre nós."
                </p>
              </div>
            </div>
            <div className="testimonial-slide w-slide">
              <div className="card">
                <div className="w-layout-hflex avatar-block">
                  <div className="avatar">
                    <Image
                      src="/assets/icons/profile-2.webp"
                      alt="Avatar Images Spacelabs"
                      height={64}
                      width={64}
                      className="avatar-image"
                    />
                  </div>
                  <div className="avatar-text-block">
                    <div className="avatar-name">Fabricio A.</div>
                    <div className="avatar-position">CEO @SpaceLabs</div>
                  </div>
                </div>

                <div className="display-4 white">
                  "Minha Visão em Realidade"
                </div>
                <p className="paragraph small">
                  "A Coldfy entregou um site que capturou perfeitamente minha
                  visão. A equipe foi ágil, amigável e comprometida em oferecer
                  qualidade excepcional. Recebo elogios constantes pelo design e
                  funcionalidade do meu site. Estou profundamente agradecido
                  pelo impacto positivo que isso teve nos meus negócios e na
                  minha marca."
                </p>
              </div>
            </div>
          </div>

          <div className="display-hidden w-slider-nav w-round w-num"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Feedback;
