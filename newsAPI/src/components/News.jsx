import React from 'react'

const News = ({news}) => {
    console.log(news)
  return (
    <div>{news.title}</div>
  )
}

export default News