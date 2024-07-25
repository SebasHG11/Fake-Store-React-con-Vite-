import { useContext } from 'react'
import '../FormEditarProductosAdmin/styles.css'
import { AppContext } from '../../Context'
import { useForm } from '../../Helpers/useForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export const FormEditarCuenta = () =>{
    const context = useContext(AppContext)
    const navigate = useNavigate()

    const handleCancelarEdit = (event) =>{
        event.preventDefault()
        context.setOpenModal(false)
    }

    const initialState = {
        foto: ''
    }

    const{formState, setFormState, onInputChange} = useForm(initialState)

    const {foto} = formState

    const putCuenta = async(url, id, newData, token) =>{
        try{
            const res = await axios.put(`${url}/${id}`, newData,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('¡Cuenta editada correctamente!', { duration: 3000 })
            navigate('/home')
        }catch(error){
            console.log(error)
            toast.error('¡No se pudo cambiar la foto!', { duration: 3000 })
        }
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        const envio ={
            nombre: context.userActual.nombre,
            contraseña: context.userActual.contraseña,
            rol: context.userActual.rol,
            foto: foto
        }
        putCuenta('http://localhost:5164/api/Usuario', context.userActual.id,envio, context.token)
        setFormState(initialState)
        context.setOpenModal(false)
    }

    return(
        <div>
            <form
            onSubmit={(event)=>{
                onSubmit(event)
            }} 
            className="form-producto">
                <label htmlFor="foto">Link Nueva Foto</label>
                <input 
                className='form-producto-input' 
                type="text" 
                name="foto" 
                value={foto}
                onChange={onInputChange}
                />
                <input className='form-producto-boton' type="submit" value='Editar' />
            </form>
            <span
            onClick={(event)=>{
                handleCancelarEdit(event)
            }}   
            className='btn-cancelar-edit'>Cancelar</span>
        </div>
    )
}