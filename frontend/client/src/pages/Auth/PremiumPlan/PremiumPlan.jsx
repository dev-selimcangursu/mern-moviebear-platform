import React, { useState } from "react";
import "./PremiumPlan.css";
import { useDispatch } from "react-redux";
import { makePremium } from "../../../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function PremiumPlan() {
  // Modal görünürlüğü durumu
  const [showModal, setShowModal] = useState(false);
  // Kart bilgileri
  const [cardInfo, setCardInfo] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Kart bilgileri inputlarında değişiklik olduğunda güncelleme
  const handleInputChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };
  // Satın alma butonuna basıldığında çalışacak fonksiyon
  const handlePurchase = async () => {
    // Redux action'ı dispatch etme
    const result = await dispatch(makePremium(cardInfo));
    // Eğer işlem başarılıysa
    if (result.payload?.success) {
      Swal.fire({
        title: "Ödeme Başarılı",
        text: "Premium üyelik aktif edildi.",
        icon: "success",
        confirmButtonText: "Tamam",
      }).then(() => {
        navigate("/diziler");
      });
    } else {
      // İşlem başarısızsa
      alert(result.payload?.message || "Ödeme başarısız.");
    }
  };

  return (
    <div className="premium-plan-container">
      <div className="premium-card">
        <h1>✨ Premium Üyelik</h1>
        <p className="premium-subtitle">
          Daha fazla özellik, reklamsız deneyim ve öncelikli destek!
        </p>
        <ul className="premium-benefits">
          <li>✔️ Reklamsız kullanım</li>
          <li>✔️ Öncelikli müşteri desteği</li>
          <li>✔️ Ekstra içeriklere erişim</li>
          <li>✔️ Ömür boyu güncellemeler</li>
        </ul>
        <div className="premium-price">
          <span className="price">₺49,90</span>
          <span className="period"> / aylık</span>
        </div>
        <button className="btn-purchase" onClick={() => setShowModal(true)}>
          Premium Hesap Satın Al
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Kart Bilgileri</h2>
            <input
              type="text"
              name="name"
              placeholder="Kart Üzerindeki İsim"
              value={cardInfo.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="number"
              placeholder="Kart Numarası"
              value={cardInfo.number}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="expiry"
              placeholder="Son Kullanma Tarihi (AA/YY)"
              value={cardInfo.expiry}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              value={cardInfo.cvv}
              onChange={handleInputChange}
            />
            <div className="modal-buttons">
              <button className="btn-confirm" onClick={handlePurchase}>
                Satın Al
              </button>
              <button
                className="btn-cancel"
                onClick={() => setShowModal(false)}
              >
                İptal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PremiumPlan;
