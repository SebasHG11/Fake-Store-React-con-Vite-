import { useForm } from '../../Helpers/useForm'
import axios from 'axios'
import { toast } from 'sonner'
import '../FormLogin/styles.css'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid'

export const FormLogin = () =>{
    const context = useContext(AppContext)
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const handleIrRegistro = (event) =>{
        event.preventDefault()
        navigate('/registro')
    }

    const handleShowPassword = (event) =>{
        event.preventDefault()
        setShowPassword(!showPassword)
    }

    const initialState ={
        name: '',
        contraseña: ''
    }

    const {formState, setFormState, onInputChange} = useForm(initialState)
    const{name, contraseña} = formState

    const postLogin = async(url, datos, token) =>{
        try{
            const res = await axios.post(url, datos)
            const tokenUser = res.data
            context.setToken(tokenUser)

            localStorage.setItem('TOKEN-SHOP', tokenUser)

            context.setIsAuthenticated(true)
            navigate('/home')

            toast.success('¡Iniciaste sesión!', { duration: 3000 })

        }catch(error){
            toast.error('¡El correo o la contraseña es incorrecto!', { duration: 3000 })
        }
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        const envio ={
            nombre: name,
            contraseña: contraseña
        }
        postLogin('http://localhost:5164/api/Login', envio)
        setFormState(initialState)
    }

    return(
        <div className='container-form-login'>
            <img className='container-imagen-login' src='src\assets\logo-shop.png' alt='Logo' />
            <form 
            onSubmit={onSubmit}
            className="form-login">
                <label htmlFor="name">UserName</label>
                <input 
                    className='form-login-input' 
                    type="text" 
                    name="name"
                    value={name}
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
                        onClick={handleShowPassword}
                    >
                        {showPassword ? 
                            <EyeSlashIcon style={{ width: '24px', height: '24px', color: 'yellowgreen' }} /> : 
                            <EyeIcon style={{ width: '24px', height: '24px', color: 'yellowgreen' }} />
                        }
                    </button>
                </div>
    
                <input className='form-login-btn' type="submit" value='Login' />
            </form>
                <span 
                className='registrar-btn'
                onClick={handleIrRegistro}
                >
                    Crear Cuenta 
                </span>
            
        </div>
    )       
}