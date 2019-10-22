import React from 'react'
import Importance from './Importance';
import './Record.css'

const Record = () => {
  return(
    <>
      <Importance />
      <div className="metrics-demo">
        <img src="/img/profile/demo/metrica2.png" alt="metrica"/>
        <img src="/img/profile/demo/metrica3.png" alt="metrica"/>
        <img style={{boxShadow:'5px 5px 17px -4px rgba(0,0,0,0.64)'}} src="/img/profile/demo/metrica1.1.png" alt="metrica"/>
      </div>
    </>
  )
}

export default Record