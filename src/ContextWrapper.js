
import React,{useState} from 'react'
import ContextConsumer from './ContextConsumer'
import { MyContext } from './MyContext';
import AnotherConsumer from './AnotherConsumer';
import { GiftContext } from './GiftContext';
import ConsumerWithOutProver from './ConsumerWithOutProver';

const ContextWrapper = () => {

    const [greet,setGreet]= useState("")

    const gift ="iphone 16"
  return (
    <div>

<GiftContext.Provider value={{gift}}>
<MyContext.Provider value={{greet,setGreet}}>

  <ContextConsumer></ContextConsumer>
</MyContext.Provider>
</GiftContext.Provider>

<ConsumerWithOutProver></ConsumerWithOutProver>

    </div>
  )
}

export default ContextWrapper