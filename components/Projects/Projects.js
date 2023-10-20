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
            <h4>& Experiências Memoráveis</h4>
            <p style={{ fontWeight: 300 }}>
              Comprometida com a satisfação do cliente, garantimos resultados
              excepcionais em todos os aspectos. Conte com a nossa expertise
              para transformar suas ideias em realidade.
            </p>
          </div>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="three-grid w-dyn-items">
            {renderProject(
              "/assets/websites/spacelabs.png",
              "Website",
              "10 de Outubro, 2023",
              "@SpaceLabs",
              "Um site moderno para um Marketplace Gamer. Dashboards, pedidos e mais!",
              "https://spacelabs.vercel.app/dashboard/overview"
            )}
            {renderProject(
              "/assets/icons/dev.png",
              "?",
              "12 de Outubro, 2023",
              "Em Breve...",
              "Futuramente estaremos adicionando novos projetos disponíveis ao público!",
              null
            )}
            {renderProject(
              "/assets/icons/dev.png",
              "?",
              "14 de Outubro, 2023",
              "Em Breve...",
              "Futuramente estaremos adicionando novos projetos disponíveis ao público!",
              null
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const renderProject = (
  imageUrl,
  category,
  date,
  title,
  description,
  websiteUrl
) => (
  <div role="listitem" className="w-dyn-item">
    <div className="card blog-card w-inline-block">
      <div className="blog-image-wrapper mg-bottom-12px">
        <img alt="" loading="lazy" src={imageUrl} className="blog-image" />
      </div>
      <div className="blog-detail-wrapper">
        <div className="blog-category-tag">{category}</div>
        <div className="blog-date">{date}</div>
      </div>
      <h3 className="blog-card-title mg-bottom-12px">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Projects;
