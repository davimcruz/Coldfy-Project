import React from "react";

const Feedback = () => {
  return (
    <section className="section" style={{ marginTop: "-8%" }}>
      <div className="lp-layout-blockcontainer container lp-container">
        <div className="feedMobile">
          <div>
            <h2 animation-id="h2FeedbackAnimation">
              Feedback de Sucesso <i className="fas fa-headphones"></i>
            </h2>
            <p animation-id="pFeedbackAnimation">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
              elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
              interdum nulla, ut
              commodo diam libero vitae erat.
            </p>
          </div>
        </div>
        <br /><br />
        <div data-delay="4000" data-animation="slide" className="testimonial-slider w-slider" data-autoplay="false"
          data-easing="ease" data-hide-arrows="false" data-disable-swipe="false"
          animation-id="pFeedbackAnimation2" data-autoplay-limit="0" data-nav-spacing="3"
          data-duration="500" data-infinite="true">
          <div className="testimonial-mask w-slider-mask">
            <div className="testimonial-slide w-slide">
              <div className="card">
                <div className="display-4 dark">
                  "Inovação e Qualidade Impecável"
                </div>
                <p className="paragraph small">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
                  purus ultrices, molestie quam ut, convallis ex. Etiam erat mi, bibendum nec velit sed, egestas maximus
                  ex. Donec ullamcorper augue a lectus tincidunt convallis. Nunc vel risus est. Nunc id hendrerit elit, at
                  tristique odio. Nunc eget lectus hendrerit."
                </p>
                <div className="w-layout-hflex avatar-block">
                  <div className="avatar">
                    <img
                      src="https://pps.whatsapp.net/v/t61.24694-24/375881782_1108995397150045_4274546811527903524_n.jpg?ccb=11-4&oh=01_AdQj0OnIgYq0-gKwuzK5nLdVPWBiPqwZcBoORwaVB2Dviw&oe=6533AC7E&_nc_sid=000000&_nc_cat=110"
                      className="avatar-image"
                    />
                  </div>
                  <div className="avatar-text-block">
                    <div className="avatar-name">
                      Davi M.
                    </div>
                    <div className="avatar-position">
                      CEO @PalazeServidores
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-slide w-slide">
              <div className="card">
                <div className="display-4 dark">
                  "Minha Visão em Realidade"
                </div>
                <p className="paragraph small">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
                  purus ultrices, molestie quam ut, convallis ex. Etiam erat mi, bibendum nec velit sed, egestas maximus
                  ex. Donec ullamcorper augue a lectus tincidunt convallis. Nunc vel risus est. Nunc id hendrerit elit, at
                  tristique odio. Nunc eget lectus hendrerit. Lorem ipsum dolor sit amet."
                </p>
                <div className="w-layout-hflex avatar-block">
                  <div className="avatar">
                    <img
                      src="https://pps.whatsapp.net/v/t61.24694-24/328152360_231552089600339_1027156331676838146_n.jpg?ccb=11-4&oh=01_AdSLEybNdVW4hrcFB9r18qezS77QJQ1DKP6Su7t5IJRnCQ&oe=653392C8&_nc_sid=000000&_nc_cat=106"
                      className="avatar-image"
                    />
                  </div>
                  <div className="avatar-text-block">
                    <div className="avatar-name">
                      Fabricio A.
                    </div>
                    <div className="avatar-position">
                      CEO @PremiumHost
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-arrow-wrapper---testimonial left w-slider-arrow-left">
            <div className="fa-icon-solid testimonial">
              
            </div>
          </div>
          <div className="slider-arrow-wrapper---testimonial w-slider-arrow-right">
            <div className="fa-icon-solid testimonial">
              
            </div>
          </div>
          <div className="display-hidden w-slider-nav w-round w-num"></div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
