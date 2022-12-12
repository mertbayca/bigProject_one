import React from 'react'
import "./features.css"
import {Feature} from "../../components"

const featuresData = [
  {
    title: "Download Trust Wallet",
    text: <><a href="https://trustwallet.com/">Click here to get started on setting up your wallet</a> </>,
  },
  {
    title: "Launch PancakeSwap",
    text: "Open PancakeSwap from the Dapps section of Trust Wallet",
  },
  {
    title: "Buy our Token!",
    text: "Copy and paste the token contract address into PancakeSwap, set the slippage to 2% and click buy!",
  },
  {
    title: "Our Contract Address",
    text: "0xB842H3I095834REA32747CT",
  },
  {
    title: "Or Buy From Exchanges",
    text: "Our token is readily available to buy on Binance, Kucoin, Kraken and Coinbase.",
  }
]

const features = () => {
  return (
    <div className="scop__features section__padding" id="features">
      <div className="scop__features-heading">
        <h1 className="gradient__text">The Future is Now. Be a Part of the Future Today with ScoPym!</h1>
        <p>Follow these steps to buy the ScoPym token and join the ecosystem</p>
      </div>
      <div className="scop__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default features