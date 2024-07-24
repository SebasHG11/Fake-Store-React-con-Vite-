import '../NavBar/styles.css'
import { useContext } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/16/solid'
import { AppContext } from '../../Context'
import { NavLink } from 'react-router-dom'
import { Toaster } from 'sonner'

export const NavBar = () =>{
    const context = useContext(AppContext)

    return(
        <>
        <Toaster position='top-left' richColors />
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
                            <NavLink
                            to='/ordenes'
                            className={({isActive})=>
                                isActive ? 'active-style' : undefined}
                            >
                                Ordenes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                Cuenta
                            </NavLink> 
                        </li>
                        <li>
                            <NavLink>
                                Cerrar Sesión
                            </NavLink> 
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
        </>
    )
}