import { PencilSquareIcon } from '@heroicons/react/16/solid'
import '../BotonEditarProducto/styles.css'
import { useContext } from 'react'
import { AppContext } from '../../Context'

export const BotonEditarProducto = ({item}) =>{
    const context = useContext(AppContext)

    const handleBotonEditar = (event) =>{
        event.preventDefault()
        context.setOpenModal(true)
        context.setProductoSeleccionadoEdit(item)
    }

    return(
        <span
        onClick={(event) =>{
            handleBotonEditar(event)
        }} 
        className='boton-editar-producto'>
            Editar
            <PencilSquareIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
        </span>
    )
}