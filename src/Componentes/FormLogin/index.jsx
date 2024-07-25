import { useForm } from '../../Helpers/useForm'
import axios from 'axios'
import { toast } from 'sonner'
import '../FormLogin/styles.css'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context'
import { useNavigate } from 'react-router-dom'
import { useFetchData } from '../../Helpers/useFetchData'

export const FormLogin = () =>{
    const context = useContext(AppContext)
    const navigate = useNavigate()

    const initialState ={
        name: '',
        contraseña: ''
    }

    const {formState, setFormState, onInputChange} = useForm(initialState)
    const{name, contraseña} = formState

    const postLogin = async(url, datos) =>{
        try{
            const res = await axios.post(url, datos)
            const tokenUser = res.data
            context.setToken(tokenUser)

            localStorage.setItem('TOKEN-SHOP', tokenUser)

            context.setIsAuthenticated(true)
            navigate('/home')

            toast.success('¡Iniciaste sesión!', { duration: 3000 })

        }catch(error){
            console.log('Error:',error)
            toast.error('¡Ha ocurrido un error!')
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
                <input 
                    className='form-login-input' 
                    type="password" 
                    name="contraseña"
                    value={contraseña}
                    onChange={onInputChange} 
                    />
                <input className='form-login-btn' type="submit" value='Login' />
            </form>
            <span className='registrar-btn'>Crear Cuenta</span>
        </div>
    )       
}