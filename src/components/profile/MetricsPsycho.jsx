import React from 'react'
import './MetricsPsycho.css'

const MetricsPsycho = () => {
  return(
    <>
      <div className="metrics-psycho-container">
        <img src="/img/profile/psicologico.png" alt="Metric icon"/>
        <h4>Psicológico</h4>
        <div className="metrics-psycho-attitudes">
          <div>
            <span>Actitud en el juego</span>
            <span>Colavorativa</span>
          </div>
          <div>
            <span>Disposición</span>
            <span>a seguir órdenes</span>
          </div>
        </div>
        <h5>Psicología del jugador</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nihil cupiditate, quisquam quaerat autem porro atque consectetur ducimus non dolor reiciendis delectus unde accusamus temporibus provident voluptate ea minus dignissimos.
        </p>
      </div>
    </>
  )
}

export default MetricsPsycho