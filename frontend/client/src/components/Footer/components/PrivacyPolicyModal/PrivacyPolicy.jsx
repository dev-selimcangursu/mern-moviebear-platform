import React from "react";
import { Modal } from "antd";

function PrivacyPolicy({ isModalOpen, handleOk, handleCancel }) {
  return (
    <Modal
      title="Gizlilik Politikası"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width={700}
      okText="Kapat"
      okButtonProps={{
        style: {
          border: "2px solid #28a745",
          color: "#28a745",
          backgroundColor: "transparent",
          fontWeight: "600",
        },
      }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <div
        style={{
          maxHeight: "400px",
          overflowY: "auto",
          whiteSpace: "pre-line",
        }}
      >
        <p>
          MovieBear olarak, kullanıcılarımızın gizliliğine ve kişisel verilerinin korunmasına büyük önem veriyoruz. Bu Gizlilik Politikası, platformumuzu kullanırken hangi verilerin toplandığını, nasıl işlendiğini, ne amaçla kullanıldığını ve kullanıcı haklarını açıklamaktadır.
        </p>

        <h3>1. Toplanan Bilgiler</h3>
        <p>
          Kullanıcılarımızdan isim, e-posta adresi, IP bilgisi, fatura bilgileri, ödeme yöntemleri ve cihaz bilgileri gibi çeşitli kişisel veriler toplanabilir. Bu veriler, yalnızca hizmet kalitesini artırmak ve kullanıcı deneyimini iyileştirmek amacıyla kullanılır.
        </p>

        <h3>2. Verilerin Kullanım Amaçları</h3>
        <p>
          Toplanan kişisel veriler; kullanıcı hesabının oluşturulması, ödeme işlemlerinin gerçekleştirilmesi, içerik önerilerinin kişiselleştirilmesi, teknik destek sağlanması ve yasal yükümlülüklerin yerine getirilmesi gibi amaçlarla kullanılır.
        </p>

        <h3>3. Çerezler ve Takip Teknolojileri</h3>
        <p>
          Platformumuzda kullanıcı deneyimini geliştirmek amacıyla çerezler (cookies) ve benzeri teknolojiler kullanılır. Kullanıcılar tarayıcı ayarları üzerinden çerez kullanımını kontrol edebilir veya devre dışı bırakabilir.
        </p>

        <h3>4. Üçüncü Taraflarla Paylaşım</h3>
        <p>
          Kişisel veriler, yalnızca hizmetin sunulabilmesi ve yasal yükümlülüklerin yerine getirilmesi amacıyla güvenilir üçüncü taraflarla paylaşılır. Hiçbir koşulda ticari amaçlarla satılmaz veya izinsiz olarak paylaşılmaz.
        </p>

        <h3>5. Veri Güvenliği</h3>
        <p>
          Verilerin gizliliğini ve bütünlüğünü sağlamak adına en güncel teknik ve idari güvenlik önlemleri uygulanmaktadır. Yetkisiz erişim, veri kaybı veya kötüye kullanım riskine karşı koruma sağlanır.
        </p>

        <h3>6. Kullanıcı Hakları</h3>
        <p>
          Kullanıcılar, kendilerine ait kişisel veriler üzerinde erişim, düzeltme, silme, işleme itiraz etme ve veri taşınabilirliği haklarına sahiptir. Bu hakların kullanımı için bizimle iletişime geçebilirsiniz.
        </p>

        <h3>7. Değişiklikler</h3>
        <p>
          Bu gizlilik politikası, yasal düzenlemeler veya platformdaki değişikliklere bağlı olarak güncellenebilir. Güncel politikaya her zaman platform üzerinden erişebilirsiniz.
        </p>

        <p>
          <strong>
            MovieBear platformunu kullanarak, Gizlilik Politikası'nı okuduğunuzu ve kabul ettiğinizi beyan etmiş olursunuz.
          </strong>
        </p>
      </div>
    </Modal>
  );
}

export default PrivacyPolicy;
