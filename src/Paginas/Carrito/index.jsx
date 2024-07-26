import { toast } from 'sonner'
import '../Carrito/style.css'
import { useContext } from 'react'
import { AppContext } from '../../Context'
import { Card } from '../../Componentes/Card'
import { ContainerCards } from '../../Componentes/ContainerCards'
import { useSumaTotal } from '../../Helpers/useSumaTotal'
import axios from 'axios'

export const Carrito = () =>{
    const context = useContext(AppContext)
    const { formatMonto } = useContext(AppContext)

    const {sumaTotal} = useSumaTotal(context.carrito)

    const postHacerOrden = async(url, token) =>{
        const orden = { productos:  context.carrito.map(c =>({
                    productoId: parseInt(c.id),
                    cantidad: parseInt(c.cantidad)
                })),
                precioTotalCompra: parseFloat(sumaTotal)
        }
        if(context.carrito.length > 0){
            try{
                const res = await axios.post(url, orden,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                context.setCarrito([])
                context.setNumCarrito(0)
                toast.success('¡Orden realizada con exito!', { duration: 3000 })
            }catch(error){
                console.log(error)
                toast.error('¡Ha ocurrido un error al intentar hacer la orden!', { duration: 3000 })
            }
        }else{
            toast.error('¡No hay productos para pedir!', { duration: 3000 })
        }
    }

    const handleComprarCarrito = (event) =>{
        event.preventDefault()
        postHacerOrden('http://localhost:5164/api/Orden', context.token)
    }

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
                <p>Total: ${formatMonto(sumaTotal)}</p>
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