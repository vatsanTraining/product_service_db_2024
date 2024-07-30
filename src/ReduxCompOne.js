import React,{useSelector,useDispatch} from 'react-redux'
import ButtonPanel from './ButtonPanel'

const ReduxCompOne = () => {

    const firstName = useSelector((state)=>state.firstName)
    const lastName = useSelector((state)=>state.lastName)

     const dispatch = useDispatch()

     const handleFirstNameChange =() =>{

        dispatch({
            'type':'CHANGE_FIRST_NAME',
            'payload':'krishna'
        })


    }

    const handleLastNameChange =() =>{

        dispatch({
            'type':'CHANGE_LAST_NAME',
            'payload':'kumar'
        })


    }

    return (
    <div>

        <p>{firstName}{lastName}</p>
        
  <ButtonPanel changeFirst={handleFirstNameChange} changeLast ={handleLastNameChange}></ButtonPanel>
    </div>
  )
}

export default ReduxCompOne