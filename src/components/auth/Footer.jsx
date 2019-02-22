import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        ¿Ya tienes una cuenta en Scoutlink? <Link to="/">¡Entra con tu cuenta!</Link>
    </div>
  )
}

export default Footer
