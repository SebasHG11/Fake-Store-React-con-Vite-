import '../NavBar/styles.css'
import { ShoppingCartIcon } from '@heroicons/react/16/solid'

export const NavBar = () =>{
    return(
        <div className='container'>
            <nav className='NavBar'>
                <ul>
                    <li><a href="">SkibiriShop</a></li>
                    <li><a href="">SkibiriShop</a></li>
                    <li><a href="">SkibiriShop</a></li>
                    <li><a href="">SkibiriShop</a></li>
                    <li className='container-car'>
                        <a href="">
                            <ShoppingCartIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
                            <p className='car-numero'>5</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}