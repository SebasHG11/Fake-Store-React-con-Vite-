import { useFetchData } from '../../Helpers/useFetchData'
import { useState, useEffect } from 'react'
import '../FormProductosAdmin/styles.css'

export const FormProductosAdmin = () =>{
    const[categorias, setCategorias] = useState([])

    const {data, error} = useFetchData('http://localhost:5164/api/Categoria')

    {!error ?
        useEffect(()=>{
            setCategorias(data)
        },[data])
        :
        console.log(error)
    }

    return(
        <div>
          <h2>Formulario Productos</h2>
          <form className="form-producto">
            <label htmlFor="nombre-producto">Nombre del Producto</label>
            <input
            className='form-producto-input'
            type="text" name="nombre-producto" />
            <label htmlFor="precio-producto">Precio</label>
            <input 
            className='form-producto-input'
            type="number" name="precio-producto" />
            <label htmlFor="categoria-del-producto">Categoria</label>
            <select
            className='form-producto-input' 
            name="categoria-del-producto">
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
            <label htmlFor="descripcion-producto">Descripción</label>
            <textarea
            className='form-producto-input'
            cols="50"
            rows="5"
            name="descripcion-producto"
            ></textarea>
            <label htmlFor="imagen-producto">Imagen</label>
            <input 
            className='form-producto-input'
            type="text" name="imagen-producto" placeholder="https://..." />
            <input 
            className='form-producto-boton'
            type="submit" 
            value="Crear Producto" />
          </form>
        </div>
    )
}