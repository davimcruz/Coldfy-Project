import React from "react";

const Soluctions = () => {
  return (
    <section className="section" style={{ marginTop: "-5rem" }}>
      <div className="lp-layout-blockcontainer container lp-container">
        <div>
          <h2 animation-id="h2SolutionAnimation" className="display-2">
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
      <div animation-id="toolsAnimation" className="tools-slider-outer-wrapper">
        <div className="tools-slider-list w-dyn-list">
          <div role="list" className="tools-slider-wrapper w-dyn-items">
            {renderTool(
              "HTML",
              "Criamos a base da web com HTML, a linguagem que estrutura conteúdo online de forma eficaz e versátil",
              "https://portfolio-rafael-souza.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png"
            )}
            {renderTool(
              "CSS",
              "Dê vida ao design com CSS, a linguagem que estiliza e embeleza websites com precisão e elegância",
              "https://portfolio-rafael-souza.vercel.app/static/media/css.69a82c2d9e45c933a9cb.png"
            )}
            {renderTool(
              "Next.js",
              "Construímos interfaces incríveis com React, a biblioteca JavaScript que revoluciona o desenvolvimento de front-end",
              "https://portfolio-rafael-souza.vercel.app/static/media/nextjs.48ddc8121a0fcb543d64.png"
            )}
            {renderTool(
              "JavaScript",
              "A linguagem essencial para tornar websites dinâmicos, proporcionando interações avançadas e funcionalidade única",
              "https://portfolio-rafael-souza.vercel.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png"
            )}
          </div>
        </div>
        <div className="tools-slider-list w-dyn-list">
          <div role="list" className="tools-slider-wrapper w-dyn-items">
            {renderTool(
              "HTML",
              "Criamos a base da web com HTML, a linguagem que estrutura conteúdo online de forma eficaz e versátil",
              "https://portfolio-rafael-souza.vercel.app/static/media/html.2ba4fabc69a89a8f71e6.png"
            )}
            {renderTool(
              "CSS",
              "Dê vida ao design com CSS, a linguagem que estiliza e embeleza websites com precisão e elegância",
              "https://portfolio-rafael-souza.vercel.app/static/media/css.69a82c2d9e45c933a9cb.png"
            )}
            {renderTool(
              "Next.js",
              "Construímos interfaces incríveis com React, a biblioteca JavaScript que revoluciona o desenvolvimento de front-end",
              null
            )}
            {renderTool(
              "JavaScript",
              "A linguagem essencial para tornar websites dinâmicos, proporcionando interações avançadas e funcionalidade única",
              "/public/assets/icons/js.png"
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const renderTool = (title, description, imageSrc) => (
  <div role="listitem" className="w-dyn-item">
    <a className="card tools-card w-inline-block">
      {imageSrc && (
        <img
          alt=""
          loading="lazy"
          src={imageSrc}
          className="tools-card---image tools-icon"
        />
      )}
      <h3 className="display-4">{title}</h3>
      <p style={{ fontWeight: 550 }}>{description}</p>
    </a>
  </div>
);

export default Soluctions;
