import '../NavBar/styles.css'
import { useContext } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/16/solid'
import { AppContext } from '../../Context'
import { NavLink } from 'react-router-dom'

export const NavBar = () =>{
    const context = useContext(AppContext)

    return(
        <div className='container'>
            <nav className='NavBar'>
                <ul>
                    <li>
                        <NavLink 
                        to='/home'
                        className={({isActive})=> 
                            isActive ? 'active-style' : undefined}
                        >
                            SkibiriShop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to='/categorias'
                        className={({isActive})=>
                            isActive ? 'active-style' : undefined}
                        >
                            Categorias
                        </NavLink>   
                    </li>
                    <li>
                        <NavLink>
                            Ordenes
                        </NavLink>
                    </li>
                    <li>
                        <a href="">Cuenta</a>
                    </li>
                    <li>
                        <a href="">Cerrar Sesión</a>
                    </li>
                    <li className='container-car'>
                        <NavLink
                        to='/carrito'
                        className={({isActive}) =>
                            isActive ? 'active-style' : undefined}
                        >
                            <ShoppingCartIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
                            <p className='car-numero'>{context.numCarrito}</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}