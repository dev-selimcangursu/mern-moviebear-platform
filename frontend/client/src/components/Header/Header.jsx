import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {

  // Localstorage tutulan token ( giriş yapan kjullanıcı )
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // Butona tıklanınca çalışacak fonksiyon
  const handleClick = () => {
    // Eğer token varsa kullanıcı hesabına, yoksa giriş sayfasına yönlendirme
    if (token) {
      navigate("/hesabim");
    } else {
      navigate("/giris-yap");
    }
  };
 // tüm diziler butonuna tıklanınca dizi listesine yönlendirme
  const handleSeriesClick = () => {
    navigate("/diziler");
  };

  return (
    <header id="header">
      <div className="header__logo__area">
        <h3>MovieeBear</h3>
        <button
          className="header__link__button"
          onClick={handleSeriesClick}
        >
          Tüm Diziler
        </button>
      </div>
      <div className="header__action__area">
        <button
          className="header__action__area__button"
          onClick={handleClick}
        >
          {token ? "Hesabım" : "Giriş Yap"}
        </button>
      </div>
    </header>
  );
}

export default Header;
