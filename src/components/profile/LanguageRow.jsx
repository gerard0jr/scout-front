import React from 'react'
import { Progress } from 'antd';
import './LanguageRow.css'

const LanguageRow = ({item}) => {
  return(
    <div className="language-detail-item">
      <span>{item.desc}</span>
      <div className="progress-bar">
        <Progress percent={item.value} size="small" strokeColor="#EB7803" />
      </div>
    </div>
  )
}

export default LanguageRow