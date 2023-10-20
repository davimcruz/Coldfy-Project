import React from "react";

const Services = () => {
  const sectionStyle = { marginTop: "-10%" };
  const cardStyle = { height: "85%" };
  const cardContentStyle = { marginTop: "-1rem" };
  const iconStyle = { marginLeft: "0.5rem" };
  const marginStyle = { marginTop: "0.5rem" };

  return (
    <section className="section small" style={sectionStyle}>
      <div className="lp-layout-blockcontainer container lp-container">
        <div className="w-layout-grid three-grid">
          <div
            animation-id="firstServiceAnimation"
            style={cardStyle}
            className="card large"
          >
            <div
              className="card-content-wrapper vertical-w-icon"
              style={cardContentStyle}
            >
              <div className="flex-wrapper---horizontal">
                <i className="fas fa-bolt"></i>
                <h2 className="display-4 mg-bottom-0px" style={iconStyle}>
                  Sistemas Avançados
                </h2>
              </div>
              <p style={marginStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
          </div>

          <div
            animation-id="secondServiceAnimation"
            style={cardStyle}
            className="card large"
          >
            <div
              className="card-content-wrapper vertical-w-icon"
              style={cardContentStyle}
            >
              <div className="flex-wrapper---horizontal">
                <i className="fas fa-key"></i>
                <h2 className="display-4 mg-bottom-0px" style={iconStyle}>
                  Dados Seguros
                </h2>
              </div>
              <p style={marginStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
          </div>

          <div
            animation-id="thirdServiceAnimation"
            style={cardStyle}
            className="card large"
          >
            <div
              className="card-content-wrapper vertical-w-icon"
              style={cardContentStyle}
            >
              <div className="flex-wrapper---horizontal ">
                <i className="fas fa-users"></i>
                <h2 className="display-4 mg-bottom-0px" style={iconStyle}>
                  Suporte Prioritário
                </h2>
              </div>
              <p style={marginStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
