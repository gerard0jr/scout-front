import React from 'react'
import { Input } from 'antd';
import './styles.css'

const GeneralForm = ({name, paternal, maternal, country, city, col, email, password, handleChange}) => {
  return (
    <div className="general-form">
      {/* NOMBRE */}
      <div className="group-inputs">
        {/* Nombre */}
        <div className="input">
          <p>Nombre(s):</p>
          <Input 
            onChange={handleChange}
            value={name} 
            placeholder="Lionel"
            name="name"
          />
        </div>
        {/* Apellido Paterno */}
        <div className="input">
          <p>Apellido paterno:</p>
          <Input 
            onChange={handleChange}
            value={paternal} 
            placeholder="Messi"
            name="paternal"
          />
        </div>
        {/* Apellido Materno */}
        <div className="input">
          <p>Apellido Materno:</p>
          <Input 
            onChange={handleChange}
            value={maternal} 
            placeholder="Sánchez"
            name="maternal"
          />
        </div>
      </div>
      {/* UBICACION */}
      <div className="group-inputs">
        {/* País */}
        <div className="input">
          <p>País de residencia:</p>
          <Input 
            onChange={handleChange}
            value={country} 
            placeholder="México"
            name="country"
            id="general"
          />
        </div>
        {/* Ciudad */}
        <div className="input">
          <p>Ciudad:</p>
          <Input 
            onChange={handleChange}
            value={city} 
            placeholder="CDMX"
            name="city"
            id="general"
          />
        </div>
        {/* Colonia */}
        <div className="input">
          <p>Colonia:</p>
          <Input 
            onChange={handleChange}
            value={col} 
            placeholder="Avante"
            name="col"
            id="general"
          />
        </div>
      </div>
      {/* CORREO */}
      <div className="group-inputs">
        {/* Correo */}
        <div className="input">
          <p>Correo electrónico:</p>
          <Input 
            onChange={handleChange}
            value={email} 
            placeholder="lionel@messi.com"
            name="email"
          />
        </div>
        {/* Contraseña */}
        <div className="input">
          <p>Contraseña:</p>
          <Input 
            onChange={handleChange}
            type="password"
            value={password} 
            name="password"
          />
        </div>
        {/* Apellido Materno */}
        <div className="input">
          <p>Repite la contraseña:</p>
          <Input 
            type="password"
          />
        </div>
      </div>
    </div>
  )
}

export default GeneralForm
