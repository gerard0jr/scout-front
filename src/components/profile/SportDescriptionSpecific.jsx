import React from 'react'

const SportDescriptionSpecific = ({ player }) => {
  return(
    <div className="sport-description-specific">
      <div>
        <span className="table-item">Posición de juego</span>
        <span>{player && player.position ? player.position : "No definido"}</span>
      </div>
      <div>
        <span className="table-item">Índice de efectividad</span>
        <span>{player && player.effectiveness ? player.effectiveness +" %" : "No definido"}</span>
      </div>
      <div>
        <span className="table-item">Rango de velocidad</span>
        <span>{player && player.speed ? player.speed +" m/s" : "No definido"}</span>
      </div>
      <div className="specific-qualities">
        <span className="table-item">Cualidades (en niveles)</span>
        <div className="qualities-container">
          <div className="qualities-column">
            <span className="qualities-column-title">Excelente</span>
            {player && player.qualities && player.qualities.excellent ? 
              player.qualities.excellent.map((q,index) => <span key={index}>{q}</span>)
              : "No definido"}
          </div>
          <div className="qualities-column">
            <span className="qualities-column-title">Bueno</span>
            {player && player.qualities && player.qualities.good ? 
              player.qualities.good.map((q,index) => <span key={index}>{q}</span>)
              : "No definido"}
          </div>
          <div className="qualities-column">
            <span className="qualities-column-title">Ni bueno ni malo</span>
            {player && player.qualities && player.qualities.soso ? 
              player.qualities.soso.map((q,index) => <span key={index}>{q}</span>)
              : "No definido"}
          </div>
          <div className="qualities-column">
            <span className="qualities-column-title">Me cuesta trabajo</span>
            {player && player.qualities && player.qualities.struggle ? 
              player.qualities.struggle.map((q,index) => <span key={index}>{q}</span>)
              : "No definido"}
          </div>
          <div className="qualities-column">
            <span className="qualities-column-title">Cualidad a desarrollar</span>
            {player && player.qualities && player.qualities.develop ? 
              player.qualities.develop.map((q,index) => <span key={index}>{q}</span>)
              : "No definido"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SportDescriptionSpecific