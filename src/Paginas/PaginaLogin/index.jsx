import '../PaginaLogin/styles.css'
import { FormLogin } from "../../Componentes/FormLogin"
import { Toaster } from 'sonner'

export const PaginaLogin = () =>{
    return(
        <div className="container-pagina-login">
            <Toaster richColors />
            <FormLogin />
        </div>
    )
}