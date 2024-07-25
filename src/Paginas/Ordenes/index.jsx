import { ContainerCards } from "../../Componentes/ContainerCards"
import { CardOrden } from "../../Componentes/CardOrden"
import { useContext, useEffect, useState } from "react"
import { useFetchData } from "../../Helpers/useFetchData"
import { VerDetallesOrden } from "../../Componentes/VerDetallesOrden"
import { AppContext } from "../../Context"

export const Ordenes = () =>{
    const { userActual } = useContext(AppContext)

    const[ordenes, setOrdenes] = useState([])

    const{data, error} = useFetchData('http://localhost:5164/api/Orden')

    if(!error){
        useEffect(()=>{
            const ordenesUser = data.filter(d => d.usuarioId === userActual.id)
            setOrdenes(ordenesUser)
        },[data])
    }else{
        console.log(error)
    }

    return(
        <div>
            <VerDetallesOrden    />
            <ContainerCards>
                {ordenes &&
                ordenes.map(orden =>(
                    <CardOrden key={orden.id} item={orden} />   
                ))
                }
                
            </ContainerCards>
        </div>
    )
}