import React from 'react'
import './PlayerDetails.css'

const PlayerDetails = ({ perfil, peso, altura }) => {
  return(
    <>
      <div className="player-details-container">
        <h3>Características del Jugador</h3>
        <div className="player-details-item">
          <h5>Perfil</h5>
          <div>
            <img src="/img/profile/perfil_icono_negro.png" alt="Perfil"/>
            <span>{perfil}</span>
          </div>
        </div>
        <hr/>
        <div className="player-details-item">
          <h5>Peso</h5>
          <div>
            <img src="/img/profile/peso_icono_negro.png" alt="Peso"/>
            <span>{peso} Kg</span>
          </div>
        </div>
        <hr/>
        <div className="player-details-item">
          <h5>Altura</h5>
          <div>
            <img src="/img/profile/altura_icono_negro.png" alt="Altura"/>
            <span>{altura} m</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayerDetails