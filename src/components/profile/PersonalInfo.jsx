import React from 'react'
import { Progress } from 'antd';
import './PersonalInfo.css'

const PersonalInfo = () => {
  return(
    <>
      <div className="personal-info-container">
        <h3>INFORMACIÓN PERSONAL</h3>
        <div className="data-container">
          <div className="education">
            <div>
              <span>Grado académico</span>
              <span>Preparatoria</span>
            </div>
            <h5>Logros</h5>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit</li>
              <li>Magna placerat lobortis rhoncus dictumst odio tincidunt natoque</li>
              <li>Augue ultricies leo mus gravida eget class</li>
              <li>Per vivamus congue taciti morbi quis tortor pellentesque litora</li>
            </ul>
            <div>
              <span>Tiene pasaporte</span>
              <span>Si</span>
            </div>
          </div>
          <div className="language">
            <h5>Idiomas</h5>
            <div className="language-detail">
              <span className="language-title">Inglés</span>
              <div className="language-detail-item">
                <span>Comunicación oral</span>
                <div className="progress-bar">
                <Progress percent={70} size="small" strokeColor="#EB7803" />
                </div>
              </div>
              <div className="language-detail-item">
                <span>Comunicación escrita</span>
                <div className="progress-bar">
                <Progress percent={20} size="small" strokeColor="#EB7803" />
                </div>
              </div>
              <div className="language-detail-item">
                <span>Comprensión de lectura</span>
                <div className="progress-bar">
                <Progress percent={50} size="small" strokeColor="#EB7803" />
                </div>
              </div>
            </div>
            <div className="language-detail">
              <span className="language-title">Alemán</span>
              <div className="language-detail-item">
                <span>Comunicación oral</span>
                <div className="progress-bar">
                <Progress percent={70} size="small" strokeColor="#EB7803" />
                </div>
              </div>
              <div className="language-detail-item">
                <span>Comunicación escrita</span>
                <div className="progress-bar">
                <Progress percent={20} size="small" strokeColor="#EB7803" />
                </div>
              </div>
              <div className="language-detail-item">
                <span>Comprensión de lectura</span>
                <div className="progress-bar">
                <Progress percent={50} size="small" strokeColor="#EB7803" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalInfo