import React from 'react'
import './VideoCard.css'

const VideoCard = ({ src, title, date }) => {
  return(
    <>
      <div className="video-card-container">
        <video src={src} width="100%" controls>
          Tu navegador no soporta la etiqueta de video.
        </video>
        <h5>{title}</h5>
        <p>{date}</p>
      </div>
    </>
  )
}

export default VideoCard