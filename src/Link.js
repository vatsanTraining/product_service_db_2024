import React from 'react'

const Link = ({link,linkText}) => {
  return (
    <a href={link}>{linkText}</a>
  )
}

export default Link