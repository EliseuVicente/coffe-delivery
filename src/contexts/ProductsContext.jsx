import { createContext, useState } from "react";
import { coffees } from "../pages/Home/components/products"; 

export const ProductsContext = createContext({ })

export function ProductsContextProvider({children}){

    const [cartItem, setCartItem] = useState([])

    const[quantity, setQuantity] = useState(1);

    const handleSumProducts = (id) =>{
            console.log(id)
            setQuantity(quantity + 1)
        
    
    }

    const handleAddToCart = (id) =>{
        const index = coffees.find(coffee => coffee.id == id)
        const item = index
        const newCartItem = [...cartItem, item]
        setCartItem(newCartItem)
    }
  
    return (
        <ProductsContext.Provider 
            value={{
                coffees,
                cartItem,
                setCartItem,
                handleAddToCart,
                quantity,
                setQuantity,
                handleSumProducts
            }}>
            {children}
        </ProductsContext.Provider>
    )
}