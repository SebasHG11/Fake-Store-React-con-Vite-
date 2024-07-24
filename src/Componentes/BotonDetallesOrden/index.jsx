import { PlusCircleIcon } from "@heroicons/react/16/solid"
import '../BotonEditarProducto/styles.css'
import { useContext } from "react"
import { AppContext } from "../../Context"

export const BotonDetallesOrden = ({item}) =>{
    const context = useContext(AppContext)

    const handleVerDetallesOrden = (event, orden) =>{
        event.preventDefault()
        context.setOrdenDetalleSeleccionada(orden)
        console.log(orden)
        context.setAsideDetalleOrden(true)
    }

    return(
        <span
        onClick={(event)=>{
            handleVerDetallesOrden(event,item)
        }}
        className='boton-editar-producto'>
            Ver Detalles
            <PlusCircleIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
        </span>
    )
}