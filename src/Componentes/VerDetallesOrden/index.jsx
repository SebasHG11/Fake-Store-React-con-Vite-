import '../VerDetallesOrden/styles.css'
import { AppContext } from '../../Context'
import { useContext, useState, useEffect } from 'react'
import { XCircleIcon } from "@heroicons/react/16/solid"
import { CardProductoOrden } from '../CardProductoOrden'
import axios from 'axios'

export const VerDetallesOrden = () =>{
    const[productos, setProductos] = useState([])

    const context = useContext(AppContext)

    const handleCerrarDetalleOrden = (event) =>{
        event.preventDefault()
        context.setAsideDetalleOrden(false)
    }

    const formattedFecha = new Date(context.ordenDetalleSeleccionada.fecha).toLocaleString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true // Usa AM/PM
    })

    useEffect(() => {
        const verProductosPorIds = async (ordenProductos) => {
            try {
                const requests = ordenProductos.map(op => axios.get(`http://localhost:5164/api/Producto/${op.productoId}`))
                const responses = await Promise.all(requests)
                const productosConCantidad = responses.map((response, index) => ({
                    ...response.data,
                    cantidad: ordenProductos[index].cantidad
                }))
                setProductos(productosConCantidad)
            } catch (error) {
                console.log(error)
            }
        }

        if (context.ordenDetalleSeleccionada.ordenProductos) {
            verProductosPorIds(context.ordenDetalleSeleccionada.ordenProductos)
        }
    }, [context.ordenDetalleSeleccionada.ordenProductos])

    return(
        <aside
        style={{ display: context.asideDetalleOrden ? 'flex' : 'none' }} 
        className='container-detalle-orden'>
            <div>
                <span 
                onClick={(event)=>{
                    handleCerrarDetalleOrden(event)
                }}
                className='boton-cerrar-detalle-orden'>
                    <XCircleIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'red' }} />    
                </span>
            </div>
            <div className='container-cabecera'>
                <h2>{formattedFecha}</h2>
                <div className='container-cabecera-precio'>
                    <p>Precio Total:</p>
                    <p className='container-cabecera-valor'>${context.ordenDetalleSeleccionada.precioTotalCompra}</p>
                </div>    
            </div>
            <div>
            <div>
                    {productos.map(producto => (
                        <div key={producto.id}>
                            <CardProductoOrden producto={producto} />
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    )
}