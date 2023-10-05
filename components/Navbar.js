import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="/assets/logo.png" alt="Logo da Empresa" />
        </a>
      </div>
      <div className="navbar-menu">
        <a href="/pagina1">Página 1</a>
        <a href="/pagina2">Página 2</a>
        <a href="/pagina3">Página 3</a>
      </div>
    </nav>
  );
}

export default Navbar;
