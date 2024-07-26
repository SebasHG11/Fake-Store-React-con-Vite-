import { useContext, useEffect, useState } from "react"
import { useFetchData } from "../../Helpers/useFetchData"
import { CardUsuarioAdmin } from "../../Componentes/CardUsuarioAdmin"
import { ContainerCards } from "../../Componentes/ContainerCards"
import { ModalFormEditar } from "../../Componentes/ModalFormEditar"
import { AppContext } from "../../Context"
import { FormEditUsuarioAdmin } from "../../Componentes/FormEditUsuarioAdmin"
import { BusquedaProductos } from "../../Componentes/BusquedaProductos"

export const UsuariosAdmin = () =>{
    const context = useContext(AppContext)
    const{data, error} = useFetchData('http://localhost:5164/api/Usuario')
    const [usuarios, setUsuarios] = useState([])
    const [usuariosBusca, setUsuariosBusca] = useState([])
    const [busqueda, setBusqueda] = useState('')

    if(!error){
        useEffect(()=>{
            const newArray = data.filter(d => d.id !== context.userActual.id)
            setUsuarios(newArray)
        },[data])
    }else{
        console.log(error)
    }

    useEffect(()=>{
        const busquedaArray = usuarios.filter(u=>
            u.nombre.toLowerCase().includes(busqueda.toLowerCase())
        )
        setUsuariosBusca(busquedaArray)
    },[busqueda, usuarios])

    return(
        <div>
            <BusquedaProductos busqueda={busqueda} setBusqueda={setBusqueda} />
            <ContainerCards>
                {usuariosBusca &&
                    usuariosBusca.map(usuario =>(
                        <CardUsuarioAdmin key={usuario.id} usuario={usuario} />
                    ))    
                }
            </ContainerCards>
            {context.openModal &&
                <ModalFormEditar>
                    <FormEditUsuarioAdmin />
                </ModalFormEditar>
            }
        </div>
    )
}