import React from 'react'
import LanguageRow from './LanguageRow';
import './LanguageCard.css'

const LanguageCard = ({ language }) => {
  return(
    <div className="language-detail">
      <span className="language-title">{language.language}</span>
      <LanguageRow item={{desc:"Comunicación oral",value:language.speaking}} />
      <LanguageRow item={{desc:"Comunicación escrita",value:language.writting}} />
      <LanguageRow item={{desc:"Comprensión de lectura",value:language.reading}} />
    </div>
  )
}

export default LanguageCard