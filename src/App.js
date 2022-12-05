import React from 'react'
import {Footer, Blog, Possibility, Header, Features, What} from './containers'
import {Article, Brand, Cta, Feature, Navbar} from './components'
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App