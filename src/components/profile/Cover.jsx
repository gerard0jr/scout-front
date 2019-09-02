import React from 'react'
import './Cover.css'

const coverImg = "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1495&q=80"
const userName = "Charles Random"
const userDesc = "Jugador pro en Selección del Mundo"

const Cover = () => {
  return(
    <>
      <div className="cover-container">
        <div className="scoutlink-profile">
          <img className="scoutlink-image-lg" 
            src={coverImg} alt="Profile cover pic"/>
          <img className="scoutlink-image-profile" 
            src="/img/navbar/avatar.jpg" alt="Profile pic"/>
          <div>
            <h2>{userName}</h2>
            <p>{userDesc}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cover