import React from 'react'
import MetricsBoard from './MetricsBoard';
import './Metrics.css'

const Metrics = ({ player }) => {
  return(
    <>
      <h3 style={{marginTop:"20px"}}>MÉTRICAS ESPECIALES</h3>
      <div className="metrics-container">
        <MetricsBoard player={player} category="1" />
        <MetricsBoard player={player} category="2" />
        <MetricsBoard player={player} category="3" />
      </div>
    </>
  )
}

export default Metrics