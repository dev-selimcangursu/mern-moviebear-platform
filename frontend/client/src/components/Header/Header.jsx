import React from "react";
import "./Header.css";

function Header() {
  return (
    <header id="header">
      <div className="header__logo__area">
        <h3>MovieeBear</h3>
      </div>
      <div className="header__action__area">
        <button className="header__action__area__button">Giriş Yap</button>
      </div>
    </header>
  );
}

export default Header;
