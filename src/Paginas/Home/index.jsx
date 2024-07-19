import axios from 'axios'
import { useEffect, useState } from 'react'
import { ContainerCards } from '../../Componentes/ContainerCards'
import { Card } from '../../Componentes/Card'
import { useFetchData } from '../../Helpers/useFetchData'

export const Home = () =>{
  const[items, setItems] = useState([])

  const {data, error} = useFetchData('http://localhost:5164/api/Producto')
  
  {!error ?
    useEffect(()=>
    setItems(data),[data])
    :
    console.log(error)
  }
  
  return(
    <ContainerCards>
      {items &&
        items.map((p)=>(
          <Card key={p.id} producto={p} />
        ))
      }
    </ContainerCards>
  )
}