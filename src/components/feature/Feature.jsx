import React from 'react'
import "./feature.css"

const Feature = ({title, text}) => {
  return (
    <div className="scop__features-container__feature">
      <div className="scop__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className='scop__features-container_feature-text'>
        {text}
      </div>
    </div>
  )
}

export default Feature