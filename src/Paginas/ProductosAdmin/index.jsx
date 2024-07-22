import '../ProductosAdmin/styles.css'
import { FormProductosAdmin } from '../../Componentes/FormProductosAdmin'
import { ContainerCards } from '../../Componentes/ContainerCards'
import { CardAdmin } from '../../Componentes/CardAdmin'
import { useFetchData } from '../../Helpers/useFetchData'
import { useEffect, useState } from 'react'

export const ProductosAdmin = () =>{
    const[productos, setProductos] = useState([])
    const {data, error} = useFetchData('http://localhost:5164/api/Producto')

    if(error){
        console.log(error)
    }else{
        useEffect(()=>{
            setProductos(data)
        },[data])    
    }

    return(
        <>
            <div className='container-productos-admin'>
                <FormProductosAdmin />
            </div>
            <ContainerCards>
                    {productos &&
                        productos.map(producto =>(
                            <CardAdmin 
                            key={producto.id} 
                            item={producto} 
                            />
                        ))
                    }
            </ContainerCards>    
        </>
    )
}