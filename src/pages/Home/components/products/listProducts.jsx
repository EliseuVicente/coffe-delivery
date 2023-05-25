import { CoffeeItems, NameCoffes } from "./styles"

export function ListProducts({content,valor}) {
    return (
    
            <CoffeeItems> 
                <NameCoffes>{content}</NameCoffes>
                <h1>R${valor}</h1>
            </CoffeeItems>

    )
}        

