import React from "react";
import { Modal } from "antd";

function CookiePreferences({ isModalOpen, handleOk, handleCancel }) {
  return (
    <Modal
      title="Çerez Tercihleri"
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
          MovieBear olarak, dijital platformumuzda kullanıcı deneyimini
          geliştirmek, hizmetlerimizi kişiselleştirmek, istatistiksel analizler
          gerçekleştirmek ve reklam/pazarlama faaliyetlerini optimize etmek
          amacıyla çerezlerden ve benzeri teknolojilerden faydalanmaktayız. Bu
          politika, hangi tür çerezlerin ne şekilde kullanıldığını ve
          kullanıcıların çerez tercihlerini nasıl yönetebileceklerini
          açıklamaktadır.
        </p>

        <h3>1. Çerez Nedir?</h3>
        <p>
          Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınız
          aracılığıyla cihazınıza yerleştirilen küçük veri dosyalarıdır. Bu
          dosyalar, sitenin sizi tanımasını sağlar ve oturum yönetimi, kullanıcı
          tercihlerini hatırlama, istatistik oluşturma gibi işlevleri yerine
          getirir.
        </p>

        <h3>2. Kullanılan Çerez Türleri</h3>
        <p>Web sitemizde aşağıdaki çerez türleri kullanılmaktadır:</p>
        <ul>
          <li>
            <strong>Zorunlu Çerezler:</strong> Web sitemizin çalışması için
            gerekli olan çerezlerdir. Oturum açma, güvenlik ve form doldurma
            gibi temel işlevleri sağlar.
          </li>
          <li>
            <strong>İşlevsellik Çerezleri:</strong> Tercihlerinizin (dil seçimi,
            görüntü ayarları vb.) hatırlanmasını sağlar ve kullanıcı deneyimini
            kişiselleştirir.
          </li>
          <li>
            <strong>Performans ve Analitik Çerezler:</strong> Web sitemizin
            nasıl kullanıldığını analiz ederek performans iyileştirmelerine
            yardımcı olur. Bu çerezler kimliğinizi doğrudan tanımlamaz.
          </li>
          <li>
            <strong>Hedefleme ve Reklam Çerezleri:</strong> İlgi alanlarınıza
            uygun içerik ve reklam sunmak amacıyla kullanılır. Üçüncü taraf
            reklam ağlarıyla paylaşılabilir.
          </li>
        </ul>

        <h3>3. Çerezlerin Kullanım Amaçları</h3>
        <p>Çerezler, aşağıdaki amaçlarla kullanılmaktadır:</p>
        <ul>
          <li>
            Kullanıcının platform üzerinde oturumunu sürdürmesini sağlamak,
          </li>
          <li>Sunduğumuz hizmetleri daha etkin ve güvenli hale getirmek,</li>
          <li>Kullanıcı deneyimini geliştirmek ve kişiselleştirmek,</li>
          <li>
            İstatistiksel bilgiler elde ederek sistem performansını ölçmek,
          </li>
          <li>
            Reklam kampanyalarını daha etkili yönetmek ve kullanıcıya özel
            teklifler sunmak.
          </li>
        </ul>

        <h3>4. Üçüncü Taraf Çerezler</h3>
        <p>
          MovieBear platformu, Google Analytics, Facebook Pixel gibi üçüncü
          taraf hizmet sağlayıcıların çerezlerini kullanabilir. Bu çerezler
          sayesinde kullanıcı davranışları analiz edilerek platform deneyimi
          geliştirilebilir. Üçüncü taraflara ait bu çerezlerin yönetimi, ilgili
          sağlayıcıların politikalarına tabidir.
        </p>

        <h3>5. Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?</h3>
        <p>
          Çoğu tarayıcı, çerezleri otomatik olarak kabul edecek şekilde
          ayarlanmıştır. Ancak dilerseniz, tarayıcı ayarlarınızdan çerezleri
          tamamen engelleyebilir, belirli çerez türlerine izin verebilir veya
          mevcut çerezleri silebilirsiniz. Çerezleri devre dışı bırakmanız,
          platformun bazı bölümlerinin düzgün çalışmamasına neden olabilir.
        </p>

        <h3>6. Kişisel Verilerin Korunması</h3>
        <p>
          Çerezler aracılığıyla toplanan veriler, 6698 sayılı Kişisel Verilerin
          Korunması Kanunu (KVKK) ve Genel Veri Koruma Tüzüğü (GDPR) hükümlerine
          uygun olarak işlenmektedir. Kişisel verilerinize ilişkin haklarınızı
          kullanmak veya detaylı bilgi almak için{" "}
          <strong>info@moviebear.com</strong> adresinden bizimle iletişime
          geçebilirsiniz.
        </p>

        <h3>7. Güncellemeler</h3>
        <p>
          Bu Çerez Politikası, yasal mevzuat değişiklikleri veya hizmetlerimizde
          yapılan güncellemeler doğrultusunda zaman zaman revize edilebilir. En
          güncel versiyona web sitemiz üzerinden her zaman ulaşabilirsiniz.
        </p>

        <p>
          <strong>
            MovieBear platformunu kullanmaya devam ederek, çerez kullanımımıza
            ilişkin politikamızı kabul etmiş sayılırsınız. Tercihlerinizi
            istediğiniz zaman değiştirebilirsiniz.
          </strong>
        </p>
      </div>
    </Modal>
  );
}

export default CookiePreferences;
