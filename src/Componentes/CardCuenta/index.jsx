import '../CardCuenta/styles.css'
import { useContext } from "react"
import { AppContext } from "../../Context"
import { PencilSquareIcon } from '@heroicons/react/16/solid'
import { ModalFormEditar } from '../ModalFormEditar'
import { FormEditarCuenta } from '../FormEditarCuenta'

export const CardCuenta = () =>{
    const context = useContext(AppContext)

    const handleImageError = (event) => {
        event.target.src = 'https://img.freepik.com/vector-gratis/circulo-azul-usuario-blanco_78370-4707.jpg?size=338&ext=jpg'
    }

    const handleEditarCuenta = (event) =>{
        event.preventDefault()
        context.setOpenModal(true)
    }

    return(
        <>
        {context.openModal &&
            <ModalFormEditar>
                <FormEditarCuenta />
            </ModalFormEditar>
        }
        <div className='container-card-cuenta'>
            <img 
                src={context.userActual.foto}
                alt={context.userActual.nombre}
                onError={handleImageError} 
            />
            <span 
            className='icono-edit-foto'
            onClick={(event)=>{
                handleEditarCuenta(event)
            }}
            >
                <PencilSquareIcon style={{ width: '24px', height: '24px', marginRight: '8px', color: 'white' }} />
            </span>
            <h2>{context.userActual.nombre}</h2>
        </div>
        </>
    )
}