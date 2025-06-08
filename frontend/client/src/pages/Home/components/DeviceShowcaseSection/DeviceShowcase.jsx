import React from 'react'
import './DeviceShowcase.css'
import DeviceImage from '../../../../assets/cihazlar.png'
function DeviceShowcase() {
  return (
    <div className='device__showcase__section'>
      <h2>Keyfini Çıkar!</h2>
      <p>İstediğin zaman, istediğin yerde...</p>
      <div className='devices__wrapper'>
        <img src={DeviceImage} alt="" />
        <div className='devices_name__list'>
            <ul>
                <li>Telefon</li>
                <li>Tablet</li>
                <li>Bilgisayar</li>
                <li>Akıllı TV</li>
                <li>Oyun Konsolu</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default DeviceShowcase