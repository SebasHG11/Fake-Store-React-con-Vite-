import '../Card/styles.css'

export const Card = ({nombre, categoria, imagen, precio}) =>{
    return(
        <div className='product-container'>
            <p className='product-container-categoria'>{categoria}</p>
            <img src={imagen} alt={nombre} className='product-container-img'/>
            <p className='product-container-name'>{nombre}</p>
            <p className='product-container-precio'>${precio}</p>
            <span className='agregar-carro'>Agregar</span>
        </div>
    )
}