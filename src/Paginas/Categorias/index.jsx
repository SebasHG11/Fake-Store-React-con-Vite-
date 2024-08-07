import '../Categorias/styles.css'
import { useEffect, useState } from 'react'
import { ContainerCards } from '../../Componentes/ContainerCards'
import { CardCategoria } from '../../Componentes/CardCategoria'
import { BotonQuitarFiltroCategoria } from '../../Componentes/BotonQuitarFiltroCategoria'
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
        <>
            <div className='container-boton'>
                <BotonQuitarFiltroCategoria />
            </div>  
            <ContainerCards>
                {categorias &&
                categorias.map(cat =>(
                <CardCategoria key={cat.id} categoria={cat} /> 
                ))
                }     
            </ContainerCards>
        </>
    )
}