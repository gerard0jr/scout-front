import React from 'react'
import PlayerDetails from './PlayerDetails';
import Videos from './Videos';
import Posts from './Posts';
import './Presentation.css'
import PlayerChallenges from './PlayerChallenges';

const perfil = "Derecho/izquierdo"
const peso = "72"
const altura = "1,72"

const Presentation = () =>{
  return(
    <>
      <div className="presentation-container">
        <div>
          <Videos />
          <Posts />
        </div>
        <div>
          <PlayerDetails perfil={perfil} peso={peso} altura={altura} />
          <PlayerChallenges challenges="20" bestChallenge="Prueba de 200 metros" />
        </div>
      </div>
    </>
  )
}

export default Presentation