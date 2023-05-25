import { CoffeeItems, CoffeeList, ContainerProducts, NameCoffes, Title } from "./styles"
import { ListProducts } from "./listProducts"

const coffees = [
    {
        id: 1,
        product: 'Expresso Tradicional',
        // Valor: 9.90,
        // img: 
        // quantidade: 
        // selecionado:
    },
    {
        id: 2,
        product: 'Expresso Americano'
    },
    {
        id: 3,
        product: 'Expresso Americano'
    },
    {
        id: 4,
        product: 'Expresso Americano'
    },
    {
        id: 5,
        product: 'Expresso Americano'
    },
    {
        id: 6,
        product: 'Expresso Americano'
    },
    {
        id: 7,
        product: 'Expresso Americano'
    },
    {
        id: 8,
        product: 'Expresso Americano'
    },
    {
        id: 9,
        product: 'Expresso Americano'
    },
    {
        id: 10,
        product: 'Expresso Americano'
    },
    {
        id: 11,
        product: 'Expresso Americano'
    },
    {
        id: 12,
        product: 'Expresso Americano'
    },
    {
        id: 13,
        product: 'Expresso Americano'
    },
    {
        id: 14,
        product: 'Expresso Americano'
    },
    
]

export function Products(){
    return (
        <ContainerProducts>
            <Title>Nossos Cafés</Title>

            <CoffeeList>

            {coffees.map((coffee)=>{
                    return (
                            
                            <ListProducts
                                key={coffee.id}
                                content={coffee.product}
                            />
                            
                      
                    )
                })}
                </CoffeeList>
        </ContainerProducts>

        /* <CoffeeItems>
                        <NameCoffes>Expresso Tradicional</NameCoffes>
                    </CoffeeItems>

                    <CoffeeItems>
                        <NameCoffes>Expresso Americano</NameCoffes>
                    </CoffeeItems>

                    <CoffeeItems>
                        <NameCoffes>Expresso Cremoso</NameCoffes>
                    </CoffeeItems>

                    <CoffeeItems>
                        <NameCoffes>Expresso Gelado</NameCoffes>
                    </CoffeeItems>

                    <CoffeeItems>
                        <NameCoffes>Café com Leite</NameCoffes>
                    </CoffeeItems>

                    <CoffeeItems>
                        <NameCoffes>Latte</NameCoffes>
                    </CoffeeItems>

                    <CoffeeItems>
                        <NameCoffes>Capuccino</NameCoffes>
                    </CoffeeItems>

                    <CoffeeItems>
                        <NameCoffes>Macchiato</NameCoffes>
                    </CoffeeItems>

                    <CoffeeItems>
                        <NameCoffes>Mocaccino</NameCoffes>
                    </CoffeeItems>

                    <CoffeeItems>
                        <NameCoffes>Chocolate Quente</NameCoffes>
                    </CoffeeItems>

                    <CoffeeItems>
                        <NameCoffes>Cubano</NameCoffes>
                    </CoffeeItems>

                    <CoffeeItems>
                        <NameCoffes>Havaiano</NameCoffes>
                    </CoffeeItems>

                    <CoffeeItems>
                        <NameCoffes>Árabe</NameCoffes>
                    </CoffeeItems>

                    <CoffeeItems>
                        <NameCoffes>Irlandês</NameCoffes>
                    </CoffeeItems>
                </CoffeeList> */
    )
}


    