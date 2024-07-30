
import React,{useState} from 'react'
import ContextConsumer, { MyContext } from './ContextConsumer'
const ContextWrapper = () => {

    const [greet,setGreet]= useState("")

  return (
    <div>
<MyContext.Provider value={{greet,setGreet}}>
  <ContextConsumer></ContextConsumer>
</MyContext.Provider>
    </div>
  )
}

export default ContextWrapper