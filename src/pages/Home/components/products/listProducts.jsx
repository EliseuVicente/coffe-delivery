import { useContext } from "react";
import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { 
        Categories,
        CategoriesName,
        CoffeeItems,
        ImageProducts,
        NameCoffes,
        PriceProducts,
        FirstCategory,
        SecondCategory,
        DescriptionItens, 
        Action,
        SectionBuy,
        CarMarketing,
        Counter
    } from "./styles"

import { ProductsContext } from "../../../../contexts/ProductsContext";


export function ListProducts({content,value,image,category,subcategory,description,id}) {
    
    const {handleAddToCart, handleIncrementProduct, handleDecrementProduct, productQuantities} = useContext(ProductsContext)

    const quantity = productQuantities[id] || 1


    return (

            <CoffeeItems> 
                <ImageProducts src={image}/>
                <Categories>
                    <FirstCategory>
                        <CategoriesName>{category}</CategoriesName>
                    </FirstCategory>

                    {subcategory && (
                    <SecondCategory>
                        <CategoriesName>{subcategory}</CategoriesName>
                    </SecondCategory>
                )}

                </Categories>
               
                <NameCoffes>{content}</NameCoffes>

                <DescriptionItens>{description}</DescriptionItens>

                <SectionBuy>
                    <PriceProducts>
                        <h1>R$</h1> <span>{value}</span>
                    </PriceProducts>

                    <Action>
                        <Counter>
                            <Minus 
                                color="#8047F8" 
                                weight="bold" 
                                cursor="pointer"
                                onClick={() => handleDecrementProduct(id)}/>
                                {quantity}
                            <Plus 
                                color="#8047F8"
                                weight="bold"
                                cursor="pointer"
                                onClick={() => handleIncrementProduct(id)}
                            />
                        </Counter>

                        <CarMarketing>
                            <ShoppingCart 
                                size={20} 
                                color="white" 
                                weight="fill" 
                                cursor="pointer"
                                onClick={() => handleAddToCart(id, quantity)}/>
                        </CarMarketing>

                    </Action>
                 </SectionBuy>

            </CoffeeItems>

    )
}        

