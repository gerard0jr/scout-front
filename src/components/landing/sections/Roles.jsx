import React from 'react'
import { Button } from 'antd';

const roles = {
    0: {
       'title': 'Jugador',
       'content': 'Contenido',
       'url':'/img/player.png'
    },
    1: {
       'title': 'Entrenador',
       'content': 'Contenido',
       'url':'/img/coach.png'
    },
    2: {
       'title': 'Club',
       'content': 'Contenido',
       'url':'/img/club.png'
    },
    3: {
       'title': 'Representante',
       'content': 'Contenido',
       'url':'/img/rep.png'
    },
    4: {
       'title': 'Fan',
       'content': 'Contenido',
       'url':'/img/fan.png'
    }
}

const Roles = () => {
  return (
    <div className='roles'>
      <h2>ROLES EN SCOUTLINK</h2>
      {Object.keys(roles).map((index,k) =>{
      return <div key={k} className="horizontal-card">
        <img alt="jugador" src={roles[index].url} />
        <div className='card-content'>
            <h3>{roles[index].title.toUpperCase()}</h3>
            <p>{roles[index].content}</p>
            <Button className="landing-register-button" type="primary">Registrarme como&nbsp; {roles[index].title}</Button>
        </div>
      </div>})}
    </div>
  )
}

export default Roles
