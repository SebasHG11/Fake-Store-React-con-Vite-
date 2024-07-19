import { useContext } from 'react'
import '../Carrito/style.css'
import { AppContext } from '../../Context'
import { Card } from '../../Componentes/Card'
import { ContainerCards } from '../../Componentes/ContainerCards'

export const Carrito = () =>{
    const context = useContext(AppContext)

    return(
        <>
        {(context.carrito.length === 0)
        &&
        <div className="mensaje-carrito">
            No hay productos en el carrito ¡Agrega uno!
        </div>
        }

        {context.carrito.length > 0 &&(
            <>
            <div>
                Total: 0$
                <span>Comprar</span>
            </div>
            <ContainerCards>
                    {context.carrito.map(p =>(
                        <Card key={p.id} producto={p} />
                    ))}
            </ContainerCards>
            </>
        )}
        </>
    )
}