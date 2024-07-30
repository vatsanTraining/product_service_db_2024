import React, { useContext } from 'react'
import { MyContext } from './MyContext';
import AnotherConsumer from './AnotherConsumer';
import { GiftContext } from './GiftContext';
const ContextConsumer = () => {
      const {greet,setGreet}=useContext(MyContext);
      const {gifts} =useContext(GiftContext)
  return (
    <div>
        <p>{greet}</p>
        <p>Your Gift :{gifts}</p>
<button onClick={()=>{setGreet('Hello From Consumer')}}>Greet</button>

<AnotherConsumer></AnotherConsumer>

    </div>
  )
}

export default ContextConsumer