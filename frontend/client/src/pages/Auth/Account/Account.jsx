import React, { useEffect, useState } from "react";
import "./Account.css";
import Header from "../../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// JWT token'ını decode etme fonksiyonu
function parseJwt(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("JWT decode işlemi başarısız:", e);
    return null;
  }
}

function Account() {
  const navigate = useNavigate();
  // Kullanıcı bilgileri
  const [user, setUser] = useState(null);
  // Bileşen yüklendiğinde token kontrolü yap ve kullanıcı bilgilerini ayarla
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        // Token'ı decode et ve user state'ine ata
        const decoded = parseJwt(token);
        setUser({
          name: decoded.name || "İsim yok",
          email: decoded.email || "E-posta yok",
          is_premium: decoded.is_premium || false,
          memberSince: decoded.memberSince || "Bilinmiyor",
        });
      } catch (err) {
        console.error("Token decode edilemedi:", err);
        setUser(null);
      }
    }
  }, []);
  // Çıkış işlemi
  const handleLogout = () => {
    localStorage.removeItem("token");
    Swal.fire({
      icon: "success",
      title: "Çıkış Yapıldı",
      text: "Başarıyla çıkış yaptınız.",
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      navigate("/");
    });
  };
  // Eğer kullanıcı bilgisi yoksa (giriş yapılmamışsa)
  if (!user) {
    return (
      <div className="account-page no-login">
        <div className="no-login-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            alt="Giriş Icon"
            className="no-login-icon"
          />
          <h2>Merhaba! 🤗</h2>
          <p>Hesap bilgilerinize ulaşmak için lütfen giriş yapın.</p>
          <button
            className="btn-login"
            onClick={() => {
              window.location.href = "/giris-yap";
            }}
          >
            Giriş Yap
          </button>
        </div>
      </div>
    );
  }
  // Kullanıcı giriş yaptıysa
  return (
    <div className="account-page">
      <Header />
      <div className="account-container">
        <aside className="account-sidebar">
          <div className="profile-pic">
            <img
              src={`https://i.pravatar.cc/150?u=${user.email}`}
              alt="Profil"
            />
          </div>
          <h2 className="user-name">{user.name}</h2>
          <p className="user-email">{user.email}</p>
          <button className="logout-button" onClick={handleLogout}>
            Çıkış Yap
          </button>
        </aside>

        <main className="account-main">
          <h1>Hesap Bilgileri</h1>

          <section className="subscription-section">
            <h2>Abonelik Durumu</h2>
            {user.is_premium ? (
              <div className="premium-status">
                <span className="premium-badge">Premium Üye</span>
                <p>Harika! Premium üyeliğiniz aktif.</p>
              </div>
            ) : (
              <div className="free-status">
                <span className="free-badge">Ücretsiz Üye</span>
                <p>Premium hesap ayrıcalıklarına sahip olmak için yükseltin.</p>
                <button
                  className="btn-premium"
                  onClick={() => {
                    window.location.href = "/premium-al";
                  }}
                >
                  Premium Hesap Al
                </button>
              </div>
            )}
          </section>

          <section className="account-details">
            <h2>Hesap Detayları</h2>
            <ul>
              <li>
                <strong>İsim:</strong> {user.name}
              </li>
              <li>
                <strong>E-posta:</strong> {user.email}
              </li>
              <li>
                <strong>Abonelik Tipi:</strong>{" "}
                {user.is_premium ? "Premium" : "Ücretsiz"}
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Account;
