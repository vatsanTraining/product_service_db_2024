import React from 'react'

const Image = ({url,altText,renderImage}) => {
    {
         if(renderImage)
        return <img src={url} alt={altText}></img>
    }
  
}

export default Image