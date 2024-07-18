import { createContext, useState } from "react"

export const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [numCarrito, setNumCarrito] = useState(0)

    const [carrito, setCarrito] = useState([])

    return(
        <AppContext.Provider value={{
            numCarrito,
            setNumCarrito,
            carrito,
            setCarrito
        }}>
            {children}
        </AppContext.Provider>
    )
}