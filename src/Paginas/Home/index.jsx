import { useEffect, useState } from 'react'
import { ContainerCards } from '../../Componentes/ContainerCards'
import { Card } from '../../Componentes/Card'
import { useFetchData } from '../../Helpers/useFetchData'
import { BusquedaProductos } from '../../Componentes/BusquedaProductos'

export const Home = () =>{
  const[items, setItems] = useState([])
  const[busqueda, setBusqueda] = useState('')

  const {data, error} = useFetchData('http://localhost:5164/api/Producto')
  
  {!error ?
    useEffect(()=>
    setItems(data),[data])
    :
    console.log(error)
  }

  const arrayBusqueda = items.filter(item=>{
    return item.nombre.toLowerCase().includes(busqueda.toLowerCase())
  })

  return(
    <>
    <BusquedaProductos 
    busqueda={busqueda}
    setBusqueda={setBusqueda}
    />
      <ContainerCards>
        {arrayBusqueda &&
          arrayBusqueda.map((p)=>(
            <Card key={p.id} producto={p} />
          ))
        }
      </ContainerCards>
    </>
  )
}