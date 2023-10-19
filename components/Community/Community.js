import React from "react";

const Community = () => {
  return (
    <section className="section mg-0px">
      <div
        animation-id="communityAnimation"
        className="lp-layout-blockcontainer container lp-container"
      >
        <div className="card large cta">
          <h2 className="display-3 mg-bottom-0px">
            Especial, Único & Inovador. Entre na Comunidade.{" "}
            <i className="fas fa-bullseye"></i>{" "}
          </h2>
          <div className="grid-column" style={{ marginLeft: "50%" }}>
            <a href="#" className="button large w-button">
              Junte-se à Comunidade!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
