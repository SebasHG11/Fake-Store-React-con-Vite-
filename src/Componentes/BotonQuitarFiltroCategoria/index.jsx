import { useContext } from "react"
import { AppContext } from "../../Context"
import { useNavigate } from "react-router-dom"

export const BotonQuitarFiltroCategoria = () =>{
    const context = useContext(AppContext)
    const navigate = useNavigate()

    const handleQuitarFiltroCategoria = (event) =>{
        event.preventDefault()
        context.setFiltrarCategoria('')
        navigate('/home')
    }

    return(
        <div>
            <span
                className="boton-editar-producto"
                onClick={handleQuitarFiltroCategoria}
            >
                No filtrar por Categoria
            </span>  
        </div>
        
    )
}