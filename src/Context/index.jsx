import { createContext, useState } from "react"

export const AppContext = createContext()

export const AppProvider = ({children}) =>{

    const [numCarrito, setNumCarrito] = useState(0)

    const [carrito, setCarrito] = useState([])

    const [openModal, setOpenModal] = useState(false)

    const [productoSeleccionadoEdit, setProductoSeleccionadoEdit] = useState(null)
    
    const [categoriaSeleccionadaEdit, setCategoriaSeleccionadaEdit] = useState(null)

    const [asideDetalleOrden, setAsideDetalleOrden] = useState(false)

    const [ordenDetalleSeleccionada, setOrdenDetalleSeleccionada] = useState([])

    // Login

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [token, setToken] = useState(localStorage.getItem('TOKEN-SHOP') || '')

    const [isAdmin, setIsAdmin] = useState(false)

    const [userActual, setUserActual] = useState({})

    return(
        <AppContext.Provider value={{
            numCarrito,
            setNumCarrito,
            carrito,
            setCarrito,
            openModal,
            setOpenModal,
            productoSeleccionadoEdit,
            setProductoSeleccionadoEdit,
            categoriaSeleccionadaEdit,
            setCategoriaSeleccionadaEdit,
            asideDetalleOrden,
            setAsideDetalleOrden,
            ordenDetalleSeleccionada,
            setOrdenDetalleSeleccionada,
            isAuthenticated,
            setIsAuthenticated,
            token,
            setToken,
            isAdmin,
            setIsAdmin,
            userActual,
            setUserActual,
        }}>
            {children}
        </AppContext.Provider>
    )
}