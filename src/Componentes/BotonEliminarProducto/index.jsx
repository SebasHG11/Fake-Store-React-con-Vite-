import { TrashIcon } from '@heroicons/react/16/solid'
import '../BotonEliminarProducto/styles.css'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from 'sonner'

export const BotonEliminarProducto = ({item, urlItems}) =>{

    const navigate = useNavigate()

    const handleEliminarProducto = async(url, id) =>{
        try{
            const response = await axios.delete(`${url}/${id}`)
            toast.info(`${item.nombre} se elimino correctamente`)
            navigate('/home')
        }catch(error){
            console.log(error)
            toast.error('No se pudo eliminar el producto')
        }
    }

    return(
        <>
            <span
            onClick={()=>{
                handleEliminarProducto(urlItems,item.id)
            }} 
            className='boton-eliminar-producto'>
                Eliminar
                <TrashIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
            </span>
        </>
    )
}