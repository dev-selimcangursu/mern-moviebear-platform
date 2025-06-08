import React from "react";
import "./MainContent.css";
import PrimaryButton from "../../../../components/UI/PrimaryButton/PrimaryButton.jsx";
import PrimaryInput from "../../../../components/UI/PrimaryInput/PrimaryInput.jsx";
import Header from "../../../../components/Header/Header.jsx";

function MainContent() {
  return (
    <div className="main__content">
      <Header />
      <div className="main__content__wrapper">
        <h1 className="main__content__title">
          Sınırsız film, dizi ve çok daha fazlası.
        </h1>
        <p className="main__content__description">
          Aylık sadece <strong>189,99 TL</strong>. İstediğiniz zaman iptal edebilirsiniz.
        </p>
        <small className="main__content__small">İzlediğine Değsin!</small>
        <form className="main__content__form">
          <PrimaryInput
            className="main__content__input"
            placeholder="E-posta adresinizi girin"
          />
          <PrimaryButton className="main__content__button">
            Üye Ol
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}

export default MainContent;
