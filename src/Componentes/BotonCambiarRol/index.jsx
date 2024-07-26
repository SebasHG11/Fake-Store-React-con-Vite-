import '../BotonEditarProducto/styles.css'
import { AppContext } from "../../Context"
import { useContext } from "react"
import { PencilSquareIcon } from "@heroicons/react/16/solid"

export const BotonCambiarRol = ({usuario}) =>{
    const context = useContext(AppContext)

    const handleBotonCambiarRol = (event) =>{
        event.preventDefault()
        context.setUsuarioSeleccionadoEdit(usuario)
        context.setOpenModal(true)
    }

    return(
        <span
        className="boton-editar-producto"
        onClick={handleBotonCambiarRol}
        >
            Cambiar Rol
            <PencilSquareIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
        </span>
    )
}