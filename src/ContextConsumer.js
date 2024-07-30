import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const ContextConsumer = () => {
      const {greet,setGreet}=useContext(MyContext);
  return (
    <div>
        <p>{greet}</p>
<button onClick={()=>{setGreet('Hello From Consumer')}}></button>
    </div>
  )
}

export default ContextConsumer