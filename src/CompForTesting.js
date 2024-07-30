import React,{useState} from 'react'

const CompForTesting = ({name,handleClick}) => {

    const [counter,setCounter] =useState(0)

  return (
    <div>
        <p>{name}</p>
        <p data-testid='para1'>{counter}</p>


        <button data-testid='incBtn' onClick={()=>{setCounter(counter=>counter+1)}}>Increment</button>

        <button data-testid='decBtn' onClick={()=>{setCounter(counter=>counter-1)}}>Decrement</button>

           <button role='resetBtn' onClick={handleClick}>Submit</button>

           <button type='button' role='testing' data-testid='btn4' 
           onClick={()=>{
            handleClick("HelloWorld")
           }}>Testing</button>

    </div>
  )
}

export default CompForTesting

