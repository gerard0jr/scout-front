import React from 'react'

const SportDescriptionSpecific = () => {
  return(
    <div className="sport-description-specific">
      <div>
        <span className="table-item">Posición de juego</span>
        <span>Medio campo alternativa: delantero</span>
      </div>
      <div>
        <span className="table-item">Índice de efectividad</span>
        <span>80%</span>
      </div>
      <div>
        <span className="table-item">Rango de velocidad</span>
        <span>5 - 7 m/s</span>
      </div>
      <div className="specific-qualities">
        <span className="table-item">Cualidades (en niveles)</span>
        <div className="qualities-container">
          <div className="qualities-column">
            <span className="qualities-column-title">Excelente</span>
            <span>Velocidad</span>
            <span>Agilidad</span>
            <span>Fortaleza</span>
            <span>Drible</span>
          </div>
          <div className="qualities-column">
            <span className="qualities-column-title">Bueno</span>
            <span>Coordinación</span>
            <span>Elasticidad</span>
            <span>Resistencia</span>
            <span>Potencia de golpeo</span>
            <span>Pressing</span>
            <span>Cobertura</span>
          </div>
          <div className="qualities-column">
            <span className="qualities-column-title">Ni bueno ni malo</span>
            <span>Marcación</span>
            <span>Achique</span>
            <span>Desmarque</span>
          </div>
          <div className="qualities-column">
            <span className="qualities-column-title">Me cuesta trabajo</span>
            <span>Anticipación</span>
            <span>Cabeceo</span>
            <span>Conducción</span>
          </div>
          <div className="qualities-column">
            <span className="qualities-column-title">Cualidad a desarrollar</span>
            <span>Precisión en el pase</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SportDescriptionSpecific