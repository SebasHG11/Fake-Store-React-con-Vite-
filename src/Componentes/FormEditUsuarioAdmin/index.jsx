import { useContext } from 'react'
import { AppContext } from '../../Context'
import { useForm } from '../../Helpers/useForm'
import axios from 'axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

export const FormEditUsuarioAdmin = () =>{
    const context = useContext(AppContext)
    const navigate = useNavigate()

    const handleCancelarEdit = (event) =>{
        event.preventDefault()
        context.setOpenModal(false)
    }

    const initialState = {
        rol: context.usuarioSeleccionadoEdit.rol 
    }

    const{formState, setFormState, onInputChange} = useForm(initialState)
    const{rol} = formState

    const putCambiarRol = async(url, id, data, token) =>{
        try{
            const res = await axios.put(`${url}/${id}`, data,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            navigate('/home')
            toast.success("¡Se cambio el rol con exito!", {duration: 3000})
        }catch(error){
            console.log(error)
            toast.error("¡No se pudo cambiar el rol!", {duration: 3000})
        }
    }

    const onSubmit = (event) =>{
        event.preventDefault()

        if(rol !== 'admin' && rol !== 'basico'){
            toast.error("Elige un rol para el usuario")
            console.log(rol)
            return
        }

        const envio ={
            nombre: context.usuarioSeleccionadoEdit.nombre,
            contraseña: context.usuarioSeleccionadoEdit.contraseña,
            rol: rol,
            foto: context.usuarioSeleccionadoEdit.foto
        }
        putCambiarRol('http://localhost:5164/api/Usuario', context.usuarioSeleccionadoEdit.id, envio, context.token)
        context.setOpenModal(false)
        setFormState(initialState)
    }

    return(
        <div>
        <form 
            onSubmit={onSubmit}
            className="form-producto"
        >
            <label htmlFor="rol">Nuevo Rol</label>
            <select 
                className='form-producto-input'
                name='rol'
                onChange={onInputChange}
                value={rol}
            >
                <option value="admin">Admin</option>
                <option value="basico">Basico</option>
            </select>
            <input className='form-producto-boton' type="submit" value='Cambiar Rol' />
        </form>
        <span
        className='btn-cancelar-edit'
        onClick={handleCancelarEdit}
        >
            Cancelar
        </span>
        </div>
    )
}