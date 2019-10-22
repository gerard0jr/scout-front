import React from 'react'
import './PersonalInfo.css'
import LanguageCard from './LanguageCard';

const personalInfo = {
  education:"Preparatoria",
  achievements:[
    "Mejor jugador liga 2018",
    "13 goles temporada 2017-2018",
    "Seleccionado Estatal Olimpiada Juvenil 2016",
    "Jugador de fuerzas básicas Pumas de la UNAM 2014-2015"
  ],
  passport:true,
  languages:[
    {
      language:"Inglés",
      speaking:70,
      writting:20,
      reading:50
    },
    {
      language:"Alemán",
      speaking:50,
      writting:30,
      reading:80
    }
  ]
}

const PersonalInfo = () => {
  return(
    <>
      <div className="personal-info-container">
        <h3>INFORMACIÓN PERSONAL</h3>
        <div className="data-container">
          <div className="education">
            <div>
              <span>Grado académico</span>
              <span>{personalInfo.education}</span>
            </div>
            <h5>Logros</h5>
            <ul>
              {personalInfo.achievements.map((ach,index) => <li key={index}>{ach}</li>)}
            </ul>
            <div>
              <span>Tiene pasaporte</span>
              <span>{personalInfo.passport ? "Si" : "No"}</span>
            </div>
          </div>
          <div className="language">
            <h5>Idiomas</h5>
            <LanguageCard language={personalInfo.languages[0]} />
            <LanguageCard language={personalInfo.languages[1]} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalInfo