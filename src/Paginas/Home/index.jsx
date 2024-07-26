import { useContext, useEffect, useState } from 'react'
import { ContainerCards } from '../../Componentes/ContainerCards'
import { Card } from '../../Componentes/Card'
import { useFetchData } from '../../Helpers/useFetchData'
import { BusquedaProductos } from '../../Componentes/BusquedaProductos'
import { TomarUsuarioIngresado } from '../../Componentes/TomarUsuarioIngresado'
import { AppContext } from '../../Context'
import { BotonQuitarFiltroCategoria } from '../../Componentes/BotonQuitarFiltroCategoria'

export const Home = () =>{

  const context = useContext(AppContext)
  
  const[items, setItems] = useState([])
  const[busqueda, setBusqueda] = useState('')

  const {data, error} = useFetchData('http://localhost:5164/api/Producto')
  
  if(error){
    console.log(error)
  }

  useEffect(()=>{
    setItems(data)
  }, [data])

  useEffect(()=>{
    if(context.filtrarCategoria.length === 0){
      setItems(data)
    }else{
      const arrayFilterCategoria = data.filter(d=>
        d.categoria?.nombre?.toLowerCase().includes(context.filtrarCategoria.toLowerCase())
      )
      setItems(arrayFilterCategoria)
    }  
  },[data])

  const arrayBusqueda = items.filter(item=>{
    return item.nombre.toLowerCase().includes(busqueda.toLowerCase())
  })

  return(
    <>
    <TomarUsuarioIngresado />
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