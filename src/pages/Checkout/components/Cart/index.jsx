import { useContext } from "react"
import { ProductsContext } from "../../../../contexts/ProductsContext"
import { Action, Counter, DetailsItems, ImageProducts, ItemValue, ItemsCart, NameCoffes, TrashButton } from "./styles"
import { Minus, Plus, Trash } from "phosphor-react"

export function Cart(){
    const {cartItem, productQuantities, handleSumProducts} = useContext(ProductsContext)

    /* const quantity = productQuantities[cartItem] */
   /*  console.log(cartItem) */
    return (
        <>
            {cartItem.map((list)=>{
                return (     
                    <ItemsCart key={list.item.id}>
                            <ImageProducts src={list.item.image}/>
                        <DetailsItems>    
                            <NameCoffes>{list.item.product}</NameCoffes>
                            <ItemValue>
                                <p>{list.item.value}</p>
                            </ItemValue>
                            <Action>
                                <Counter>
                                    <Minus 
                                        color="#8047F8" 
                                        weight="bold" 
                                        cursor="pointer"
                                    /*  onClick={handleMinusProducts} *//>
                                        {list.quantity}
                                        
                                    <Plus
                                        color="#8047F8"
                                        weight="bold"
                                        cursor="pointer"
                                        onClick={() => handleSumProducts(id)}
                                    />
                                </Counter>
                                <TrashButton>
                                    <Trash 
                                        size={20}
                                        color="#8047F8"
                                        weight="bold"
                                        cursor="pointer"
                                        />
                                        <p>REMOVER</p>
                                </TrashButton>
                            </Action>
                        </DetailsItems>
                    </ItemsCart>
  
                )
            })} 
        </>
    )
}