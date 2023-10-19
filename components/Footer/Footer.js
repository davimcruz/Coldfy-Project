import React from "react";

const Footer = () => {
  return (
    <section className="section footer">
      <div animation-id="footerAnimation" className="lp-layout-blockcontainer container lp-container">
        <div className="footer-bottom-row">
          <div className="copyright-block">
            <div className="footer-small-text">
              Coldfy &copy; Copyright 2023 - Todos os Direitos Reservados.
            </div>
          </div>
          <div className="social-media-wrapper">
            <div className="fa-social-icon">
              <a href="#">
                <i className="fab fa-discord"></i>
              </a>
            </div>
            <div className="fa-social-icon">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="fa-social-icon">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="fa-social-icon">
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
