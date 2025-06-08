import React from "react";
import { Collapse } from "antd";
import "./FaqSection.css";

const { Panel } = Collapse;

const faqData = [
  {
    question: "MovieBear Nedir?",
    answer:
      "MovieBear, kullanıcıların çeşitli film ve dizi içeriklerine erişim sağladığı bir dijital platformdur.",
  },
  {
    question: "MovieBear Maliyeti Nedir?",
    answer:
      "MovieBear, aylık 189,99 TL'den başlayan fiyatlarla hizmet vermektedir.",
  },
  {
    question: "Üyeliğimi istediğim zaman iptal edebilir miyim?",
    answer:
      "Evet. MovieBear üyeliğinizi dilediğiniz zaman, hiçbir ek ücret ödemeden iptal edebilirsiniz.",
  },
  {
    question: "Hangi cihazlarda izleme yapabilirim?",
    answer:
      "MovieBear, telefon, tablet, bilgisayar ve akıllı televizyonlarda sorunsuz çalışmaktadır.",
  },
  {
    question: "İçerikler çevrimdışı izlenebilir mi?",
    answer:
      "Evet. Premium üyeler içerikleri indirerek internet bağlantısı olmadan da izleyebilir.",
  },
  {
    question: "Hangi dillerde altyazı seçenekleri mevcut?",
    answer:
      "MovieBear, Türkçe, İngilizce, Almanca ve daha birçok dilde altyazı desteği sunmaktadır.",
  },
  {
    question: "Aile üyeleri için profil oluşturabilir miyim?",
    answer:
      "Evet. MovieBear, farklı kullanıcı profilleri oluşturmanıza ve çocuklar için güvenli içerik filtreleri ayarlamanıza olanak tanır.",
  },
  {
    question: "Yeni içerikler ne sıklıkla ekleniyor?",
    answer:
      "Platformumuza her hafta yeni filmler ve diziler eklenmektedir. Öne çıkan yapımlar ve orijinal içerikler özel kategorilerde sunulur.",
  },
  {
    question: "Üyelikte taahhüt var mı?",
    answer:
      "Hayır, MovieBear üyeliklerinde herhangi bir taahhüt bulunmamaktadır. Aylık olarak kullanabilir ve dilediğinizde iptal edebilirsiniz.",
  },
  {
    question: "MovieBear deneme süresi sunuyor mu?",
    answer:
      "Zaman zaman kampanyalarımız kapsamında ücretsiz deneme süreleri sunmaktayız. Güncel kampanyaları ana sayfamızdan takip edebilirsiniz.",
  },
];

function FaqSection() {
  return (
    <div className="faq__section">
      <h2 className="faq__section__title">Sıkça Sorulan Sorular</h2>
      <Collapse accordion className="faq__collapse">
        {faqData.map((item, index) => (
          <Panel header={item.question} key={index}>
            <p>{item.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}

export default FaqSection;
