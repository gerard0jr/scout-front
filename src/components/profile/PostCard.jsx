import React from 'react'
import './PostCard.css'

const iconLike = "/img/profile/publicacion_me_gusta_icono.png"
const iconComments = "/img/profile/publicacion_comentario_icono.png"
const iconShare = "/img/profile/publicacion_compartir_icono.png"

const PostCard = ( { post } ) => {
  return(
    <>
      <div className="post-card-container">
        <div className="post-card-title">
          <img src={post.profilePic} alt="Profile pic"/>
          <div className="post-card-info">
            <p>{post.userName}</p>
            <div>
              <span>{post.time}</span>
              &nbsp;-&nbsp;
              <span>{post.location}</span>
            </div>
          </div>
        </div>
        <p>
          {post.comment}
        </p>
        <div className="post-card-video">
          {post.video ?
          <video src={post.video} width="100%" controls>
            Tu navegador no soporta la etiqueta de video.
          </video> 
          :
          <hr/>}
          <div className="post-card-cta">
            <div>
              <span>{post.likes ? post.likes : 0}</span>
              <img src={iconLike} alt="Me gusta"/>
              <span>Me gusta</span>
            </div>
            <div>
              <span>{post.comments ? post.comments : 0}</span>
              <img src={iconComments} alt="Comentarios"/>
              <span>Comentario</span>
            </div>
            <div>
              <img src={iconShare} alt="Compartir"/>
              <span>Compartir</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostCard