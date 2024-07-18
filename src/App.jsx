import { BrowserRouter, useRoutes } from "react-router-dom"
import { Home } from "./Paginas/Home"
import { NavBar } from './Componentes/NavBar'
import { AppProvider } from "./Context"

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/home', element: <Home />}
  ])
  return routes
}

export const App = () =>{
  return(
    <AppProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  )
}