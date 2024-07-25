import { useContext } from "react"
import { AppContext } from "../../Context"
import { Navigate } from "react-router-dom"

export const RutaProtegida = ({children}) =>{
    const context = useContext(AppContext)

    return context.isAuthenticated ? children : <Navigate to='/login' />
}