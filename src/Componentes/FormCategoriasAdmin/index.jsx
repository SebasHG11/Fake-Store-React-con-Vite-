import '../FormCategoriasAdmin/styles.css'
import { useForm } from '../../Helpers/useForm'
import axios from 'axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../Context'

export const FormCategoriasAdmin = () =>{
    const context = useContext(AppContext)

    const navigate = useNavigate()

    const initialState = {
        nombreCategoria: '',
        imagenCategoria: ''
    }

    const {formState, setFormState, onInputChange} = useForm(initialState)

    const {nombreCategoria, imagenCategoria} = formState

    const postData = async(newData, url, token) =>{
        try{
            const res = await axios.post(url, newData,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('¡Categoria agregada correctamente!', { duration: 3000 })
            navigate('/home')
        }catch(error){
            console.log('Error:',error)
            toast.error('¡Ha ocurrido un error!')
        }
    }

    const onSubmit = (event) =>{
        event.preventDefault()

        if(nombreCategoria.length === 0 || imagenCategoria.length === 0){
            toast.error("Llena todos los campos", {duration: 3000})
            return
        }

        const envio = {
            nombre: nombreCategoria,
            imagen: imagenCategoria
        }
        postData(envio, 'http://localhost:5164/api/Categoria', context.token)
        setFormState(initialState)
    }

    return(
        <div>
            <h2>Formulario Categorias</h2>
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
            value="Crear Categoria" />
          </form>
        </div>
    )
}