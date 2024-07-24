import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from './Paginas/Home'
import { NavBar } from './Componentes/NavBar'
import { AppProvider } from './Context'
import { NotFound } from './Paginas/NotFound'
import { Categorias } from './Paginas/Categorias'
import { Carrito } from './Paginas/Carrito'
import { PestañaAdmin } from './Componentes/PestañaAdmin'
import { ProductosAdmin } from './Paginas/ProductosAdmin'
import { CategoriasAdmin } from './Paginas/CategoriasAdmin'
import { Ordenes } from './Paginas/Ordenes'

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/home', element: <Home />},
    {path: '/categorias', element: <Categorias />},
    {path: '/carrito', element: <Carrito />},
    {path: '/admin/productos', element: <ProductosAdmin />},
    {path: '/admin/categorias', element: <CategoriasAdmin />},
    {path: '/ordenes', element: <Ordenes />},
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