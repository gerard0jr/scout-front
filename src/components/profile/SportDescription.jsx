import React from 'react'
import './SportDescription.css'
import SportDescriptionBasic from './SportDescriptionBasic';
import SportDescriptionSpecific from './SportDescriptionSpecific';

const SportDescription = ({ player }) => {
  return(
    <>
      <div className="sport-description-container">
        <div className="sport-description">
          <h3>DESCRIPCIÓN DE VIDA DEPORTIVA</h3>
          <p>
            {player && player.description ? player.description : "No hay detalles"}
          </p>
          <div className="sport-description-tables">
            <SportDescriptionBasic player={player} />
            <SportDescriptionSpecific player={player} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SportDescription