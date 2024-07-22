import { useContext } from "react"
import { useForm } from "../../Helpers/useForm"
import '../FormEditarProductosAdmin/styles.css'
import { AppContext } from "../../Context"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import axios from "axios"

export const FormEditarCategoriasAdmin = () =>{
    const context = useContext(AppContext)

    const navigate = useNavigate()

    const initialState = {
        nombreCategoria: context.categoriaSeleccionadaEdit.nombre,
        imagenCategoria: context.categoriaSeleccionadaEdit.imagen
    }

    const handleCancelarEdit = (event) =>{
        event.preventDefault()
        context.setOpenModal(false)
    }

    const {formState, setFormState, onInputChange} = useForm(initialState)

    const {nombreCategoria, imagenCategoria} = formState

    const putCategoria = async(newData, id, url) =>{
        try{
            const res = await axios.put(`${url}/${id}`, newData)
            toast.success('¡Categoria editada correctamente!', { duration: 3000 })
            navigate('/home')
        }catch(error){
            console.log('Error:',error)
            toast.error('¡Ha ocurrido un error!')
        }
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        const envio = {
            nombre: nombreCategoria,
            imagen: imagenCategoria
        }
        putCategoria(envio, context.categoriaSeleccionadaEdit.id, 'http://localhost:5164/api/Categoria')
        context.setOpenModal(false)
        setFormState(initialState)
    }

    return(
        <div>
          <form
          onSubmit={onSubmit} 
          className="form-categoria">

            <label htmlFor="nombreCategoria">Nombre de la Categoria</label>
            <input
            onChange={onInputChange}
            value={nombreCategoria}
            className='form-categoria-input'
            type="text" 
            name="nombreCategoria" />

            <label htmlFor="imagenCategoria">Imagen</label>
            <input 
            onChange={onInputChange}
            value={imagenCategoria}
            className='form-categoria-input'
            type="text" 
            name="imagenCategoria" 
            placeholder="https://..." />

            <input 
            className='form-categoria-boton'
            type="submit" 
            value="Editar Categoria" />
          </form>
          <span
            onClick={(event)=>{
                handleCancelarEdit(event)
            }}   
            className='btn-cancelar-edit'>Cancelar</span>
        </div>
    )
}