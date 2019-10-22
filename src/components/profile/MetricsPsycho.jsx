import React from 'react'
import './MetricsPsycho.css'

const MetricsPsycho = ({ player }) => {
  return(
    <>
      <div className="metrics-psycho-container">
        <img src="/img/profile/psicologico.png" alt="Metric icon"/>
        <h4>Psicológico</h4>
        <div className="metrics-psycho-attitudes">
          <div>
            <span>Actitud en el juego</span>
            <span>{player.metrics.psycho.attitude}</span>
          </div>
          <div>
            <span>Disposición</span>
            <span>a seguir órdenes</span>
          </div>
        </div>
        <h5>Psicología del jugador</h5>
        <p>
          Jugador emocionalmente estable, altamente competitivo, amplio espectro de adaptación a las circunstancias, responsable con tendencia a ser líder.
        </p>
      </div>
    </>
  )
}

export default MetricsPsycho