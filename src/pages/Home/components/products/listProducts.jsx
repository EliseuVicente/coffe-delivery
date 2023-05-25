import { Categories, CategoriesName, CoffeeItems, ImageProducts, NameCoffes, PriceProducts } from "./styles"

export function ListProducts({content,valor,image,category,subcategory}) {
    return (
    
            <CoffeeItems> 
                <ImageProducts src={image}/>
                <Categories>
                    <CategoriesName>{category}</CategoriesName>
                    
                </Categories>
               {subcategory}
                <NameCoffes>{content}</NameCoffes>
                <PriceProducts>
                    <h1>R$</h1> <span>{valor}</span>
                 </PriceProducts>
                
            </CoffeeItems>

    )
}        

