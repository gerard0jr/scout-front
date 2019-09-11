import React from 'react'
import { Input, Upload, Button, Icon } from 'antd'
import './Videos.css'
import VideoCard from './VideoCard';

const video1 = "/img/profile/video/goal.mp4"
const video2 = "/img/profile/video/football_field.mp4"
const video3 = "/img/profile/video/goal.mp4"
const videos = {
  0:{
    '_id':1,
    'src':video1,
    'title':'Goal',
    'date':'5 de mayo de 2018'
  },
  1:{
    '_id':2,
    'src':video2,
    'title':'Field',
    'date':'7 de junio de 2019'
  },
  2:{
    '_id':3,
    'src':video3,
    'title':'Polloyón',
    'date':'12 de diciembre de 2019'
  }
}

const Videos = () => {
  return(
    <>
      <div className="videos-container">
        <h3>MIS VIDEOS</h3>
        <p>
          Gana más visibilidad y preséntate mejor ante el mundo deportivo subiendo
          frecuentemente videos en el que muestres tus habilidades como jugador.
        </p>
        <div className="video-upload">
          <Input placeholder="Título o descripción corta del video" />
          <Upload>
            <Button>
              <Icon type="upload" />Subir video
            </Button>
          </Upload>
        </div>
        <div className="video-gallery">
          {Object.values(videos).map(v => 
            <VideoCard key={v._id} src={v.src} title={v.title} date={v.date} />)}
        </div>
        <span className="video-load">Cargar más</span>
      </div>
    </>
  )
}

export default Videos