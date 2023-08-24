import { useContext } from "react"
import { ProductsContext } from "../../../../contexts/ProductsContext"
import { Action, Counter, DetailsItems, ImageProducts, ItemValue, ItemsCart, NameCoffes, TrashButton } from "./styles"
import { Minus, Plus, Trash } from "phosphor-react"

export function Cart(){
    const {cartItem, quantity, handleSumProducts} = useContext(ProductsContext)

    return (
        <>
            {cartItem.map((item)=>{
                return (     
                    <ItemsCart key={item.id}>
                            <ImageProducts src={item.image}/>
                        <DetailsItems>    
                            <NameCoffes>{item.product}</NameCoffes>
                            <ItemValue>
                                <p>{item.value}</p>
                            </ItemValue>
                            <Action>
                                <Counter>
                                    <Minus 
                                        color="#8047F8" 
                                        weight="bold" 
                                        cursor="pointer"
                                    /*  onClick={handleMinusProducts} *//>
                                        {quantity} 
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