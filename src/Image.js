import React from 'react'

const Image = ({url,altText}) => {
  return (
    <img src={url} alt={altText}></img>
  )
}

export default Image