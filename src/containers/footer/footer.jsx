import React from 'react'
import "./footer.css"
import flogo from "../../assets/logo.svg"

const footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Step into the future and become the leaders of tomorrow.</h1>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={flogo} alt="logo"/>
          <p>Website created by Mert Bayça. All rights reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>mertbayca@gmail.com</p>
          <p>Placeholder St. P34 C32 Somewhere/Allthetime</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>ScoPym 2022. All rights reserved</p>
      </div>
    </div>
  )
}

export default footer