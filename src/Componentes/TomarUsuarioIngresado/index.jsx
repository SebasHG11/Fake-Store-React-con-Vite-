import { useContext, useEffect } from "react"
import { AppContext } from "../../Context"
import { useFetchData } from "../../Helpers/useFetchData"
import axios from "axios"

export const TomarUsuarioIngresado = () =>{

   const context = useContext(AppContext)

  const {data, error} = useFetchData('http://localhost:5164/api/Usuario/actual')

  const getUsuarioActual = async(url, id, token) =>{
        try{
            const res = await axios.get(`${url}/${id}`,{
                headers: {
                Authorization: `Bearer ${token}`
                }
            })
            context.setUserActual(res.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(data){
            const IdUsuarioIngresado = data.id
            const RolUsuarioIngresado = data.rol
            if(RolUsuarioIngresado === "admin"){
                context.setIsAdmin(true)
            }else{
                context.setIsAdmin(false)
            }
            if(IdUsuarioIngresado && context.token){
                getUsuarioActual('http://localhost:5164/api/Usuario', IdUsuarioIngresado, context.token)
            }        
        }
    },[context.isAuthenticated, context.token, data])

    return(
        <>
        </>
    )
}