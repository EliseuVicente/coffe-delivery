import { CoffeeItems, CoffeeList, ContainerProducts, NameCoffes, Title } from "./styles"
import { ListProducts } from "./listProducts"

const coffees = [
    {
        id: 1,
        product: 'Expresso Tradicional',
        valor: 9.90,
        // img: 
        // quantidade: 
        // selecionado:
    },
    {
        id: 2,
        product: 'Expresso Americano',
        valor: 9.90,
    },
    {
        id: 3,
        product: 'Expresso Cremoso',
        valor: 9.90,
    },
    {
        id: 4,
        product: 'Expresso Gelado',
        valor: 9.90,
    },
    {
        id: 5,
        product: 'Café com Leite',
        valor: 9.90,
    },
    {
        id: 6,
        product: 'Latte',
        valor: 9.90,
    },
    {
        id: 7,
        product: 'Capuccino',
        valor: 9.90,
    },
    {
        id: 8,
        product: 'Macchiato',
        valor: 9.90,
    },
    {
        id: 9,
        product: 'Mocaccino',
        valor: 9.90,
    },
    {
        id: 10,
        product: 'Chocolate Quente',
        valor: 9.90,
    },
    {
        id: 11,
        product: 'Cubano',
        valor: 9.90,
    },
    {
        id: 12,
        product: 'Havaiano',
        valor: 9.90,
    },
    {
        id: 13,
        product: 'Árabe',
        valor: 9.90,
    },
    {
        id: 14,
        product: 'Irlandês',
        valor: 9.90,
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
                                valor={coffee.valor}
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


    