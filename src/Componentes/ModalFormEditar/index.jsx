import '../ModalFormEditar/styles.css'
import { createPortal } from "react-dom"

export const ModalFormEditar = ({children}) =>{
    const modalRoot = document.getElementById('modal-root')

    return createPortal(
        <div className='container-modal'>
            {children}
        </div>,
        modalRoot
    )
}