import React from 'react'
import './MembershipDetails.css'

const MembershipDetails = () => {
  return(
    <>
      <div className="membership-details-container">
        <div>
          <span className="membership-detail-item">Membresía:</span>
          <span>Master</span>
        </div>
        <div>
          <span className="membership-detail-item">Representante:</span>
          <span>Si</span>
        </div>
        <div>
          <span className="membership-detail-item">Contratos vigentes:</span>
          <span>Hasta el 2020</span>
        </div>
      </div>
    </>
  )
}

export default MembershipDetails