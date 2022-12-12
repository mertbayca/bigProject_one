import React from 'react'
import "./article.css"

const article = ({imgUrl,date,title}) => {
  return (
    <div className="scop__blog-container_article">
      <div className="scop__blog-container_article-image">
        <img src={imgUrl} alt="blog-image"/>
      </div>
      <div className="scop__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  )
}

export default article