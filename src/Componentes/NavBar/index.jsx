import '../NavBar/styles.css'
import { useContext } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/16/solid'
import { AppContext } from '../../Context'

export const NavBar = () =>{
    const context = useContext(AppContext)

    return(
        <div className='container'>
            <nav className='NavBar'>
                <ul>
                    <li><a href="">SkibiriShop</a></li>
                    <li><a href="">Categorias</a></li>
                    <li><a href="">Cuenta</a></li>
                    <li><a href="">Cerrar Sesión</a></li>
                    <li className='container-car'>
                        <a href="">
                            <ShoppingCartIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
                            <p className='car-numero'>{context.numCarrito}</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}