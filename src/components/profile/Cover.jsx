import React from 'react'
import { Button } from 'antd'
import './Cover.css'

const coverImg = "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1495&q=80"
const userName = "Charles Random"
const userDesc = "Jugador pro en Selección del Mundo"
const position = "Crack"
const ranking = "1ro"
const score = 2140
const followers = 224 
const descPlayer = "Tiene mucho fútbol para mostrar y aprender. Es una figura importantísima del país. Con su edad, ya es titular. Para muchos, es impensable tener, como una de las figuras de la selección, un joven de 21 años. Pero es buena para todos. Puede ser mejor que yo. Puede ser el mejor jugador colombiano de la historia."

const Cover = () => {
  return(
    <>
      <div className="cover-container">
        <div className="scoutlink-profile-presentation">
          <div className="scoutlink-profile-container">
            <img className="scoutlink-image-lg" 
              src={coverImg} alt="Profile cover pic"/>
            <div className="scoutlink-profile">
              <img className="scoutlink-image-profile" 
                src="/img/navbar/avatar.jpg" alt="Profile pic"/>
              <div className="scoutlink-profile-data">
                <h2>{userName}</h2>
                <p>{userDesc}</p>
                <p>{position}</p>
              </div>
              <div className="scoutlink-profile-button">
                <Button type="primary" icon="download" size="large">CV deportivo</Button>
              </div>
            </div>
            <div className="scoutlink-stats">
              <div className="scoutlink-stats-item">
                <img src="/img/profile/ranking_icono_azul.png" alt="Ranking"/>
                <strong>POSICIÓN DE RANKING</strong>
                <span>{ranking}</span>
              </div>
              <div className="scoutlink-stats-item">
                <img src="/img/profile/score_icon.png" alt="Score"/>
                <strong>SCORE</strong>
                <span>{score}</span>
              </div>
              <div className="scoutlink-stats-item">
                <img src="/img/profile/seguidores_icono.png" alt="Seguidores"/>
                <strong>SEGUIDORES</strong>
                <span>{followers}</span>
              </div>
            </div>
            <p className="scoutlink-profile-desc">
              {descPlayer}
            </p>
          </div>
          <div className="scoutlink-profile-selector">
            <div className="scoutlink-selector-item">
              <img src="/img/profile/presentacion_personal_icono_naranja.png" alt="Presentación"/>
              <span className="selected">PRESENTACIÓN PERSONAL</span>
            </div>
            <div className="scoutlink-selector-item">
              <img src="/img/profile/historial_icono_gris.png" alt="Historial"/>
              <span>MI HISTORIAL</span>
            </div>
            <div className="scoutlink-selector-item">
              <img src="/img/profile/expediente_icono_gris.png" alt="Expediente"/>
              <span>MI EXPEDIENTE DEPORTIVO</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cover