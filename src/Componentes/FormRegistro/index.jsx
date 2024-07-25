import '../FormLogin/styles.css'
import { useNavigate } from 'react-router-dom'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import { useForm } from '../../Helpers/useForm'
import { toast } from 'sonner'
import axios from 'axios'

export const FormRegistro = () =>{
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = (event) =>{
        event.preventDefault()
        setShowPassword(!showPassword)
    }

    const handleIrLogin = (event) =>{
        event.preventDefault()
        navigate('/login')
    }

    const initialState = {
        nombre: '',
        foto: '',
        contraseña: '',
        confirmarContraseña: ''
    }

    const {formState, setFormState, onInputChange} = useForm(initialState)
    const{nombre, foto, contraseña, confirmarContraseña} = formState

    const postData = async(url, data) =>{
        try{
            const res = await axios.post(url, data)
            navigate('/login')
            setFormState(initialState)
            toast.success("¡Usuario registrado con exito!", {duration: 3000})
        }catch(error){
            console.log(error)
            toast.error("¡Ha ocurrido un error!", {duration: 3000})
        }
        
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        
        if (nombre.length < 8) {
            toast.error("El nombre debe tener al menos 8 caracteres", { duration: 3000 })
            return
        }
    
        if (contraseña !== confirmarContraseña) {
            toast.error("Las contraseñas no coinciden", { duration: 3000 })
            return
        }
    
        if (contraseña.length < 8) {
            toast.error("La contraseña debe tener al menos 8 caracteres", { duration: 3000 })
            return
        }
    
        const envio = {
            nombre: nombre,
            contraseña: contraseña,
            rol: "basico",
            foto: foto
        }
    
        postData('http://localhost:5164/api/Registro', envio)
    }

    return(
        <div className='container-form-login'>
            <h1 className='header-registro'>Registrarse</h1>
            <form 
                className="form-login"
                onSubmit={onSubmit}
            >
                <label htmlFor="nombre">Nombre</label>
                <input 
                    className='form-login-input' 
                    type="text" 
                    name="nombre"
                    value={nombre}
                    onChange={onInputChange}
                />
                <label htmlFor="foto">Foto</label>
                <input 
                    className='form-login-input' 
                    type="text" 
                    name="foto"
                    placeholder='http//...'
                    value={foto}
                    onChange={onInputChange} 
                />
                <label htmlFor="contraseña">Contraseña</label>

                <div className='password-container'>
                    <input 
                        className='form-login-input' 
                        type={showPassword ? "text" : "password" }
                        name="contraseña"
                        value={contraseña}
                        onChange={onInputChange} 
                    />
                    <button
                    className='toggle-password-btn'
                    onClick={handleShowPassword}>
                        {showPassword ?
                            <EyeSlashIcon style={{ width: '24px', height: '24px', color: 'yellowgreen' }} /> : 
                            <EyeIcon style={{ width: '24px', height: '24px', color: 'yellowgreen' }} />
                        }
                    </button>
                </div>

                <label htmlFor="confirmarContraseña">Confirmar Contraseña</label>

                <div className='password-container'>
                    <input 
                        className='form-login-input' 
                        type={showPassword ? "text" : "password" }
                        name="confirmarContraseña"
                        value={confirmarContraseña}
                        onChange={onInputChange} 
                    />
                    <button
                    className='toggle-password-btn'
                    onClick={handleShowPassword}>
                        {showPassword ?
                            <EyeSlashIcon style={{ width: '24px', height: '24px', color: 'yellowgreen' }} /> : 
                            <EyeIcon style={{ width: '24px', height: '24px', color: 'yellowgreen' }} />
                        }
                    </button>
                </div>

                <input className='form-login-btn' type="submit" value="Registrarse" />
            </form>
            <span 
            className='registrar-btn'
            onClick={handleIrLogin}
            >
                Login
            </span>
        </div>
    )
}