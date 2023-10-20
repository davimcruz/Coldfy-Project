import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar w-nav">
      <div className="container navigation lp-container">
        <a href="/" className="logo-brand-block w-nav-brand">
          <h4 className="display-2" style={{ color: "#fff" }}>
            Coldfy.com.br
          </h4>
        </a>

        <div className="nav-content-wrapper right-aligned">
          <nav role="navigation" className="menu-content w-nav-menu">
            <ul role="list" className="nav-menu-list w-list-unstyled">
              <li className="nav-menu-item" style={{ cursor: "pointer" }}>
                <Link to="hero" smooth={true} duration={500}>
                  Home
                </Link>
              </li>

              <li className="nav-menu-item" style={{ cursor: "pointer" }}>
                <Link to="soluctions" smooth={true} duration={500}>
                  Soluções
                </Link>
              </li>

              <li className="nav-menu-item" style={{ cursor: "pointer" }}>
                <Link to="projects" smooth={true} duration={500}>
                  Projetos
                </Link>
              </li>

              <li className="nav-menu-item" style={{ cursor: "pointer" }}>
                <Link to="feedback" smooth={true} duration={500}>
                  Feedback
                </Link>
              </li>

              <li
                className="nav-menu-item"
                style={{ marginLeft: "10%", cursor: "pointer" }}
              >
                <a href="https://api.whatsapp.com/send?phone=SEU_NUMERO_DE_TELEFONE" className="button small nav-button w-nav-menu">
                  Whatsapp
                </a>
              </li>
            </ul>
          </nav>

          <div className="menu-icon-block w-nav-button">
            <div animation-id="navMobileAnimation" className="nav-icon">
              <div className="top-line"></div>
              <div className="middle-line"></div>
              <div className="bottom-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
