import React from 'react'
import { Input, DatePicker } from 'antd';
import './styles.css'

const PersonalForm = ({handleChange, born, genre, height, weight, illness, academic, passport, 
  nationality, languages, personalDescription, tutorName, tutorLastPat, tutorLastMat, tutorBorn,
  tutorRel, tutorPhone, tutorEmail}) => {
  return (
    <div className="general-form">
      {/* NOMBRE */}
      <div className="group-inputs">
        {/* Nombre */}
        <div className="input">
          <p>Fecha de nacimiento</p>
          <DatePicker 
            onChange={handleChange()}
            name="born"
          />
        </div>
        {/* Apellido Paterno */}
        <div className="input">
          <p>Apellido paterno</p>
          <Input 
            onChange={handleChange()}

            placeholder="Messi"
            name="paternal"
          />
        </div>
        {/* Apellido Materno */}
        <div className="input">
          <p>Apellido Materno</p>
          <Input 
            onChange={handleChange()}

            placeholder="Sánchez"
            name="maternal"
          />
        </div>
      </div>
    </div>
  )
}

export default PersonalForm
