import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function PremiumProtectedRoute({ children }) {
  // Tarayıcı localStorage'dan token ve kullanıcı bilgileri
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("user");
  const navigate = useNavigate();
  // İçeriğin erişim kontrolü tamamlandı mı kontrolü
  const [checked, setChecked] = useState(false);
  // Kullanıcının premium üyeliği var mı?
  const [hasAccess, setHasAccess] = useState(false);
  // Eğer token yoksa erişim yok, kontrol tamamlandı olarak işaretle
  useEffect(() => {
    if (!token) {
      setHasAccess(false);
      setChecked(true);
      return;
    }

    try {
      // userData'yı JSON'a çevir
      const user = JSON.parse(userData);
      // Kullanıcı premium ise erişime izin ver
      if (user?.is_premium) {
        setHasAccess(true);
      } else {
        // Premium değilse bilgilendirme ve yönlendir
        Swal.fire({
          icon: "info",
          title: "Premium Üye Değilsiniz",
          text: "Premium hesap olmadığınız için bu içeriği izleyemiyorsunuz.",
          showCancelButton: true,
          confirmButtonText: "Premium Hesap Al",
          cancelButtonText: "İptal",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/premium-al");
          } else {
            navigate("/hesabim");
          }
        });
      }
    } catch (error) {
      navigate("/giris-yap");
    } finally {
      // Erişim kontrolü tamamlandı olarak işaretle
      setChecked(true);
    }
  }, [token, userData, navigate]);
  // Kontrol bitmeden yükleniyor mesajı göster

  if (!checked) {
    return <div>Yükleniyor...</div>;
  }
  // Token yoksa doğrudan giriş sayfasına yönlendir

  if (!token) {
    return <Navigate to="/giris-yap" />;
  }
  // Eğer erişim yetkisi varsa, çocuk bileşeni (korunan içerik) göster
  if (hasAccess) {
    return children;
  }
  // Erişim yoksa
  return null;
}

export default PremiumProtectedRoute;
