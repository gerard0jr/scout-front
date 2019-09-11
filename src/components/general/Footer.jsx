import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-menu">
          <Link to="/terminos">Términos y condiciones</Link>
          <span>&nbsp;|&nbsp;</span>
          <Link to="/privacidad">Políticas de privacidad</Link>
          <span>&nbsp;|&nbsp;</span>
          <Link to="/faq">Preguntas prequentes</Link>
          <span>&nbsp;|&nbsp;</span>
          <Link to="/contacto">Contáctanos</Link>
        </div>
        <div className="footer-social">
          <span>Síguenos en:</span>
          <img src="/img/footer/facebook_logo.png" alt="Facebook"/>
          <img src="/img/footer/twitter_logo.png" alt="Twitter"/>
          <img src="/img/footer/linkedin_logo.png" alt="LinkedIn"/>
        </div>
      </div>
    </>
  )
}

export default Footer