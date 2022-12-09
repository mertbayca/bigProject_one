import React from 'react'
import "./what.css"
import {Feature} from "../../components"

const What = () => {
  return (
    <div className="scop__what section__margin" id="what">
      <div className="scop__what-feature">
        <Feature title="With the power of blockchain" text="Using the latest blockchain tech, we ensure your business is open 24/7, on the blockchain."/>
      </div>
      <div className="scop__what-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p className="gradient__text explore_text">Explore</p>
      </div>
      <div className="scop__what-container">
        <Feature title="State of the art" text="Our systems and techniques are always up to date, and we use the latest technology. Purchasing our service also comes with yearly, free updates."/>
        <Feature title="ScoPym Token" text="Get our community managed token integrated in your business. Leave it to the people! ScoPym Token provides both objective and subjective value to your business."/>
        <Feature title="A team of experts" text="We have some of the best and most experienced developers and engineers in the web3 space working around the clock to bring you optimal solutions."/>
      </div>
    </div>
  )
}

export default What