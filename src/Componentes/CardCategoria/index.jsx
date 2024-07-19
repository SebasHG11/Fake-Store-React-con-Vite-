import '../CardCategoria/styles.css'

export const CardCategoria = ({ categoria }) =>{

    return(
        <div className='categoria-container'>
            <p className='categoria-nombre'>{categoria.nombre}</p>
            <img src={categoria.imagen} alt={categoria.nombre} className='categoria-container-img'/>
        </div>
    )
}