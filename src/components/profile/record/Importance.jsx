import React from 'react'
import { Link } from 'react-router-dom'
import './Importance.css'

const Importance = () => {
  return(
    <div className="importance-container">
      <h3>TU PROTAGONISMO EN SCOUTLINK ESTE MES</h3>
      <div className="importance-counters">
        <div className='importance-counter'>
          <span className="counter-value">27</span>
          <span className="counter-desc">Aparición en búsquedas</span>
        </div>
        <div className='importance-counter'>
          <span className="counter-value">10</span>
          <span className="counter-desc">Visualizaciones de perfil</span>
        </div>
        <div className='importance-counter'>
          <span className="counter-value">50</span>
          <span className="counter-desc">Likes en tus publicaciones</span>
        </div>
      </div>
      <Link to="/">Ver más</Link>
    </div>
  )
}

export default Importance