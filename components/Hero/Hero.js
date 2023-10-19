import React from "react";

const Hero = () => {
  return (
    <section className="section hero v1">
      <div className="lp-layout-blockcontainer container lp-container">
        <div className="w-layout-grid _2-grid hero-v2">
          <div className="grid-column">
            <div>
              <h1 animation-id="h1HeroAnimation" className="display-1 hero-v2">
                Construindo Sucesso Online
                <span style={{ fontSize: "28px" }}>, </span> Site a Site.{" "}
                <i className="fas fa- " style={{ color: "#fff" }}></i>{" "}
              </h1>
            </div>
            <div>
              <p animation-id="pHeroAnimation" className="paragraph large">
                Conectamos negócios ao mundo digital com nosso web design de
                excelência e profundo conhecimento técnico. Oferecemos soluções
                que transcendem as expectativas dos nossos clientes.
              </p>
            </div>
            <div
              animation-id="btnHeroAnimation"
              className="hero-button-wrapper"
            >
              <a href="#" className="button w-button font-buttons ">
                Fale Conosco
              </a>

            </div>
          </div>
          <div className="hero-image-wrapper">
            <img
              className="hero-image-v2"
              src="/assets/websites/example.png"
              style={{ width: "100%", marginLeft: "25%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
