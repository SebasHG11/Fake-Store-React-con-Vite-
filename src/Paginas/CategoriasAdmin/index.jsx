import '../CategoriasAdmin/styles.css'
import { ModalFormEditar } from '../../Componentes/ModalFormEditar'
import { FormCategoriasAdmin } from "../../Componentes/FormCategoriasAdmin"
import { ContainerCards } from '../../Componentes/ContainerCards'
import { CardCategoriaAdmin } from '../../Componentes/CardCategoriaAdmin'
import { useFetchData } from '../../Helpers/useFetchData'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context'
import { FormEditarCategoriasAdmin } from '../../Componentes/FormEditarCategoriasAdmin'

export const CategoriasAdmin = () =>{
    const context = useContext(AppContext)

    const [categorias, setCategorias] = useState([])
    const {data, error} = useFetchData('http://localhost:5164/api/Categoria')

    if(error){
        console.log(error)
    }else{
        useEffect(()=>{
            setCategorias(data)
        },[data])
    }

    return(
        <>
            <div className="container-categorias-admin">
                <FormCategoriasAdmin />
            </div>
            <ContainerCards>
                {
                    categorias &&
                    categorias.map(c =>(
                        <CardCategoriaAdmin key={c.id} item={c} />    
                    ))
                }    
            </ContainerCards>
            {
            context.openModal &&
                <ModalFormEditar>
                    <FormEditarCategoriasAdmin />
                </ModalFormEditar>
            }
        </>
    )
}