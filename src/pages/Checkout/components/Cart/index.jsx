import { useContext } from "react"
import { ProductsContext } from "../../../../contexts/ProductsContext"
import { Action, Counter, DetailsItems, Divider, ImageProducts, ItemValue, ItemsCart, NameCoffes, TrashButton } from "./styles"
import { Minus, Plus, Trash } from "phosphor-react"


export function Cart(){
    const {cartItem, handleIncrementProduct, handleDecrementProduct, handleDeleteToCart} = useContext(ProductsContext)

    return (
        <>
            {cartItem.map((list)=>{
                return (     
               <>
                    <ItemsCart key={list.item.id}>
                            <ImageProducts src={list.item.image}/>

                        <DetailsItems>    
                            
                            <NameCoffes>{list.item.product}</NameCoffes>

                            <ItemValue>
                                <p>{list.valorSoma}</p>
                            </ItemValue>

                            <Action>
                                <Counter>
                                    <Minus 
                                        color="#8047F8" 
                                        weight="bold" 
                                        cursor="pointer"
                                        onClick={() => handleDecrementProduct(list.item.id)}
                                    />
                                        {list.quantity}
                                        
                                    <Plus
                                        color="#8047F8"
                                        weight="bold"
                                        cursor="pointer"
                                        onClick={() => handleIncrementProduct(list.item.id)}
                                    />
                                </Counter>
                                <TrashButton
                                    cursor="pointer"
                                    onClick={() => handleDeleteToCart(list.item.id)}
                                >
                                    <Trash 
                                        size={20}
                                        color="#8047F8"
                                        weight="bold"
                                        />
                                        <p>REMOVER</p>
                                </TrashButton>
                            </Action>
                        </DetailsItems>
                        
                            <Divider>
                                <img src='divider.svg'></img>
                            </Divider>
                        
                    </ItemsCart>

                </>
                )
            })} 
        </>
    )
}