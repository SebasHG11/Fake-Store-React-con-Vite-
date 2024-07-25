import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { AppContext } from "../Context"

export const useFetchData = (url) =>{
    const { token } = useContext(AppContext) 
    const [data, setData] = useState([])
    const [error, setError] = useState()

    const fetchData = async(url) =>{
        try{
          const response = await axios.get(url,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          setData(response.data)
        }catch(error){
          setError(error)
        }
      }

      useEffect(()=>{
        fetchData(url)
      },[url, token])

    return{
        data,
        error
    }
}