import React from 'react'
import './MembershipDetails.css'

const MembershipDetails = ({ player }) => {
  return(
    <>
      <div className="membership-details-container">
        <div>
          <span className="membership-detail-item">Membresía:</span>
          <span>{player && player.membership ? player.membership : "Freemium"}</span>
        </div>
        <div>
          <span className="membership-detail-item">Representante:</span>
          <span>{player && player.manager ? player.manager : "No"}</span>
        </div>
        <div>
          <span className="membership-detail-item">Contratos vigentes:</span>
          <span>{player && player.contracts ? player.contracts : "Sin contrato"}</span>
        </div>
      </div>
    </>
  )
}

export default MembershipDetails