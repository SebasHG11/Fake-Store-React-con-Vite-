import axios from "axios"
import { useState, useEffect } from "react"

export const useFetchData = (url) =>{
    const [data, setData] = useState([])
    const [error, setError] = useState()

    const fetchData = async(url) =>{
        try{
          const response = await axios.get(url)
          setData(response.data)
        }catch(error){
          setError(error)
        }
      }

      useEffect(()=>{
        fetchData(url)
      },[])

    return{
        data,
        error
    }
}