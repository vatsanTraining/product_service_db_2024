import React, { useContext } from 'react'
import { GiftContext } from './GiftContext'

const ConsumerWithOutProver = () => {

    const gift = useContext(GiftContext)



  return (
    <div>
        <h4>Default Gift{gift}</h4>
    </div>
  )
}

export default ConsumerWithOutProver