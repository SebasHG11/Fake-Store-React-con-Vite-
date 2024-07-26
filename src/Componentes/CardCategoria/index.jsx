import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context'
import '../CardCategoria/styles.css'

export const CardCategoria = ({ categoria }) =>{
    const context = useContext(AppContext)
    const navigate = useNavigate()

    const handleFiltrarPorCategoria = (event) =>{
        event.preventDefault()
        context.setFiltrarCategoria(categoria.nombre)
        navigate('/home')
    }

    return(
        <div 
            className='categoria-container'
            onClick={handleFiltrarPorCategoria}
        >
            <p className='categoria-nombre'>{categoria.nombre}</p>
            <img src={categoria.imagen} alt={categoria.nombre} className='categoria-container-img'/>
        </div>
    )
}