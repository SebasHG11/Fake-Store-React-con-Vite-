import { useContext } from 'react'
import '../BotonEditarProducto/styles.css'
import { PencilSquareIcon } from '@heroicons/react/16/solid'
import { AppContext } from '../../Context'

export const BotonEditarCategoria = ({item}) =>{
    const context = useContext(AppContext)

    const handleEditarCategoria = (event) =>{
        event.preventDefault()
        context.setOpenModal(true)
        context.setCategoriaSeleccionadaEdit(item)
    }

    return(
        <span 
        onClick={(event)=>{
            handleEditarCategoria(event)
        }}
        className="boton-editar-producto">
            Editar
            <PencilSquareIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
        </span>
    )
}