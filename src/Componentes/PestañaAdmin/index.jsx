import { NavLink } from 'react-router-dom'
import '../PestañaAdmin/styles.css'

export const PestañaAdmin = () =>{
    return(
        <aside className='pestaña-admin'>
            <h2>Inventario</h2>
            <span>
                <NavLink 
                className='pestaña-admin-text'
                >
                    Usuarios
                </NavLink>
            </span>
            <span>
                <NavLink 
                to='/admin/categorias'
                className='pestaña-admin-text'
                >
                    Categorias
                </NavLink>
            </span>
            <span>
                <NavLink
                to='/admin/productos'
                className='pestaña-admin-text'
                >
                    Productos
                </NavLink>
            </span>
        </aside>
    )
}