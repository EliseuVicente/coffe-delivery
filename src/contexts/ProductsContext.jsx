import { createContext, useState } from "react";
import { coffees } from "../pages/Home/components/products"; 

export const ProductsContext = createContext({ })

export function ProductsContextProvider({children}){

    const [cartItem, setCartItem] = useState([])
    const [productQuantities, setProductQuantities] = useState({})


<<<<<<< HEAD
    const handleSumProducts = (id) => {
        const item = coffees.find(coffee => coffee.id === id)
        
        if (item){
            //CurrentQuantity recebe o estado com a ID do produto e atualiza o valor do estado
            const currentQuantity = productQuantities[id] || 1;
            setProductQuantities(prevQuantities => ({
                ...prevQuantities,
                [id]: currentQuantity + 1
            }))

            const existingCartItem = cartItem.find(cart => cart.item.id === item.id)

            // Se item estiver no carinho, irá atualizar a quantidade do item no carrinho
            if(existingCartItem){
                existingCartItem.quantity = currentQuantity + 1;
                setCartItem([...cartItem]); // Atualiza o carrinho
            }
        }
    }

    //adicione item selecionado ao array do carrinho
    const handleAddToCart = (id, quantity) =>{
        const item = coffees.find(coffee => coffee.id === id)
        if(item) {
            const newItem = {item, quantity}
            setCartItem(prevCartItem => [...prevCartItem, newItem])
        }
        
=======
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
>>>>>>> e776e72a27475bd724c8daa055da6c09ba838253
    }

  
    return (
        <ProductsContext.Provider 
            value={{
                cartItem,
                setCartItem,
                handleAddToCart,
                handleSumProducts,
                productQuantities
            }}>
            {children}
        </ProductsContext.Provider>
    )
}