import { BotonEditarProducto } from '../BotonEditarProducto'
import { BotonEliminarItem } from '../BotonEliminarItem'
import './styles.css'

export const CardProductoAdmin = ({item}) =>{
    const urlProductos = 'http://localhost:5164/api/Producto'

    return(
        <div className='container-card-admin'>
            <p className='container-card-admin-name'>{item.nombre}</p>
            <img className='container-card-admin-img' src={item.imagen} alt={item.nombre} />
            <BotonEditarProducto item={item} />
            <BotonEliminarItem item={item} urlItems={urlProductos} />
        </div>
    )
}