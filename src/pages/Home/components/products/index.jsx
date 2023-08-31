import { ListProducts } from "./listProducts"
import { CoffeeList, ContainerProducts, Title } from "./styles"

//object coffee

export const coffees = [
    {
        id: 1,
        product: 'Expresso Tradicional',
        category: 'Tradicional',
        subcategory: '',
        description: 'O tradicional café feito com água quente e grãos moídos',
        value: '9.90',
        image: 'public/tradicional.svg',
    },
    {
        id: 2,
        product: 'Expresso Americano',
        category: 'Tradicional',
        subcategory: '',
        description: 'Expresso diluído, menos intenso que o tradicional',
        value: '9.90',
        image: 'public/americano.svg',
    },
    {
        id: 3,
        product: 'Expresso Cremoso',
        category: 'Tradicional',
        subcategory: '',
        description: 'Café expresso tradicional com espuma cremosa',
        value: '9.90',
        image: 'public/cremoso.svg',
    },
    {
        id: 4,
        product: 'Expresso Gelado',
        category: 'Tradicional',
        sub_category: 'Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        value: '9.90',
        image: 'public/gelado.svg',
    },
    {
        id: 5,
        product: 'Café com Leite',
        category: 'Tradicional',
        sub_category: 'Com leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        value: '9.90',
        image: 'public/cafecomleite.svg',
    },
    {
        id: 6,
        product: 'Latte',
        category: 'Tradicional',
        sub_category: 'Com leite',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        value: '9.90',
        image: 'public/latte.svg',
    },
    {
        id: 7,
        product: 'Capuccino',
        category: 'Tradicional',
        sub_category: 'Com leite',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        value: '9.90',
        image: 'public/capuccino.svg',
    },
    {
        id: 8,
        product: 'Macchiato',
        category: 'Tradicional',
        sub_category: 'Com leite',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        value: '9.90',
        image: 'public/macchiato.svg',
    },
    {
        id: 9,
        product: 'Mocaccino',
        category: 'Tradicional',
        sub_category: 'Com leite',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        value: '9.90',
        image: 'public/mocaccino.svg',
    },
    {
        id: 10,
        product: 'Chocolate Quente',
        category: 'Especial',
        sub_category: 'Com leite',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        value: '9.90',
        image: 'public/chocolatequente.svg',
    },
    {
        id: 11,
        product: 'Cubano',
        category: 'Alcoólico',
        sub_category: 'Com leite',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        value: '9.90',
        image: 'public/cubano.svg',
    },
    {
        id: 12,
        product: 'Havaiano',
        category: 'Especial',
        subcategory: '',
        description: 'Bebida adocicada preparada com café e leite de coco',
        value: '9.90',
        image: 'public/havaiano.svg',
    },
    {
        id: 13,
        product: 'Árabe',
        category: 'Especial',
        subcategory: '',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        value: '9,90',
        image: 'public/arabe.svg',
    },
    {
        id: 14,
        product: 'Irlandês',
        category: 'Especial',
        sub_category: 'Alcoólico',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        value: '9.90',
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
                        id={coffee.id}
                        key={coffee.id}
                        content={coffee.product}
                        value={coffee.value}
                        image={coffee.image}
                        category={coffee.category}
                        subcategory={coffee.sub_category}
                        description={coffee.description}
                        
                    />
                )
            })}
                </CoffeeList>
        </ContainerProducts>
    )
}
