import { createContext, useState } from "react"

export const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [numCarrito, setNumCarrito] = useState(0)

    return(
        <AppContext.Provider value={{
            numCarrito,
            setNumCarrito
        }}>
            {children}
        </AppContext.Provider>
    )
}