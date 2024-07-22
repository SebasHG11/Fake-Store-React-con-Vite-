import '../FormCategoriasAdmin/styles.css'
import { useForm } from '../../Helpers/useForm'
import axios from 'axios'
import { Toaster, toast } from 'sonner'

export const FormCategoriasAdmin = () =>{

    const initialState = {
        nombreCategoria: '',
        imagenCategoria: ''
    }

    const {formState, setFormState, onInputChange} = useForm(initialState)

    const {nombreCategoria, imagenCategoria} = formState

    const postData = async(newData, url) =>{
        try{
            const res = await axios.post(url, newData)
            console.log('Response:', res.data)
            toast.success('¡Categoria agregada correctamente!')
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
        postData(envio, 'http://localhost:5164/api/Categoria')
        setFormState(initialState)
    }

    return(
        <div>
            <Toaster position="bottom-left" richColors />
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