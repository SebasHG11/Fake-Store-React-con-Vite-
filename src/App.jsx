import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from './Paginas/Home'
import { NavBar } from './Componentes/NavBar'
import { AppContext, AppProvider } from './Context'
import { NotFound } from './Paginas/NotFound'
import { Categorias } from './Paginas/Categorias'
import { Carrito } from './Paginas/Carrito'
import { PestañaAdmin } from './Componentes/PestañaAdmin'
import { ProductosAdmin } from './Paginas/ProductosAdmin'
import { CategoriasAdmin } from './Paginas/CategoriasAdmin'
import { Ordenes } from './Paginas/Ordenes'
import { PaginaLogin } from './Paginas/PaginaLogin'
import { RutaProtegida } from './Componentes/RutaProtegida'
import { useContext } from 'react'
import { Cuenta } from './Paginas/Cuenta'

const AppRoutes = () =>{
  const context = useContext(AppContent)
  let routes = useRoutes([
    {
      path: '/',
      element: 
        <PaginaLogin />  
    },
    {
      path: '/login',
      element:
        <PaginaLogin />  
    },
    {
      path: '/home',
      element: (
        <RutaProtegida>
          <Home />  
        </RutaProtegida>
      ) 
    },
    {
      path: '/categorias',
      element:(
        <RutaProtegida>
          <Categorias />  
        </RutaProtegida>
      ) 
    },
    {
      path: '/carrito',
      element: (
        <RutaProtegida>
          <Carrito />  
        </RutaProtegida>
      ) 
    },
    {
      path: '/admin/productos',
      element: (
        <RutaProtegida>
          <ProductosAdmin />  
        </RutaProtegida>
      ) 
    },
    {
      path: '/admin/categorias',
      element: (
        <RutaProtegida>
          <CategoriasAdmin />  
        </RutaProtegida>
      ) 
    },
    {
      path: '/ordenes', 
      element: (
        <RutaProtegida>
          <Ordenes />  
        </RutaProtegida>
      ) 
    },
    {
      path: '/usuario/cuenta',
      element: (
        <RutaProtegida>
          <Cuenta />
        </RutaProtegida>
      )
    },
    {path: '/*', element: <NotFound />}
  ])
  return routes
}

const AppContent = () =>{
  const context = useContext(AppContext)
  return(
    <>
      {context.isAuthenticated && <NavBar />}
      {(context.isAuthenticated && context.isAdmin) && <PestañaAdmin />}
      <AppRoutes />
    </>
  )
}

export const App = () =>{
  return(
    <AppProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AppProvider>
  )
}