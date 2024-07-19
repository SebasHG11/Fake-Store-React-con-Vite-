import { useContext } from 'react'
import '../Carrito/style.css'
import { AppContext } from '../../Context'
import { Card } from '../../Componentes/Card'
import { ContainerCards } from '../../Componentes/ContainerCards'
import { useSumaTotal } from '../../Helpers/useSumaTotal'

export const Carrito = () =>{
    const context = useContext(AppContext)

    const {sumaTotal} = useSumaTotal(context.carrito)

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
            <div className='cabecera-carrito'>
                <p>Total: ${sumaTotal}</p>
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