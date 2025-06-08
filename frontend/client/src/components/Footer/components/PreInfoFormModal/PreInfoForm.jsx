import React from "react";
import { Modal } from "antd";

function PreInfoForm({ isModalOpen, handleOk, handleCancel }) {
  return (
    <Modal
      title="Ön Bilgilendirme Formu"
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
          İşbu Mesafeli Satış Sözleşmesi (“Sözleşme”), satıcı ile tüketici
          arasında mesafeli satış işlemleri kapsamında yapılacak alışverişlerin
          şartlarını düzenlemektedir.
        </p>
        <h3>1. Taraflar</h3>
        <p>
          Satıcı: MovieBear Dijital Platformu Tüketici: İşbu sözleşmeyi kabul
          eden gerçek kişi.
        </p>
        <h3>2. Konu</h3>
        <p>
          İşbu sözleşme, satıcının tüketiciye mesafeli satış yöntemiyle sunduğu
          dijital film ve dizi platform hizmetlerinin satın alınması ve
          kullanımı şartlarını belirler.
        </p>
        <h3>3. Hizmet Bedeli ve Ödeme</h3>
        <p>
          Hizmet bedeli aylık 189,99 TL’den başlamaktadır. Ödemeler kredi kartı,
          banka kartı veya diğer belirtilen yöntemlerle yapılabilir.
        </p>
        <h3>4. Cayma Hakkı</h3>
        <p>
          Tüketici, işbu sözleşmenin imzalanmasını takip eden 14 gün içinde
          herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin
          sözleşmeden cayma hakkına sahiptir. Cayma hakkı dijital içeriklerde
          bazı sınırlamalara tabi olabilir.
        </p>
        <h3>5. Hizmetin Kullanımı</h3>
        <p>
          Tüketici, üyelik ve erişim bilgilerini gizli tutmakla yükümlüdür.
          Hizmet sadece kişisel kullanım içindir.
        </p>
        <h3>6. Sorumluluk Sınırlamaları</h3>
        <p>
          Satıcı, hizmetin sürekliliği ve hatasızlığı için azami çabayı gösterir
          ancak teknik aksaklıklardan dolayı oluşabilecek zararlardan sorumlu
          değildir.
        </p>
        <h3>7. Uyuşmazlıkların Çözümü</h3>
        <p>
          İşbu sözleşmeden kaynaklanan uyuşmazlıklarda öncelikle taraflar
          dostane çözüm yollarını arayacak, çözüme ulaşamazsa tüketici
          mahkemeleri ve icra daireleri yetkilidir.
        </p>
        <h3>8. Yürürlük</h3>
        <p>
          İşbu sözleşme, tüketicinin onayıyla yürürlüğe girer ve hizmet
          süresince geçerlidir.
        </p>
        <p>
          <strong>Onaylayarak sözleşmeyi kabul etmiş sayılırsınız.</strong>
        </p>
      </div>
    </Modal>
  );
}

export default PreInfoForm;
