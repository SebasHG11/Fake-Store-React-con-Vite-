import { PencilSquareIcon } from '@heroicons/react/16/solid'
import '../BotonEditarProducto/styles.css'

export const BotonEditarProducto = () =>{
    return(
        <span className='boton-editar-producto'>
            Editar
            <PencilSquareIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
        </span>
    )
}