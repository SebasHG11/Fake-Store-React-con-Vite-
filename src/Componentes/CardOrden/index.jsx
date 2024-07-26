import { useContext } from 'react';
import { BotonCancelarOrden } from '../BotonCancelarOrden';
import { BotonDetallesOrden } from '../BotonDetallesOrden';
import '../Card/styles.css'
import { AppContext } from '../../Context';

export const CardOrden = ({item}) =>{
    const { formatMonto } = useContext(AppContext)

    const formattedFecha = new Date(item.fecha).toLocaleString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true // Usa AM/PM
    })

    return(
        <div className='product-container'>
            <h2 className='product-container-categoria'>{formattedFecha}</h2>
            <p className='product-container-name'>${formatMonto(item.precioTotalCompra)}</p>
            <p className='product-container-precio'>{item.ordenProductos.length} productos</p>
            <BotonDetallesOrden item={item} />
            <BotonCancelarOrden url='http://localhost:5164/api/Orden' id={item.id} />
        </div>
    )
}