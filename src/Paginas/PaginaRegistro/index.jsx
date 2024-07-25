import { FormRegistro } from '../../Componentes/FormRegistro'
import { Toaster } from 'sonner'
import '../PaginaLogin/styles.css'

export const PaginaRegistro = () =>{
    return(
        <div className="container-pagina-login">
           <Toaster richColors />
           <FormRegistro /> 
        </div>
    )
}