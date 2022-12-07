import React from 'react'
import "./what.css"
import {Feature} from "../../components"

const What = () => {
  return (
    <div className="gpt3__what section__margin" id="what">
      <div className="gpt3__what-feature">
        <Feature />
      </div>
      <div className="gpt3__what-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      </div>
    </div>
  )
}

export default What