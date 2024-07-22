import '../ProductosAdmin/styles.css'
import { FormProductosAdmin } from '../../Componentes/FormProductosAdmin'
import { ContainerCards } from '../../Componentes/ContainerCards'
import { CardProductoAdmin } from '../../Componentes/CardProductoAdmin'
import { useFetchData } from '../../Helpers/useFetchData'
import { useContext, useEffect, useState } from 'react'
import { ModalFormEditar } from '../../Componentes/ModalFormEditar'
import { AppContext } from '../../Context'
import { FormEditarProductosAdmin } from '../../Componentes/FormEditarProductosAdmin'

export const ProductosAdmin = () =>{
    const context = useContext(AppContext)

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
                            <CardProductoAdmin 
                            key={producto.id} 
                            item={producto}
                            />
                        ))
                    }
            </ContainerCards>
            {context.openModal
            &&
            <ModalFormEditar>
                <FormEditarProductosAdmin />
            </ModalFormEditar>
            }    
        </>
    )
}