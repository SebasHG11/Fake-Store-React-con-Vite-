import { BotonEditarProducto } from '../BotonEditarProducto'
import { BotonEliminarProducto } from '../BotonEliminarProducto'
import '../CardAdmin/styles.css'

export const CardAdmin = ({item, setProductos, productos}) =>{
    const urlProductos = 'http://localhost:5164/api/Producto'

    return(
        <div className='container-card-admin'>
            <p className='container-card-admin-name'>{item.nombre}</p>
            <img className='container-card-admin-img' src={item.imagen} alt={item.nombre} />
            <BotonEliminarProducto item={item} urlItems={urlProductos} />
            <BotonEditarProducto />
        </div>
    )
}