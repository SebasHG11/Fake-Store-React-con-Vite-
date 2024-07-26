import { toast } from 'sonner'
import { useFetchData } from '../../Helpers/useFetchData'
import { useState, useEffect, useContext } from 'react'
import { useForm } from '../../Helpers/useForm'
import '../FormProductosAdmin/styles.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context'

export const FormProductosAdmin = () =>{
    const[categorias, setCategorias] = useState([])

    const context = useContext(AppContext)

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

    const postData = async(newData, url, token) =>{
        try{
            const res = await axios.post(url, newData,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('¡Producto agregado correctamente!', { duration: 3000 })
            navigate('/home')
        }catch(error){
            console.log('Error:',error)
            toast.error('¡Ha ocurrido un error!')
        }
    }

    const onSubmit = (event) =>{
        event.preventDefault()

        if(nombreProducto.length === 0 || imagenProducto === 0){
            toast.error("Los campos nombre e imagen son obligatorios", {duration: 3000})
            return
        }

        if(parseFloat(precioProducto) <= 0){
            toast.error("El precio debe ser mayor a $0", {duration: 3000})
            return
        }

        const envio ={
            nombre: nombreProducto,
            precio: parseFloat(precioProducto),
            idCategoria: parseInt(categoriaProducto),
            descripcion: descripcionProducto,
            imagen: imagenProducto
        }
        postData(envio, 'http://localhost:5164/api/Producto', context.token)
        setFormState(initialValue)
    }

    return(
        <div>
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