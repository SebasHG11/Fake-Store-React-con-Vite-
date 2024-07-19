import { Toaster, toast } from 'sonner'
import '../Carrito/style.css'
import { useContext } from 'react'
import { AppContext } from '../../Context'
import { Card } from '../../Componentes/Card'
import { ContainerCards } from '../../Componentes/ContainerCards'
import { useSumaTotal } from '../../Helpers/useSumaTotal'

export const Carrito = () =>{
    const context = useContext(AppContext)

    const {sumaTotal} = useSumaTotal(context.carrito)

    const handleComprarCarrito = (event) =>{
        event.preventDefault()
        context.setCarrito([])
        context.setNumCarrito(0)
        toast.success('¡Compra realizada con exito!')
    }

    return(
        <>
        <Toaster richColors />
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
                <span
                onClick={(event)=>{
                    handleComprarCarrito(event)
                }}
                >Comprar</span>
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