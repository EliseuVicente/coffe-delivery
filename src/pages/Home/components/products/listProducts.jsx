import { useContext, useState } from "react";
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

export function ListProducts({content,valor,image,category,subcategory,description,handleSumProducts}) {
    
    const {selected, setSelected} = useContext(ProductsContext)

    const[quantity, setquantity] = useState(1);
    /* const [selected, setselected] = useState(false); */
    
    function handleSumProducts(){
        setquantity(quantity + 1);
    }

    function handleMinusProducts(){
        if (quantity > 1) {
        setquantity(quantity - 1);
        }
    }

    const SelectedCar = () =>{
        setSelected(true);
        if (selected === true){
           console.log(selected)
           console.log(category)
        }
    }

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
                        <h1>R$</h1> <span>{valor}</span>
                    </PriceProducts>

                    <Action>
                        <Counter>
                            <Minus 
                                color="#8047F8" 
                                weight="bold" 
                                cursor="pointer"
                                onClick={handleMinusProducts}/>
                                {quantity} 
                            <Plus 
                                color="#8047F8"
                                weight="bold"
                                cursor="pointer"
                                onClick={handleSumProducts}
                            />
                        </Counter>

                        <CarMarketing>
                            <ShoppingCart 
                                size={20} 
                                color="white" 
                                weight="fill" 
                                cursor="pointer"
                                onClick={SelectedCar}/>
                        </CarMarketing>

                    </Action>
                 </SectionBuy>
                
            </CoffeeItems>

    )
}        

