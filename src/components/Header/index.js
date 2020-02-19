import React from 'react';

import './styles.css';

function Header() {
  return(
    <header>
      <nav>
        <img src="https://i.imgur.com/KDIDiSE.png" />
        <div id="perfil">
          <span>Meu perfil</span>
          <i className="material-icons md-light">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;