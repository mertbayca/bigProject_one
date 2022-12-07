import React from 'react'
import "./brand.css"
import {binance, coinbase, kraken, kucoin} from "./imports"

const brand = () => {
  return (
    <div className="scop__brand section__padding">
      <div>
        <img src={binance} alt="binance"/>
      </div>
      <div>
        <img src={coinbase} alt="coinbase"/>
      </div>
      <div>
        <img src={kraken} alt="kraken"/>
      </div>
      <div>
        <img src={kucoin} alt="kucoin"/>
      </div>
    </div>
  )
}

export default brand