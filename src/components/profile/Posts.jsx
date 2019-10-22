import React from 'react'
import { Input, Icon } from 'antd'
import './Posts.css'
import PostCard from './PostCard';

const profilePic = "/img/navbar/avatar.jpg"
const userName = "Charles Random"

const posts = {
  0:{
    "_id":0,
    "userName":"Charles Random",
    "profilePic":"/img/navbar/avatar.jpg",
    "comment":"Highlights de mis mejores goles, partidos de liga y copa de la temporada 2018-2019, contempla un total de 30 partidos, de los cuales en 22 de ellos fui titular jugando como medio de contención.",
    "time":"Hace 3 minutos",
    "location":"Munich, Alemania",
    "video":"/img/profile/video/goal.mp4",
    "likes":10,
    "comments":1
  },
  1:{
    "_id":1,
    "userName":"Charles Random",
    "profilePic":"/img/navbar/avatar.jpg",
    "comment":"Invito a todos a seguirme en mi próximo partido que se transmitirá en vivo por ligainterclubes.com/parisvsparma el sábado 26 de octubre de 2019 a las 17:00, juego correspondiente a la última jornada de temporada regular de liga.",
    "time":"7 de junio de 2019",
    "location":"München, Deutschland",
    "comments":3,
  },
  2:{
    "_id":2,
    "userName":"Charles Random",
    "profilePic":"/img/navbar/avatar.jpg",
    "time":"10 de julio de 2019",
    "location":"CDMX, México",
    "video":"/img/profile/video/football_field.mp4",
    "likes":13,
  }
}

const Posts = () => {
  return(
    <>
      <div className="posts-container">
        <h3>MIS PUBLICACIONES</h3>
        <div className="post-upload">
          <img src={profilePic} alt="Profile pic"/>
          <div className="post-upload-input">
            <p>{userName}</p>
            <Input placeholder="Escribe tu publicación aquí..." 
              suffix={<><Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />
                      &nbsp;
                      <Icon type="camera" style={{ color: 'rgba(0,0,0,.25)' }} /></>}/>
          </div>
        </div>
        {Object.values(posts).map(p => 
          <PostCard key={p._id} post={p} />)}
        <span className="posts-load">Cargar más</span>
      </div>
    </>
  )
}

export default Posts