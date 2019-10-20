import React from 'react'
import { Button } from 'antd'
import './MetricsBoard.css'

const MetricsBoard = ({ player, category }) => {
  let src = category && category === "1"? 
    "/img/profile/partido_o_entreno.png" 
    : category && category === "2" ?
    "/img/profile/en_pruebas.png"
    :
    "/img/profile/en_circuito.png"
  return(
    <>
      <div className="metrics-board-container">
        <img src={src} 
          alt="Metric icon"/>
        <h4>En partido o entrenamiento</h4>
        {/* Dependiendo de la categoría son las métricas (filas) que muestra */}
        {player && category === "1" ?
        <div className="metrics-board-table">
          <div>
            <span className="metrics-item">Ritmo cardiaco promedio</span>
            <span>{player && player.metrics && player.metrics.match 
              && player.metrics.match.heartRateAVG ?
              player.metrics.match.heartRateAVG + " p/m" : "No definido"}</span>
          </div>
          <div>
            <span className="metrics-item">Carga de trabajo total</span>
            <span>{player && player.metrics && player.metrics.match 
              && player.metrics.match.workload ?
              player.metrics.match.workload : "No definido"}</span>
          </div>
          <div>
            <span className="metrics-item">Número de saltos</span>
            <span>{player && player.metrics && player.metrics.match 
              && player.metrics.match.jumps ?
              player.metrics.match.jumps : "No definido"}</span>
          </div>
          <div>
            <span className="metrics-item">Inactividad</span>
            <span>{player && player.metrics && player.metrics.match 
              && player.metrics.match.inactivity ?
              player.metrics.match.inactivity + " s" : "No definido"}</span>
          </div>
          <div>
            <span className="metrics-item">Distancia total</span>
            <span>{player && player.metrics && player.metrics.match 
              && player.metrics.match.totalDistance ?
              player.metrics.match.totalDistance + " m" : "No definido"}</span>
          </div>
          <div>
            <span className="metrics-item">Acelearaciones</span>
            <span>{player && player.metrics && player.metrics.match 
              && player.metrics.match.accelerations ?
              player.metrics.match.accelerations + " m/s2" : "No definido"}</span>
          </div>
          <div>
            <span className="metrics-item">Desaceleraciones</span>
            <span>{player && player.metrics && player.metrics.match 
              && player.metrics.match.decelerations ?
              player.metrics.match.decelerations + " m/s2" : "No definido"}</span>
          </div>
        </div>
        :
        player && category === "2" ?
        <div className="metrics-board-table">
          <div>
            <span className="metrics-item">Velocidad promedio</span>
            <span>{player && player.metrics && player.metrics.test 
              && player.metrics.test.speedAVG ?
              player.metrics.test.speedAVG + " m/s" : "No definido"}</span>
          </div>
          <div>
            <span className="metrics-item">Distancia recorrida a velocidad alta</span>
            <span>{player && player.metrics && player.metrics.test 
              && player.metrics.test.hihgSpeedDistance ?
              player.metrics.test.hihgSpeedDistance + " km" : "No definido"}</span>
          </div>
          <div>
            <span className="metrics-item">Tiempo en recorrer X distancia</span>
            <span>{player && player.metrics && player.metrics.test 
              && player.metrics.test.distanceTime ?
              player.metrics.test.distanceTime + " min" : "No definido"}</span>
          </div>
          <div>
            <span className="metrics-item">Altura del salto</span>
            <span>{player && player.metrics && player.metrics.test 
              && player.metrics.test.jumpHeight ?
              player.metrics.test.jumpHeight + " m" : "No definido"}</span>
          </div>
          <div>
            <span className="metrics-item">Velocidad máxima</span>
            <span>{player && player.metrics && player.metrics.test 
              && player.metrics.test.maxSpeed ?
              player.metrics.test.maxSpeed + " m/s" : "No definido"}</span>
          </div>
        </div>
        :
        player && category === "3" ?
        <div className="metrics-board-table">
          <div>
            <span className="metrics-item">Velocidad máxima</span>
            <span>{player && player.metrics && player.metrics.circuit 
              && player.metrics.circuit.maxSpeed ?
              player.metrics.circuit.maxSpeed + " m/s" : "No definido"}</span>
          </div>
          <div>
            <span className="metrics-item">Tiempo de repetición</span>
            <span>{player && player.metrics && player.metrics.circuit 
              && player.metrics.circuit.repetitionTime ?
              player.metrics.circuit.repetitionTime : "No definido"}</span>
          </div>
          <div>
            <span className="metrics-item">Precisión por repetición</span>
            <span>{player && player.metrics && player.metrics.circuit 
              && player.metrics.circuit.repetitionPrecision ?
              player.metrics.circuit.repetitionPrecision + " %" : "No definido"}</span>
          </div>
          <div>
            <span className="metrics-item">Disminución de la potencia por repetición</span>
            <span>{player && player.metrics && player.metrics.circuit 
              && player.metrics.circuit.powerReductionRepetition ?
              player.metrics.circuit.powerReductionRepetition + " %" : "No definido"}</span>
          </div>
        </div>
        :
        <div className="metrics-board-table">
          <div>
            <span className="metrics-item">Métricas no definidas</span>
          </div>
        </div>
        }
        <Button>Ver histórico</Button>
      </div>
    </>
  )
}

export default MetricsBoard