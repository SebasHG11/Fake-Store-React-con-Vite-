import '../Card/styles.css'
import { useContext } from 'react'
import { AppContext } from '../../Context'
import { ShoppingCartIcon, ArchiveBoxXMarkIcon, PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/16/solid'

export const Card = ({ producto }) =>{
    const context = useContext(AppContext)

    const productoEnCarrito = context.carrito.find(p => p.id === producto.id)
    const existeEnCarrito = context.carrito.some(p => p.id === producto.id)

    const agregarProductoaCarro = (event, producto) =>{
        event.preventDefault()

        const existeEnCarrito = context.carrito.some(p => p.id === producto.id)

        if(existeEnCarrito){
            const newCarrito = context.carrito.filter(p => p.id !== producto.id)
            context.setCarrito(newCarrito)
            context.setNumCarrito(context.numCarrito - productoEnCarrito.cantidad)
        }else{
            context.setNumCarrito(context.numCarrito + 1)
            context.setCarrito([{...producto, cantidad: 1}, ...context.carrito])
        }    
    }

    const aumentarCantidad = (event, producto) =>{
        event.preventDefault()

        const newCarrito = context.carrito.map(p=>(
            p.id === producto.id ? {...producto, cantidad: p.cantidad + 1} : p
        ))
        context.setCarrito(newCarrito)
        context.setNumCarrito(context.numCarrito + 1)
    }

    const disminuirCantidad = (event, producto) =>{
        event.preventDefault()

        if(productoEnCarrito){
            if(productoEnCarrito.cantidad > 1){
                const newCarrito = context.carrito.map(p=>(
                    p.id === producto.id ? {...p, cantidad: p.cantidad - 1} : p
                ))
                context.setCarrito(newCarrito)
                context.setNumCarrito(context.numCarrito - 1)
            }
            else if(productoEnCarrito.cantidad === 1){
                const newCarrito = context.carrito.filter(p => p.id !== producto.id)
                context.setCarrito(newCarrito)
                context.setNumCarrito(context.numCarrito - 1)
            }
        }
    }

    // console.log(context.carrito)

    return(
        <div className='product-container'>
            <p className='product-container-categoria'>{producto.categoria.nombre}</p>
            <img src={producto.imagen} alt={producto.nombre} className='product-container-img'/>
            <p className='product-container-name'>{producto.nombre}</p>
            <p className='product-container-precio'>${producto.precio}</p>
            <span 
                onClick={(event) =>agregarProductoaCarro(event, producto)} 
                className={existeEnCarrito ? 'agregado-al-carro' : 'agregar-carro'}
                >
                    {existeEnCarrito
                    ?
                    <>
                    Quitar
                    <ArchiveBoxXMarkIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
                    </>
                    :
                    <>
                    Agregar
                    <ShoppingCartIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
                    </>
                    }
            </span>
            {existeEnCarrito
            &&
            <div className='container-cantidad-producto'>
                <span
                onClick={(event)=>{
                    aumentarCantidad(event, producto)
                }}
                >
                    <PlusCircleIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'black' }} />
                </span>
                <p className='cantidad-text'>{productoEnCarrito.cantidad}</p>
                <span
                onClick={(event)=>{
                    disminuirCantidad(event, producto)
                }}
                >
                    <MinusCircleIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'black' }} />
                </span>
            </div>
            }
        </div>
    )
}