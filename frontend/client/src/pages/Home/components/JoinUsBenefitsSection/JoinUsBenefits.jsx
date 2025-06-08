import React from 'react'
import './JoinUsBenefits.css'
import JoinUsBenefitCard from './JoinUsBenefitCard'
function JoinUsBenefits() {
  return (
    <div className='join__us__benefits__wrapper'>
        <h3>Bize Katılmanız İçin Diğer Nedenler</h3>
        <div className='join__us__benefits__cards__list'>
          <JoinUsBenefitCard title="Televizyonunuzda izleyin" description="Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu⁠-⁠ray oynatıcılar ve daha fazlasında seyredin." icon="https://cdn-icons-png.freepik.com/256/550/550486.png?ga=GA1.1.605070436.1748006589&semt=ais_hybrid" />
          <JoinUsBenefitCard title="Çevrimdışı izlemek olanağı" description="En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun." icon="https://cdn-icons-png.freepik.com/256/17924/17924740.png?ga=GA1.1.605070436.1748006589&semt=ais_hybrid" />
          <JoinUsBenefitCard title="İstediğiniz her yerde izleyin" description="Telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin.." icon="https://cdn-icons-png.freepik.com/256/2761/2761078.png?ga=GA1.1.605070436.1748006589&semt=ais_hybrid" />
          <JoinUsBenefitCard title="Çocuk profiline uygun" description="Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde çocuklarınız, sadece onlara özel bir alanda en sevdikleri karakterlerle maceralara atılabilir.." icon="https://cdn-icons-png.freepik.com/256/2829/2829744.png?ga=GA1.1.605070436.1748006589&semt=ais_hybrid" />
        </div>
    </div>
  )
}

export default JoinUsBenefits