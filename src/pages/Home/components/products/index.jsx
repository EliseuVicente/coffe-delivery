import { CoffeeItems, CoffeeList, ContainerProducts, NameCoffes, Title } from "./styles"
import { ListProducts } from "./listProducts"

const coffees = [
    {
        id: 1,
        product: 'Expresso Tradicional',
        category: 'Tradicional',
        valor: '9,90',
        image: 'public/tradicional.svg',
        // quantidade: 
        // selecionado:
    },
    {
        id: 2,
        product: 'Expresso Americano',
        category: 'Tradicional',
        valor: '9,90',
        image: 'public/americano.svg',
    },
    {
        id: 3,
        product: 'Expresso Cremoso',
        category: 'Tradicional',
        valor: '9,90',
        image: 'public/cremoso.svg',
    },
    {
        id: 4,
        product: 'Expresso Gelado',
        category: 'Tradicional',
        sub_category: 'Gelado',
        valor: '9,90',
        image: 'public/gelado.svg',
    },
    {
        id: 5,
        product: 'Café com Leite',
        category: 'Tradicional',
        sub_category: 'Com leite',
        valor: '9,90',
        image: 'public/cafecomleite.svg',
    },
    {
        id: 6,
        product: 'Latte',
        category: 'Tradicional',
        sub_category: 'Com leite',
        valor: '9,90',
        image: 'public/latte.svg',
    },
    {
        id: 7,
        product: 'Capuccino',
        category: 'Tradicional',
        sub_category: 'Com leite',
        valor: '9,90',
        image: 'public/capuccino.svg',
    },
    {
        id: 8,
        product: 'Macchiato',
        category: 'Tradicional',
        sub_category: 'Com leite',
        valor: '9,90',
        image: 'public/macchiato.svg',
    },
    {
        id: 9,
        product: 'Mocaccino',
        category: 'Tradicional',
        sub_category: 'Com leite',
        valor: '9,90',
        image: 'public/mocaccino.svg',
    },
    {
        id: 10,
        product: 'Chocolate Quente',
        category: 'Especial',
        sub_category: 'Com leite',
        valor: '9,90',
        image: 'public/chocolatequente.svg',
    },
    {
        id: 11,
        product: 'Especial',
        category: 'Alcoólico',
        sub_category: 'Com leite',
        valor: '9,90',
        image: 'public/cubano.svg',
    },
    {
        id: 12,
        product: 'Havaiano',
        product: 'Especial',
        category: '',
        valor: '9,90',
        image: 'public/havaiano.svg',
    },
    {
        id: 13,
        product: 'Árabe',
        valor: '9,90',
        image: 'public/arabe.svg',
    },
    {
        id: 14,
        product: 'Irlandês',
        valor: '9,90',
        image: 'public/irlandes.svg',
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
                                image={coffee.image}
                                category={coffee.category}
                                subcategory={coffee.sub_category}
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


    