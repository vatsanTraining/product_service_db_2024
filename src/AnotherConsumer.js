import React,{useContext} from 'react'
import { MyContext } from './MyContext'
const AnotherConsumer = () => {

    const {greet,setGreet} = useContext(MyContext)

  return (
    <div>
        <p>{greet}</p>
        <button onClick={()=>{setGreet("Good Morning !")}}>Second</button>
    </div>
  )
}

export default AnotherConsumer