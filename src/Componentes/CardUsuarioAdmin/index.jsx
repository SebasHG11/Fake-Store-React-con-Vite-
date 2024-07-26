import { BotonCambiarRol } from '../BotonCambiarRol'
import { BotonEliminarItem } from '../BotonEliminarItem'
import '../Card/styles.css'

export const CardUsuarioAdmin = ({usuario}) =>{

    const handleErrorImg = (event) =>{
        event.target.src = 'https://img.freepik.com/vector-gratis/circulo-azul-usuario-blanco_78370-4707.jpg?size=338&ext=jpg'
    }

    return(
        <div className='product-container'>
            <img 
                className='product-container-img'
                src={usuario.foto} 
                alt={usuario.nombre}
                onError={handleErrorImg} 
            />
            <h2 className='product-container-categoria'>{usuario.nombre}</h2>
            <p className='product-container-precio'>{usuario.rol}</p>
            <BotonCambiarRol usuario={usuario} />
        </div>
    )
}