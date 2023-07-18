import { createContext, useState } from "react";
import { coffees } from "../pages/Home/components/products"; 

export const ProductsContext = createContext({ })

export function ProductsContextProvider({children}){

    const [selected, setSelected] = useState(false);
    
    return (
        <ProductsContext.Provider 
            value={{
                coffees,
                selected,
                setSelected,
            }}>
            {children}
        </ProductsContext.Provider>
    )
}