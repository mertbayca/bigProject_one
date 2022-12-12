import React from 'react'
import "./blog.css"
import {Article} from "../../components"
import {blog01, blog02, blog03, blog04, blog05} from "./imports"

const blog = () => {
  return (
    <div className="scop__blog section__padding">
      <div className="scop__blog-heading">
        <h1 className="gradient__text">This is a fast changing space. Check out how we're keeping up.</h1>
      </div>
      <div className="scop__blog-container">
        <div className="scop__blog-container_groupA">
          <Article imgUrl={blog01} date="Dec 15, 2022" title="Now accepting beta testers for ScoPym Mobile. Here's how you can apply: Dev Journal Week 38"/>
        </div>
        <div className="scop__blog-container_groupB">
          <Article imgUrl={blog02} date="Dec 10, 2022" title="AI and web3: How will scop affect the cryptospace?"/>
          <Article imgUrl={blog03} date="Dec 09, 2022" title="ScoPym now partnered with Binance!"/>
          <Article imgUrl={blog04} date="Dec 08, 2022" title="Development on ScoPym Mobile near completion: Dev Journal Week 37"/>
          <Article imgUrl={blog05} date="Dec 07, 2022" title="How are we taking precautions against hackers? An in-depth answer to an important topic"/>
        </div>
      </div>
    </div>
  )
}

export default blog