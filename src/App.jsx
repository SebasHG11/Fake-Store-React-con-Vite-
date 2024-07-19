import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from './Paginas/Home'
import { NavBar } from './Componentes/NavBar'
import { AppProvider } from './Context'
import { NotFound } from './Paginas/NotFound'
import { Categorias } from './Paginas/Categorias'
import { Carrito } from './Paginas/Carrito'
import { PestañaAdmin } from './Componentes/PestañaAdmin'

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/home', element: <Home />},
    {path: '/categorias', element: <Categorias />},
    {path: '/carrito', element: <Carrito />},
    {path: '/*', element: <NotFound />}
  ])
  return routes
}

export const App = () =>{
  return(
    <AppProvider>
      <BrowserRouter>
        <NavBar />
        <PestañaAdmin />
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  )
}