import '../Card/styles.css'
import { useContext } from 'react'
import { AppContext } from '../../Context'

export const Card = ({ producto }) =>{
    const context = useContext(AppContext)

    const agregarProductoaCarro = (event, producto) =>{
        event.preventDefault()
        context.setNumCarrito(context.numCarrito + 1)
        context.setCarrito([producto, ...context.carrito])
    }

    console.log(context.carrito)

    return(
        <div className='product-container'>
            <p className='product-container-categoria'>{producto.categoria.nombre}</p>
            <img src={producto.imagen} alt={producto.nombre} className='product-container-img'/>
            <p className='product-container-name'>{producto.nombre}</p>
            <p className='product-container-precio'>${producto.precio}</p>
            <span onClick={(event) =>agregarProductoaCarro(event, producto)} className='agregar-carro'>Agregar</span>
        </div>
    )
}