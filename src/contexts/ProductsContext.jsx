import { createContext, useState } from "react";
import { coffees } from "../pages/Home/components/products"; 

export const ProductsContext = createContext({ })

export function ProductsContextProvider({children}){

    const [cartItem, setCartItem] = useState([])
    const [productQuantities, setProductQuantities] = useState({})

    const handleIncrementProduct = (id) => {

        const item = coffees.find(coffee => coffee.id === id)
        const existingCartItem = cartItem.find(cart => cart.item.id === item.id)
        
        if (item){
            //CurrentQuantity recebe o estado com a ID do produto e atualiza o valor do estado
            const currentQuantity = productQuantities[id] || 1;
            setProductQuantities(prevQuantities => ({
                ...prevQuantities,
                [id]: currentQuantity + 1
            }))

            // Se item estiver no carinho, irá atualizar a quantidade do item no carrinho
            if(existingCartItem){
                existingCartItem.quantity = currentQuantity + 1;
                existingCartItem.valorSoma = ((item.value * currentQuantity) + Number(item.value)).toFixed(2);
                setCartItem([...cartItem]); // Atualiza o carrinho
            }
        } 
    }

    const handleDecrementProduct = (id) => {
        
        const item = coffees.find(coffee => coffee.id === id)
        const existingCartItem = cartItem.find(cart => cart.item.id === item.id)

        if (item){
            //CurrentQuantity recebe o estado com a ID do produto e atualiza o valor do estado
            const currentQuantity = productQuantities[id] || 1;
            setProductQuantities(prevQuantities => ({
                ...prevQuantities,
                [id]: currentQuantity - 1
            }))

            // Se item estiver no carinho, irá atualizar a quantidade do item no carrinho
            if(existingCartItem){
                existingCartItem.quantity = currentQuantity - 1;
                existingCartItem.valorSoma = ((item.value * currentQuantity) - Number(item.value)).toFixed(2);
                setCartItem([...cartItem]); // Atualiza o carrinho
            }
        }
    }
    //adicione item selecionado ao array do carrinho
    const handleAddToCart = (id, quantity) =>{
        const item = coffees.find(coffee => coffee.id === id)
        
        if(item) {
            const existingCartItem = cartItem.find(cart => cart.item.id === item.id)
            
            if(existingCartItem){
                const updatedQuantity = quantity + 1;
                existingCartItem.quantity = updatedQuantity;
                existingCartItem.valorSoma = (item.value * updatedQuantity).toFixed(2);
                setProductQuantities(prevQuantities => ({
                    ...prevQuantities,
                    [id]: updatedQuantity
                }));

                setCartItem([...cartItem]); // Atualiza o carrinho
            } else {
                const newTotal = (quantity * item.value).toFixed(2); // Formata para duas casas decimais
                const newItem = { 
                        item, 
                        quantity, 
                        valorSoma: newTotal
                     };
            setCartItem(prevCartItem => [...prevCartItem, newItem]);
            }
            
        }
    }

    const handleDeleteToCart = (id) => {
        const itemDelete = cartItem.filter(cart => cart.item.id !== id)
        setCartItem(itemDelete)
    }
    
    return (
        <ProductsContext.Provider 
            value={{
                cartItem,
                setCartItem,
                handleAddToCart,
                handleIncrementProduct,
                handleDecrementProduct,
                productQuantities,
                handleDeleteToCart
            }}>
            {children}
        </ProductsContext.Provider>
    )
}
