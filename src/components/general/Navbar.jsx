import React from 'react'
import { Input } from 'antd';
import './Navbar.css'

const { Search } = Input;

const Navbar = () => {
  return (
    <>
      <header id="mainheader">
        <nav>
          <img className="logo" src="/img/navbar/Scoutlink_tipografia_blanca.png" alt="Scoutlink logo"/>
        </nav>
        <nav>
        <div className="search">
          <Search
            placeholder="Jugadores, representantes, clubs, fans o entrenadores"
            onSearch={value => console.log(value)}
          />
        </div>
        </nav>
        <nav className="nav-menu">
          <span>RETOS</span>
          <span>GUÍAS</span>
          <span>JUEGOS</span>
          <img className="notif-icon" src="/img/navbar/notificaciones_icono.png" alt="notificaciones"/>
          <img className="avatar" src="/img/navbar/avatar.jpg" alt="notificaciones"/>
        </nav>
      </header>
    </>
  )
}

export default Navbar