import React from 'react'
import './SportDescription.css'
import SportDescriptionBasic from './SportDescriptionBasic';
import SportDescriptionSpecific from './SportDescriptionSpecific';

const SportDescription = () => {
  return(
    <>
      <div className="sport-description-container">
        <div className="sport-description">
          <h3>DESCRIPCIÓN DE VIDA DEPORTIVA</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, rem non excepturi repellat nulla quos molestiae ipsam suscipit odio! Aspernatur et aliquid ducimus quas ipsa rem provident suscipit deleniti magni!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas itaque fugit ipsum, blanditiis dolor natus facilis obcaecati, rerum enim reiciendis commodi illum cum ab iure quo maiores, quod dolorem.
          </p>
          <div className="sport-description-tables">
            <SportDescriptionBasic />
            <SportDescriptionSpecific />
          </div>
        </div>
      </div>
    </>
  )
}

export default SportDescription