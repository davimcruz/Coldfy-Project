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
          transition: { duration: 0.4, ease: "easeOut" },
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

const Projects = () => {
  const controls = useScrollAnimation();

  return (
    <motion.section
      className="section"
      style={{ marginTop: "-10%" }}
      initial={{ opacity: 0, y: -500, x: 0 }}
      animate={controls}
    >
      <div className="lp-layout-blockcontainer container lp-container">
        <div className="flex-wrapper---blog mg-bottom-64px">
          <div className="text-box _750px">
            <h2 className="display-2">
              Seleção Premium <i className="fas fa-crown"></i>
            </h2>
            <h3>& Experiências Memoráveis</h3>
            <p style={{ fontWeight: 300 }}>
              Comprometida com a satisfação do cliente, garantimos resultados
              excepcionais em todos os aspectos. Conte com a nossa expertise
              para transformar suas ideias em realidade.
            </p>
          </div>
        </div>
        <div className="w-dyn-list">
          <div className="three-grid w-dyn-items">
            {renderProject(
              "/assets/websites/spacelabs.svg",
              "Website",
              "10 de Outubro, 2023",
              "@SpaceLabs",
              "Um site moderno para um Marketplace para a comunidade gamer. Dashboards, pedidos, perfis, e muito mais!",
              "https://spacelabs.vercel.app"
            )}
            {renderProject(
              "/assets/websites/pagamuito.svg",
              "Website Mobile",
              "12 de Outubro, 2023",
              "@PagaMuito.app",
              "WebApp mobile desenvolvido para organização de comunidade, central de notificações e mais!",
              "https://pagamuito.app"
            )}
            {renderProject(
              "/assets/websites/gymcontrol.svg",
              "Website Mobile",
              "14 de Outubro, 2023",
              "@GymControl",
              "WebApp mobile desenvolvido como solução para Academias. Controle de frequência, pontuações, fichas e mais!",
              null
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const renderProject = (imageUrl, category, date, title, description, href) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className="w-dyn-item">
      <div className="card blog-card w-inline-block">
        <div className="blog-image-wrapper mg-bottom-12px">
          <Image
            src={imageUrl}
            alt="Coldfy Projetcs Exhibition Portfolio"
            width={358}
            height={256}
            className="blog-image"
          />
        </div>
        <div className="blog-detail-wrapper">
          <div className="blog-category-tag">{category}</div>
          <div className="blog-date">{date}</div>
        </div>
        <h3 className="blog-card-title mg-bottom-12px">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </a>
);

export default Projects;
