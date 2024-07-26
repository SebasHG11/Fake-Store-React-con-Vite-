import '../NavBar/styles.css'
import { useContext } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/16/solid'
import { AppContext } from '../../Context'
import { NavLink, useNavigate } from 'react-router-dom'
import { Toaster } from 'sonner'

export const NavBar = () =>{
    const context = useContext(AppContext)
    const navigate = useNavigate()

    const LogOut = () =>{
        localStorage.removeItem('TOKEN-SHOP')
        context.setIsAuthenticated(false)
        context.setAsideDetalleOrden(false)
        navigate('/login')
    }

    const handleImageError = (event) => {
        event.target.src = 'https://img.freepik.com/vector-gratis/circulo-azul-usuario-blanco_78370-4707.jpg?size=338&ext=jpg';
    }

    return(
        <>
        <Toaster position='top-left' richColors />
            <div className='container'>
                <nav className='NavBar'>
                    <ul>
                        <li>
                            <img 
                            src={context.userActual.foto} 
                            alt={context.userActual.nombre}
                            onError={handleImageError}
                            className='foto-perfil'
                            />
                        </li>
                        <li>
                            <NavLink 
                            to='/home'
                            className={({isActive})=> 
                                isActive ? 'active-style' : undefined}
                            >
                                MegaShop
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
                            <NavLink
                            to='/usuario/cuenta'
                            className={({isActive})=>
                                isActive ? 'active-style' : undefined}>
                                Cuenta
                            </NavLink> 
                        </li>
                        <li>
                            <NavLink
                            onClick={(event)=>{
                                LogOut(event)
                            }}>
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