import { TrashIcon } from '@heroicons/react/16/solid'
import '../BotonEliminarProducto/styles.css'

export const BotonEliminarProducto = () =>{
    return(
        <span className='boton-eliminar-producto'>
            Eliminar
            <TrashIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
        </span>
    )
}