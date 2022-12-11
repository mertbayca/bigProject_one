import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
  return (
    <div className="scop__header section__padding" id="home">
      <div className="scop__header-content">
        <h1 className="gradient__text">Stop Worrying and Future-proof Your Business with ScoPym</h1>
        <p>ScoPym is the latest state of the art tech, designed to future-proof your business. Using Ethereum blockchain technology, ScoPym aims to get your business ready for web3, no matter what sector you operate in. Subscribe below to get the latest updates and take part in a revolutionary new tech that is sure to disrupt the way digitization happens today.</p>
        <div className="scop__header-content__input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Request Info</button>
        </div>
        <div className="scop__header-content__people">
          <img src={people} alt="people"/>
          <p>1,834 people are already on board!</p>
        </div>
      </div>
      <div className="scop__header-image">
        <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default Header