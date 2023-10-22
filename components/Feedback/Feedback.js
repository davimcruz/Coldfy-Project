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
              qualidade e compromisso. <br /> Veja o que estão dizendo sobre
              nossa excelência.
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
                      src="/assets/icons/profile-1.svg"
                      alt="Avatar Images Profile 1"
                      height={64}
                      width={64}
                      className="avatar-image"
                    />
                  </div>
                  <div className="avatar-text-block">
                    <div className="avatar-name">Davi M.</div>
                    <div className="avatar-position">@Coldfy</div>
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
                      src="/assets/icons/profile-2.svg"
                      alt="Avatar Images Profile 2"
                      height={64}
                      width={64}
                      className="avatar-image"
                    />
                  </div>
                  <div className="avatar-text-block">
                    <div className="avatar-name">Fabricio A.</div>
                    <div className="avatar-position">@SpaceLabs</div>
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

          <div className="testimonial-mask w-slider-mask" style={{marginTop: "50px"}}>
            <div className="testimonial-slide w-slide">
              <div className="card">
                <div className="w-layout-hflex avatar-block">
                  <div className="avatar">
                    <Image
                      src="/assets/icons/profile-3.svg"
                      alt="Avatar Images Profile 3"
                      height={64}
                      width={64}
                      className="avatar-image"
                    />
                  </div>
                  <div className="avatar-text-block">
                    <div className="avatar-name">Maria S.</div>
                    <div className="avatar-position">@GymControl</div>
                  </div>
                </div>
                <div className="display-4 white">
                  "Experiência Incrível"
                </div>
                <p className="paragraph small">
                  "A Coldfy superou todas as minhas expectativas. Eles transformaram nossa visão em realidade com um design moderno e funcional. Estou muito feliz com os resultados e agradeço à equipe pela dedicação e comprometimento em entregar um projeto excepcional."
                </p>
              </div>
            </div>

            <div className="testimonial-slide w-slide">
              <div className="card">
                <div className="w-layout-hflex avatar-block">
                  <div className="avatar">
                    <Image
                      src="/assets/icons/profile-4.svg"
                      alt="Avatar Images Profile 4"
                      height={64}
                      width={64}
                      className="avatar-image"
                    />
                  </div>
                  <div className="avatar-text-block">
                    <div className="avatar-name">João P.</div>
                    <div className="avatar-position">@PagaMuito</div>
                  </div>
                </div>
                <div className="display-4 white">
                  "Qualidade Inigualável"
                </div>
                <p className="paragraph small">
                  "A Coldfy é a escolha certa quando se trata de qualidade. Eles entregaram um projeto excepcional que superou nossas expectativas em todos os aspectos. Estamos extremamente satisfeitos com o resultado final e recomendamos seus serviços a todos."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Feedback;
