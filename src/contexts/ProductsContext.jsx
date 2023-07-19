import { createContext, useState } from "react";
import { coffees } from "../pages/Home/components/products"; 

export const ProductsContext = createContext({ })

export function ProductsContextProvider({children}){

    // const [selected, setSelected] = useState(false)

    const [cartItem, setCartItem] = useState([''])

    return (
        <ProductsContext.Provider 
            value={{
                coffees,
                cartItem,
                setCartItem
            }}>
            {children}
        </ProductsContext.Provider>
    )
}