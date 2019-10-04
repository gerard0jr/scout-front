import React from 'react'
import './VNote.css'

const VNote = ({ note }) => {
  return(
    <>
    <div className="viewer-note">
      <h5>{note.viewer}</h5>
      <span>{note.date}</span>
      <p>{note.text}</p>
    </div>
    </>
  )
}

export default VNote