import { createContext, useState } from "react";
import { coffees } from "../pages/Home/components/products"; 

export const ProductsContext = createContext({ })

export function ProductsContextProvider({children}){

    const [cartItem, setCartItem] = useState([])

    const[quantity, setQuantity] = useState(1);

    const handleSumProducts = (id) =>{
            const item = coffees.find(coffee => coffee.id === id)

            if (item){
                const sum  = quantity + 1
                setQuantity(sum)
            }
       }

    const handleAddToCart = (id) =>{
        const index = coffees.find(coffee => coffee.id == id)
        const newCartItem = [...cartItem, index]
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