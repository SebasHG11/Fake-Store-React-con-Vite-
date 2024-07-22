import { createContext, useState } from "react"

export const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [numCarrito, setNumCarrito] = useState(0)

    const [carrito, setCarrito] = useState([])

    const [openModal, setOpenModal] = useState(false)

    const [productoSeleccionadoEdit, setProductoSeleccionadoEdit] = useState(null)

    return(
        <AppContext.Provider value={{
            numCarrito,
            setNumCarrito,
            carrito,
            setCarrito,
            openModal,
            setOpenModal,
            productoSeleccionadoEdit,
            setProductoSeleccionadoEdit
        }}>
            {children}
        </AppContext.Provider>
    )
}