import React from "react";
import { Modal } from "antd";

function LegalContact({ isModalOpen, handleOk, handleCancel }) {
  return (
    <Modal
      title="Kullanım Şartları"
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
          MovieBear Dijital Platformu (“MovieBear”, “biz”, “şirket”) olarak,
          kullanıcılarımızın gizliliğini korumak ve kişisel verilerini şeffaf
          bir şekilde işlemek önceliklerimiz arasındadır. İşbu Gizlilik
          Politikası; platformumuzu kullanan bireylerin kişisel verilerinin
          hangi yöntemlerle toplandığını, işlendiğini, saklandığını, kimlerle
          paylaşıldığını ve bu verilere ilişkin haklarını açıklamayı
          amaçlamaktadır.
        </p>

        <h3>1. Kapsam</h3>
        <p>
          Bu Gizlilik Politikası, www.moviebear.com alan adı ve alt alan adları
          ile mobil uygulamalar üzerinden sunulan tüm hizmetlerimizi
          kapsamaktadır. Platformu kullanan tüm kullanıcılar, bu politikanın
          koşullarını okumuş ve kabul etmiş sayılır.
        </p>

        <h3>2. Toplanan Veriler</h3>
        <p>
          MovieBear, kullanıcılarından aşağıdaki veri türlerini toplayabilir:
          <ul>
            <li>Kimlik bilgileri (ad, soyad, doğum tarihi vb.)</li>
            <li>İletişim bilgileri (e-posta adresi, telefon numarası vb.)</li>
            <li>
              Giriş ve işlem verileri (IP adresi, oturum bilgileri, işlem
              geçmişi)
            </li>
            <li>Fatura ve ödeme bilgileri</li>
            <li>Cihaz ve bağlantı verileri</li>
            <li>Çerez (cookie) verileri ve kullanıcı tercihleri</li>
          </ul>
        </p>

        <h3>3. Veri Toplama Yöntemleri</h3>
        <p>
          Kişisel verileriniz; platforma kayıt olurken, hizmetlerimizi
          kullanırken, ödeme yaparken, destek talepleri gönderdiğinizde veya
          çerez teknolojileri aracılığıyla otomatik ya da kullanıcı tarafından
          sağlanan yollarla toplanabilir.
        </p>

        <h3>4. Verilerin İşlenme Amaçları</h3>
        <p>
          Toplanan kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması
          Kanunu (“KVKK”) ve ilgili mevzuata uygun olarak şu amaçlarla
          işlenebilir:
          <ul>
            <li>Hizmetin sunulması ve üyelik işlemlerinin yürütülmesi</li>
            <li>Ödeme işlemlerinin gerçekleştirilmesi</li>
            <li>Teknik destek ve müşteri ilişkileri yönetimi</li>
            <li>İçeriklerin kişiselleştirilmesi ve öneri sunulması</li>
            <li>İstatistiksel analizler ve iyileştirme çalışmaları</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>
        </p>

        <h3>5. Üçüncü Taraflarla Paylaşım</h3>
        <p>
          Kişisel verileriniz; yalnızca hizmetin gereği doğrultusunda iş
          ortaklarımız, ödeme sağlayıcılarımız, hukuki danışmanlarımız ve
          yetkili kamu kurumlarıyla paylaşılabilir. Verileriniz hiçbir şekilde
          üçüncü şahıslara ticari amaçla satılmaz veya pazarlanmaz.
        </p>

        <h3>6. Çerez (Cookie) Kullanımı</h3>
        <p>
          Platformumuzda kullanıcı deneyimini geliştirmek, tercihleri hatırlamak
          ve analiz yapmak amacıyla çerezler kullanılmaktadır. Çerez kullanımı
          konusunda detaylı bilgiye Çerez Politikamızdan ulaşabilir, tarayıcı
          ayarlarınız üzerinden çerezleri kontrol edebilirsiniz.
        </p>

        <h3>7. Veri Güvenliği</h3>
        <p>
          MovieBear, kişisel verilerinizi yetkisiz erişime, kayba, bozulmaya ve
          kötüye kullanıma karşı korumak adına gerekli tüm teknik ve idari
          güvenlik önlemlerini almaktadır. Verileriniz güvenli sunucularımızda
          şifrelenmiş şekilde saklanır.
        </p>

        <h3>8. Saklama Süresi</h3>
        <p>
          Kişisel veriler, mevzuat tarafından öngörülen süre boyunca veya işleme
          amacının gerektirdiği süre boyunca saklanır. Süre sona erdiğinde,
          veriler periyodik olarak anonim hale getirilir veya güvenli bir
          şekilde silinir.
        </p>

        <h3>9. Kullanıcı Hakları</h3>
        <p>
          KVKK kapsamında, veri sahipleri olarak aşağıdaki haklara sahipsiniz:
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme</li>
            <li>
              Verilerin işlenme amacını ve amaca uygun kullanılıp
              kullanılmadığını öğrenme
            </li>
            <li>
              Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
            </li>
            <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
            <li>Verilerin silinmesini veya yok edilmesini isteme</li>
            <li>
              İşlemenin hukuka aykırı olması sebebiyle zarara uğranması hâlinde
              tazminat talep etme
            </li>
          </ul>
          Bu haklarınızı kullanmak için <strong>hukuki@moviebear.com</strong>{" "}
          adresine e-posta gönderebilirsiniz.
        </p>

        <h3>10. Politika Değişiklikleri</h3>
        <p>
          MovieBear, işbu Gizlilik Politikası’nı mevzuat değişiklikleri veya
          platformda yapılan güncellemeler doğrultusunda dilediği zaman
          değiştirme hakkına sahiptir. Güncellenen politikalar platformda
          yayınlandığı andan itibaren geçerli olacaktır.
        </p>

        <p>
          <strong>
            Platformumuzu kullanarak bu Gizlilik Politikası’nı okuduğunuzu,
            anladığınızı ve tüm şartları kabul ettiğinizi beyan etmiş olursunuz.
          </strong>
        </p>
      </div>
    </Modal>
  );
}

export default LegalContact;
