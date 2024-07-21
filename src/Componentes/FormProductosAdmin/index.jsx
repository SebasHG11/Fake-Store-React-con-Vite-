import { useFetchData } from '../../Helpers/useFetchData'
import { useState, useEffect } from 'react'
import { useForm } from '../../Helpers/useForm'
import '../FormProductosAdmin/styles.css'

export const FormProductosAdmin = () =>{
    const[categorias, setCategorias] = useState([])

    const initialValue = {
        nombreProducto: '',
        precioProducto: 0,
        descripcionProducto: '',
        imagenProducto: '',
        categoriaProducto: 0
    }

    const {formState, onInputChange} = useForm(initialValue)

    const {nombreProducto, precioProducto, descripcionProducto, imagenProducto, categoriaProducto} = formState

    const {data, error} = useFetchData('http://localhost:5164/api/Categoria')

    {!error ?
        useEffect(()=>{
            setCategorias(data)
        },[data])
        :
        console.log(error)
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
        console.log(envio)
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