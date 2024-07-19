import { ContainerCardsCategorias } from '../../Componentes/ContainerCardsCategorias'
import { CardCategoria } from '../../Componentes/CardCategoria'
import { useEffect, useState } from 'react'
import { useFetchData } from '../../Helpers/useFetchData'

export const Categorias = () =>{
    const[categorias, setCategorias] = useState([])

    const {data, error} = useFetchData('http://localhost:5164/api/Categoria')

    {!error ?
        useEffect(()=>{
            setCategorias(data)
        },[data])
        :
        console.log(error)
    }

    return(
        <ContainerCardsCategorias>
            {categorias &&
            categorias.map(cat =>(
               <CardCategoria key={cat.id} categoria={cat} /> 
            ))
            }     
        </ContainerCardsCategorias>
    )
}