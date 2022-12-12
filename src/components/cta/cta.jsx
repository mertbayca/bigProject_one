import React from 'react'
import "./cta.css"

const cta = () => {
  return (
    <div className="scop__cta">
      <div className="scop__cta-content">
        <p>Request Info Now</p>
        <h3>Register today & start exploring the possibilities of web3.</h3>
      </div>
      <div className="scop__cta-button">
        <button type="button" onClick={() => {window.open("header")}}>Get Started</button>
      </div>
    </div>
  )
}

export default cta