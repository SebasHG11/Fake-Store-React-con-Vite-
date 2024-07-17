import '../Card/styles.css'

export const Card = ({nombre, categoria, imagen, precio}) =>{
    return(
        <div className='product-container'>
            <h3 className='product-container-title'>{nombre}</h3>
            <p className='product-container-categoria'>{categoria}</p>
            <img src={imagen} alt={nombre} className='product-container-img'/>
            <p>${precio}</p>
        </div>
    )
}