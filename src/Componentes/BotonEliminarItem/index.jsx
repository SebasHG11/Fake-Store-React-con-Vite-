import { TrashIcon } from '@heroicons/react/16/solid'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from 'sonner'
import { useContext } from 'react'
import { AppContext } from '../../Context'

export const BotonEliminarItem = ({item, urlItems}) =>{
    const context = useContext(AppContext)

    const navigate = useNavigate()

    const handleEliminarProducto = async(event, url, id, token) =>{
        event.preventDefault()
        try{
            const response = await axios.delete(`${url}/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.info(`${item.nombre} se elimino correctamente`, {duration: 3000})
            navigate('/home')
        }catch(error){
            console.log(error)
            toast.error('No se pudo eliminar el producto')
        }
    }

    return(
        <>
            <span
            onClick={(event)=>{
                handleEliminarProducto(event, urlItems,item.id, context.token)
            }} 
            className='boton-eliminar-producto'>
                Eliminar
                <TrashIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
            </span>
        </>
    )
}