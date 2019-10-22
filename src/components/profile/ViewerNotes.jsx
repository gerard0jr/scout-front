import React from 'react'
import './ViewerNotes.css'
import VNote from './VNote'

const notes = [
  {
    viewer:"Miguel Ángel López",
    date:"5 de mayo de 2019",
    text:"Jugador habilidoso con gran profundidad y con sacrificio a la defensa, maneja ambas piernas de manera magistral y con muy buen fondo físico."
  },
  {
    viewer:"Ramón Velarde",
    date:"13 de junio de 2019",
    text:"Jugador con gran presencia física en el terreno de juego, buen manejo de balón, con gran visión de campo y manejo de ambos perfiles."
  },
  {
    viewer:"Enrique Carbajal",
    date:"2 de agosto de 2019",
    text:"De lo mejor que he visto, propuesto para el campamento de verano, gran jugador con gran visión en el terreno de juego."
  },
  {
    viewer:"Joaquín Morales",
    date:"3 de septiembre de 2019",
    text:"Jugador con muy buena técnica, le falta manejar los tiempos, acelerado, pero con muy buen fondo físico y gran visión de campo."
  }
]

const ViewerNotes = () => {
  return(
    <>
      <div className="viewer-notes-container">
        <h3>NOTAS DE VISORES</h3>
        <div className="vnotes-container">
          {notes.map((n,index) => <VNote key={index} note={n} />)}
        </div>
      </div>
    </>
  )
}

export default ViewerNotes