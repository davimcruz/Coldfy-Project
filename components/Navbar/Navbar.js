import React from "react";

const Navbar = () => {

  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="300"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
    >
      <div className="container navigation lp-container">
        <a href="#" className="logo-brand-block w-nav-brand">
          <h4 className="display-2" style={{ color: '#fff' }}>
            Coldfy
          </h4>
        </a>

        <div className="nav-content-wrapper right-aligned">
          <nav role="navigation" className="menu-content w-nav-menu">
            <ul role="list" className="nav-menu-list w-list-unstyled">
              <li className="nav-menu-item">
                <a href="#" className="navlink w-nav-link">
                  Casa
                </a>
              </li>

              <li className="nav-menu-item">
                <a href="#" className="navlink w-nav-link">
                  Sobre
                </a>
              </li>

              <li className="nav-menu-item">
                <a href="#" className="navlink w-nav-link">
                  Projetos
                </a>
              </li>

              <li className="nav-menu-item">
                <a href="#" className="navlink w-nav-link">
                  FAQ
                </a>
              </li>

              <li className="nav-menu-item ">
                <a href="#" className="navlink w-nav-link ">
                  Contato
                </a>
              </li>

              <li className="nav-menu-item" style={{ marginLeft: '10%' }}>
                <a href="#" className="button small nav-button w-nav-menu">
                  Comunidade
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
