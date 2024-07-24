import '../Card/styles.css'

export const CardProductoOrden = ({producto}) =>{
    return(
        <div className='product-container-orden'>
            <div>
                <img src={producto.imagen} alt={producto.nombre} className='product-container-img-orden'/>
            </div>
            <div>  
                <p className='product-container-name'>{producto.nombre}</p>
            </div>
            <div>
                <p className='product-container-precio'>${producto.precio}</p>      
            </div>
            <div>
                <p className='product-container-cantidad'>{producto.cantidad}</p>     
            </div>   
        </div>
    )
}