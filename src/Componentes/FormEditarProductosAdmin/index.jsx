import { useContext, useState, useEffect } from 'react'
import { useForm } from '../../Helpers/useForm'
import { useFetchData } from '../../Helpers/useFetchData'
import { AppContext } from '../../Context'
import { toast } from 'sonner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../FormEditarProductosAdmin/styles.css'

export const FormEditarProductosAdmin = () =>{
    const context = useContext(AppContext)

    const[categorias, setCategorias] = useState([])

    const navigate = useNavigate()

    const handleCancelarEdit = (event) =>{
        event.preventDefault()
        context.setOpenModal(false)
    }

    const initialValue = {
        nombreProducto: context.productoSeleccionadoEdit.nombre,
        precioProducto: context.productoSeleccionadoEdit.precio,
        descripcionProducto: context.productoSeleccionadoEdit.descripcion,
        imagenProducto: context.productoSeleccionadoEdit.imagen,
        categoriaProducto: context.productoSeleccionadoEdit.idCategoria
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

    const putProducto = async(newData, id, url) =>{
        try{
            const res = await axios.put(`${url}/${id}`, newData)
            toast.success('¡Producto editado correctamente!', { duration: 3000 })
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
        putProducto(envio, context.productoSeleccionadoEdit.id, 'http://localhost:5164/api/Producto')
        context.setOpenModal(false)
        setFormState(initialValue)
    }

    return(
            <div>
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
                value="Editar Producto" />
            </form>
            <span
            onClick={(event)=>{
                handleCancelarEdit(event)
            }}   
            className='btn-cancelar-edit'>Cancelar</span>
            </div>
    )
}