import { 
        Categories,
        CategoriesName,
        CoffeeItems,
        ImageProducts,
        NameCoffes,
        PriceProducts,
        FirstCategory,
        SecondCategory,
        DescriptionItens 
    } from "./styles"

export function ListProducts({content,valor,image,category,subcategory,description}) {
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

                <PriceProducts>
                    <h1>R$</h1> <span>{valor}</span>
                 </PriceProducts>
                
            </CoffeeItems>

    )
}        

