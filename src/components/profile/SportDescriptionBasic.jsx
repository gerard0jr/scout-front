import React from 'react'

const SportDescriptionBasic = ({player}) => {
  return(
    <div className="sport-description-basic">
      <div>
        <span className="table-item">Edad</span>
        <span>{player && player.age? player.age : "No definido"}</span>
      </div>
      <div>
        <span className="table-item">Nacionalidad</span>
        <span>{player && player.nationality? player.nationality : "No definido"}</span>
      </div>
      <div>
        <span className="table-item">Reside en</span>
        <span>{player && player.location? player.location : "No definido"}</span>
      </div>
      <div>
        <span className="table-item">Estatura</span>
        <span>{player && player.height? player.height + " m" : "No definido"}</span>
      </div>
      <div>
        <span className="table-item">Peso</span>
        <span>{player && player.weight? player.weight + " kg" : "No definido"}</span>
      </div>
      <div>
        <span className="table-item">Perfil</span>
        <span>{player && player.profile? player.profile : "No definido"}</span>
      </div>
    </div>
  )
}

export default SportDescriptionBasic