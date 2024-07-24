import { useNavigate } from 'react-router-dom'
import '../BotonEliminarItem/styles.css'
import { TrashIcon } from "@heroicons/react/16/solid"
import axios from 'axios'
import { toast } from 'sonner'

export const BotonCancelarOrden = ({url, id}) =>{
    const navigate = useNavigate()

    const handleCancelarOrden = async(event, url, id) =>{
        event.preventDefault()
        try{
            const res = await axios.delete(`${url}/${id}`)
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
            handleCancelarOrden(event, url, id)
        }}
        className='boton-eliminar-producto'>
            Cancelar
            <TrashIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
        </span>
    )
}