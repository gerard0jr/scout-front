import React from 'react'
import './PlayerChallenges.css'

const PlayerChallenges = ({ challenges, bestChallenge }) => {
  return(
    <>
    <div className="player-challenges-container">
      <div className="total-challenges">
        <h3>Retos completados</h3>
        <span>{challenges ? challenges : 0}</span>
      </div>
      <div className="best-challenge">
        <h4>Reto mejor logrado:</h4>
        <p>{bestChallenge ? bestChallenge : "Por definir"}</p>
        <a href="/reto">Ver reto</a>
      </div>
    </div>
    </>
  )
}

export default PlayerChallenges