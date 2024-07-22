import '../CardProductoAdmin/styles.css'
import { BotonEliminarItem } from '../BotonEliminarItem'

export const CardCategoriaAdmin = ({item}) =>{
    const urlCategorias = 'http://localhost:5164/api/Categoria'

    return(
        <div className='container-card-admin'>
            <p className='container-card-admin-name'>{item.nombre}</p>
            <img className='container-card-admin-img' src={item.imagen} alt={item.nombre} />
            <BotonEliminarItem item={item} urlItems={urlCategorias} />
        </div>
    )
}