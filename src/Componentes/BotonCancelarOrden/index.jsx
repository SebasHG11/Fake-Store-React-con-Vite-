import { useNavigate } from 'react-router-dom'
import '../BotonEliminarItem/styles.css'
import { TrashIcon } from "@heroicons/react/16/solid"
import axios from 'axios'
import { toast } from 'sonner'
import { useContext } from 'react'
import { AppContext } from '../../Context'

export const BotonCancelarOrden = ({url, id}) =>{
    const context = useContext(AppContext)
    const navigate = useNavigate()

    const handleCancelarOrden = async(event, url, id, token) =>{
        event.preventDefault()
        try{
            const res = await axios.delete(`${url}/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.info('¡La orden fue cancelada con exito!', {duration: 3000})
            navigate('/home')
        }catch(error){
            console.log(error)
            toast.error('¡La orden no se pudo cancelar!', {duration: 3000})
        }
    }

    return(
        <span
        onClick={(event)=>{
            handleCancelarOrden(event, url, id, context.token)
        }}
        className='boton-eliminar-producto'>
            Cancelar
            <TrashIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
        </span>
    )
}