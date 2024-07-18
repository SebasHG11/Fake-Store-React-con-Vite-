import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import { ContainerCards } from './Componentes/ContainerCards'
import { Card } from './Componentes/Card'
import { NavBar } from './Componentes/NavBar'
import { AppProvider } from './Context'

export const App = () =>{
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
    <AppProvider>
      <NavBar />
        <ContainerCards>
          {data &&
            data.map((p)=>(
              <Card key={p.id} nombre={p.nombre} categoria={p.categoria.nombre} imagen={p.imagen} precio={p.precio} />
            ))
          }
        </ContainerCards>
    </AppProvider>
  )
}