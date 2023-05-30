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
        Counter,
        CarMarketing
    } from "./styles"

export function ListProducts({content,valor,image,category,subcategory,description,quantity}) {
    return (
    
            <CoffeeItems> 
                <ImageProducts src={image}/>
                <Categories>
                    <FirstCategory>
                        <CategoriesName>{category}</CategoriesName>
                    </FirstCategory>

                    {subcategory == null ? ( 
                        <div></div>
                ): (
                    <SecondCategory>
                        <CategoriesName>{subcategory}</CategoriesName>
                    </SecondCategory>
                )}
                </Categories>
               
                <NameCoffes>{content}</NameCoffes>

                <DescriptionItens>{description}</DescriptionItens>

                <SectionBuy>
                    <PriceProducts>
                        <h1>R$</h1> <span>{valor}</span>
                    </PriceProducts>

                    <Action>
                        <Counter>
                            <Minus color="#8047F8" weight="bold"/>
                            {quantity} 
                            <Plus color="#8047F8" weight="bold" />
                        </Counter>

                        <CarMarketing>
                            <ShoppingCart size={20} color="white" weight="fill"/>
                        </CarMarketing>

                    </Action>
                 </SectionBuy>
                
            </CoffeeItems>

    )
}        

