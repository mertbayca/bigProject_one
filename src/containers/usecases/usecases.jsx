import React from 'react'
import usecasesImage from "../../assets/possibility.png"
import "./usecases.css"

const usecases = () => {
  return (
    <div className="gpt3__usecases section__padding" id="usecases">
      <div className="gpt3__usecases-image">
        <img src={usecasesImage} alt="usecases"/>
      </div>
      <div className="gpt3__usecases-content">
        <h4>Request info to get started</h4>
        <h1 className="gradient__text">Get your business integrated into the ScoPym ecosystem!</h1>
        <p>Once you request info, our team will contact you on getting your business on the blockchain. Don't worry though! 
          For a minimal fee, our team of experts will set you up, and all you need to do is sit back and relax! The ScoPym token will
          also be integrated into your business, and with it you can accept payments, run polls, get useful data and constructive critism 
          from our vast community. The ScoPym token also acts somehow like the NASDAQ for crypto, which means as its value goes up, every business 
          in the ScoPym ecosystem will benefit.</p>
        <h4>Request info to get started</h4>
      </div>
    </div>
  )
}

export default usecases