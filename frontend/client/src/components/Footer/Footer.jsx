import React, { useState } from "react";
import TermsAndConditions from "./components/TermsAndConditionsModal/TermsAndConditions.jsx";
import PreInfoForm from "./components/PreInfoFormModal/PreInfoForm.jsx";
import LegalContact from "./components/LegalContractModal/LegalContract.jsx";
import PrivacyPolicy from "./components/PrivacyPolicyModal/PrivacyPolicy.jsx";
import CookiePreferences from "./components/CookiePreferencesModal/CookiePreferences.jsx";

import "./Footer.css";

function Footer() {
  const [modals, setModals] = useState({
    terms: false,
    preInfo: false,
    legal: false,
    privacy: false,
    cookies: false,
  });

  const openModal = (type) => {
    setModals({ ...modals, [type]: true });
  };

  const closeModal = (type) => {
    setModals({ ...modals, [type]: false });
  };

  return (
<>
    <div className="footer">
      <div className="footer__copyright__area">
        <p>© 2025 MovieeBear, Tüm hakları Saklıdır</p>
      </div>

      <div className="footer__action__area">
        <button onClick={() => openModal("terms")}>Mesafeli Satış Sözleşmesi</button>
        <button onClick={() => openModal("preInfo")}>Ön Bilgilendirme Formu</button>
        <button onClick={() => openModal("legal")}>Kullanım Şartları</button>
        <button onClick={() => openModal("privacy")}>Gizlilik</button>
        <button onClick={() => openModal("cookies")}>Çerez Tercihleri</button>
      </div>
    </div>

      <TermsAndConditions
        isModalOpen={modals.terms}
        handleOk={() => closeModal("terms")}
        handleCancel={() => closeModal("terms")}
      />

      <PreInfoForm
        isModalOpen={modals.preInfo}
        handleOk={() => closeModal("preInfo")}
        handleCancel={() => closeModal("preInfo")}
      />

      <LegalContact
        isModalOpen={modals.legal}
        handleOk={() => closeModal("legal")}
        handleCancel={() => closeModal("legal")}
      />

      <PrivacyPolicy
        isModalOpen={modals.privacy}
        handleOk={() => closeModal("privacy")}
        handleCancel={() => closeModal("privacy")}
      />

      <CookiePreferences
        isModalOpen={modals.cookies}
        handleOk={() => closeModal("cookies")}
        handleCancel={() => closeModal("cookies")}
      />
</>
  );
}

export default Footer;
