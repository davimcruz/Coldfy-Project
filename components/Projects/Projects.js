import React from "react";

const Projects = () => {
  return (
    <section className="section" style={{ marginTop: "-10%" }}>
      <div className="lp-layout-blockcontainer container lp-container">
        <div className="flex-wrapper---blog mg-bottom-64px">
          <div className="text-box _750px">
            <h2 animation-id="h2h4SelectAnimation" className="display-2">
              Seleção Premium <i className="fas fa-crown"></i>
            </h2>
            <h4 animation-id="h2h4SelectAnimation">
              & Experiências Memoráveis
            </h4>
            <p animation-id="pSelectAnimation" style={{ fontWeight: 300 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo
              atque eveniet ea, deleniti culpa minima nemo pariatur cumque
              provident porro possimus a enim molestiae aspernatur non
              repudiandae. Itaque, architecto?
            </p>
          </div>
          <a
            animation-id="btnSelectAnimation"
            className="button large secondary w-button"
            href="#"
          >
            Todos os Projetos{" "}
            <span>
              <i
                className="fas fa-long-arrow-right"
                style={{ marginLeft: "0.5rem" }}
              ></i>
            </span>
          </a>
        </div>
        <div animation-id="cardSelectAnimation" className="w-dyn-list">
          <div role="list" className="three-grid w-dyn-items">
            {renderProject(
              "https://media.discordapp.net/attachments/1129968852021809223/1163832836822945792/image.png?ex=654102cb&is=652e8dcb&hm=419924647293c0c1ac73197bfa6725768005ea6c0296f39115a31fcd7cd2157b&=",
              "Website",
              "10 de Outubro, 2023",
              "@PalazeServidores",
              "Um site moderno para uma Rede de Servidores (@PalazeServidores) que abrangem Mini-Games inovadores & divertidos!"
            )}
            {renderProject(
              "https://media.discordapp.net/attachments/1129968852021809223/1163833367679213619/image.png?ex=65410349&is=652e8e49&hm=6e0bebcfe493dbd9fc29d6c15ede94f3478f24b26db3d4b06dca30eb8d7ea4d2&==",
              "Website",
              "10 de Outubro, 2023",
              "@PixelmonBrasil",
              "Um site moderno para uma Rede de Servidores (@PixelmonBrasil) que abrangem Mini-Games inovadores & divertidos!"
            )}
            {renderProject(
              "https://media.discordapp.net/attachments/1129968852021809223/1163833561305063425/image.png?ex=65410377&is=652e8e77&hm=50b20b45a798991016c7ce200a2e88f8422feefaed4b87745a2da62c27701f3a&=",
              "Website",
              "10 de Outubro, 2023",
              "@PremiumHost",
              "Site profissional para uma compânia de hospedagens brasileira, site com animações, efeitos & sistemas únicos!"
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const renderProject = (imageUrl, category, date, title, description) => (
  <div role="listitem" className="w-dyn-item">
    <a
      animation-id="aSelectAnimation"
      href="#"
      className="card blog-card w-inline-block"
    >
      <div className="blog-image-wrapper mg-bottom-12px">
        <img alt="" loading="lazy" src={imageUrl} className="blog-image" />
      </div>
      <div className="blog-detail-wrapper">
        <div className="blog-category-tag">{category}</div>
        <div className="blog-date">{date}</div>
      </div>
      <h3 className="blog-card-title mg-bottom-12px">{title}</h3>
      <p>{description}</p>
    </a>
  </div>
);

export default Projects;