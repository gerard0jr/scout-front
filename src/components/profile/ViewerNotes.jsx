import React from 'react'
import './ViewerNotes.css'
import VNote from './VNote';

const notes = [
  {
    viewer:"Nombre de visor W",
    date:"5 de mayo de 2019",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolores enim soluta, dolore quas suscipit consequatur, rem amet quae at quisquam blanditiis quod nobis est fugiat esse. Nam, aliquid natus."
  },
  {
    viewer:"Nombre de visor X",
    date:"13 de junio de 2019",
    text:"Lonsectetur adipisicing elit. Et dolores enim soluta, dolore quas suscipit consequatur, rem amet quae at quisquam blanditiis quod nobis est fugiat esse. Nam, aliquid natus orem ipsum dolor sit amet c."
  },
  {
    viewer:"Nombre de visor Y",
    date:"2 de agosto de 2019",
    text:"Lipsum dolor sit amet consectetur adipisicing elit. Et dolores enim soluta, dolore quas suscipit consequatur, rem amet quae at quisquam blanditiis quod nobis est fugiat esse. Nam, aliquid natusorem."
  },
  {
    viewer:"Nombre de visor Z",
    date:"3 de septiembre de 2019",
    text:"Ladipisicing elit. Et dolores enim soluta, dolore quas suscipit consequatur, rem amet quae at quisquam blanditiis quod nobis est fugiat esse. Nam, aliquid natus orem ipsum dolor sit amet consectetur."
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