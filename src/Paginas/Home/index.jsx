import axios from 'axios'
import { useEffect, useState } from 'react'
import { ContainerCards } from '../../Componentes/ContainerCards'
import { Card } from '../../Componentes/Card'

export const Home = () =>{
  const [data, setData] = useState([])

  const fetchData = async() =>{
    try{
      const response = await axios.get('http://localhost:5164/api/Producto')
      setData(response.data)
      console.log(response.data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return(
    <ContainerCards>
      {data &&
        data.map((p)=>(
          <Card key={p.id} producto={p} />
        ))
      }
    </ContainerCards>
  )
}