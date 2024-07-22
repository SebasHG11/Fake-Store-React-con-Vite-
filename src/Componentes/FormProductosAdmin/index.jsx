import { Toaster, toast } from 'sonner'
import { useFetchData } from '../../Helpers/useFetchData'
import { useState, useEffect } from 'react'
import { useForm } from '../../Helpers/useForm'
import '../FormProductosAdmin/styles.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const FormProductosAdmin = () =>{
    const[categorias, setCategorias] = useState([])

    const navigate = useNavigate()

    const initialValue = {
        nombreProducto: '',
        precioProducto: 0,
        descripcionProducto: '',
        imagenProducto: '',
        categoriaProducto: 1
    }

    const {formState, setFormState, onInputChange} = useForm(initialValue)

    const {nombreProducto, precioProducto, descripcionProducto, imagenProducto, categoriaProducto} = formState

    const {data, error} = useFetchData('http://localhost:5164/api/Categoria')

    {!error ?
        useEffect(()=>{
            setCategorias(data)
        },[data])
        :
        console.log(error)
    }

    const postData = async(newData, url) =>{
        try{
            const res = await axios.post(url, newData)
            console.log('Response:', res.data)
            toast.success('¡Producto agregado correctamente!')
            navigate('/home')
        }catch(error){
            console.log('Error:',error)
            toast.error('¡Ha ocurrido un error!')
        }
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        const envio ={
            nombre: nombreProducto,
            precio: parseFloat(precioProducto),
            idCategoria: parseInt(categoriaProducto),
            descripcion: descripcionProducto,
            imagen: imagenProducto
        }
        postData(envio, 'http://localhost:5164/api/Producto')
        setFormState(initialValue)
    }

    return(
        <div>
        <Toaster position="bottom-left" richColors />
          <h2>Formulario Productos</h2>
          <form
          onSubmit={onSubmit} 
          className="form-producto">

            <label htmlFor="nombreProducto">Nombre del Producto</label>
            <input
            onChange={onInputChange}
            value={nombreProducto}
            className='form-producto-input'
            type="text" 
            name="nombreProducto" />

            <label htmlFor="precioProducto">Precio</label>
            <input 
            onChange={onInputChange}
            value={precioProducto}
            className='form-producto-input'
            type="number" 
            name="precioProducto" />

            <label htmlFor="categoriaProducto">Categoria</label>
            <select
            className='form-producto-input' 
            name="categoriaProducto"
            onChange={onInputChange}
            value={categoriaProducto}
            >
                {categorias &&
                    categorias.map(c =>(
                        <option 
                        key={c.id} 
                        value={c.id}
                        >
                            {c.nombre}
                        </option>
                ))}
            </select>

            <label htmlFor="descripcionProducto">Descripción</label>
            <textarea
            onChange={onInputChange}
            value={descripcionProducto}
            className='form-producto-input'
            cols="50"
            rows="5"
            name="descripcionProducto"
            ></textarea>

            <label htmlFor="imagenProducto">Imagen</label>
            <input 
            onChange={onInputChange}
            value={imagenProducto}
            className='form-producto-input'
            type="text" 
            name="imagenProducto" 
            placeholder="https://..." />
            <input 
            className='form-producto-boton'
            type="submit" 
            value="Crear Producto" />
          </form>
        </div>
    )
}