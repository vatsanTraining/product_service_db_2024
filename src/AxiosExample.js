import React,{useState,useEffect} from 'react'
import axios from 'axios'
const AxiosExample = () => {

    const [list,setList] = useState([]);

    useEffect(()=>{

        async function  fetchData(){

            let list =  await axios.get("city.json")
             setList(list.data)
        }

        fetchData();
    },[])

    const createElement = (element,idx) =>{
      return  <p key={idx}>{element.cityName}</p>
    }
  return (
    <div>
      { list.map(createElement) }
    </div>
  )
}

export default AxiosExample