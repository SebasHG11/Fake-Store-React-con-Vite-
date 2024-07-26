import '../BusquedaProductos/styles.css'

export const BusquedaProductos = ({busqueda, setBusqueda}) =>{
    return(
        <div className='container-busqueda-productos'>
            <label htmlFor="inputSearch">Buscar</label>
            <input 
            name="inputSearch"
            type="text"
            placeholder='Ingresa...'
            value={busqueda}
            onChange={(event)=>{
                setBusqueda(event.target.value)
            }}
            />
        </div>
    )
}