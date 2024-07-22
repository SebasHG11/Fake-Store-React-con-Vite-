import { BotonEditarProducto } from '../BotonEditarProducto'
import { BotonEliminarProducto } from '../BotonEliminarProducto'
import '../CardAdmin/styles.css'

export const CardAdmin = ({item}) =>{
    return(
        <div className='container-card-admin'>
            <p className='container-card-admin-name'>{item.nombre}</p>
            <img className='container-card-admin-img' src={item.imagen} alt={item.nombre} />
            <BotonEliminarProducto />
            <BotonEditarProducto />
        </div>
    )
}