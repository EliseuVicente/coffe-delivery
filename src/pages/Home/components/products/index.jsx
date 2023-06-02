import { ListProducts } from "./listProducts"
import { CoffeeList, ContainerProducts, Title } from "./styles"



//object coffee
const coffees = [
    {
        id: 1,
        product: 'Expresso Tradicional',
        category: 'Tradicional',
        subcategory: '',
        description: 'O tradicional café feito com água quente e grãos moídos',
        valor: '9,90',
        image: 'public/tradicional.svg',
        quantity: 1,
        // selecionado:
    },
    {
        id: 2,
        product: 'Expresso Americano',
        category: 'Tradicional',
        subcategory: '',
        description: 'Expresso diluído, menos intenso que o tradicional',
        valor: '9,90',
        image: 'public/americano.svg',
        quantity: 1,
    },
    {
        id: 3,
        product: 'Expresso Cremoso',
        category: 'Tradicional',
        subcategory: '',
        description: 'Café expresso tradicional com espuma cremosa',
        valor: '9,90',
        image: 'public/cremoso.svg',
        quantity: 1,
    },
    {
        id: 4,
        product: 'Expresso Gelado',
        category: 'Tradicional',
        sub_category: 'Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        valor: '9,90',
        image: 'public/gelado.svg',
        quantity: 1,
    },
    {
        id: 5,
        product: 'Café com Leite',
        category: 'Tradicional',
        sub_category: 'Com leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        valor: '9,90',
        image: 'public/cafecomleite.svg',
        quantity: 1,
    },
    {
        id: 6,
        product: 'Latte',
        category: 'Tradicional',
        sub_category: 'Com leite',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        valor: '9,90',
        image: 'public/latte.svg',
        quantity: 1,
    },
    {
        id: 7,
        product: 'Capuccino',
        category: 'Tradicional',
        sub_category: 'Com leite',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        valor: '9,90',
        image: 'public/capuccino.svg',
        quantity: 1,
    },
    {
        id: 8,
        product: 'Macchiato',
        category: 'Tradicional',
        sub_category: 'Com leite',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        valor: '9,90',
        image: 'public/macchiato.svg',
        quantity: 1,
    },
    {
        id: 9,
        product: 'Mocaccino',
        category: 'Tradicional',
        sub_category: 'Com leite',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        valor: '9,90',
        image: 'public/mocaccino.svg',
        quantity: 1,
    },
    {
        id: 10,
        product: 'Chocolate Quente',
        category: 'Especial',
        sub_category: 'Com leite',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        valor: '9,90',
        image: 'public/chocolatequente.svg',
        quantity: 1,
    },
    {
        id: 11,
        product: 'Cubano',
        category: 'Alcoólico',
        sub_category: 'Com leite',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        valor: '9,90',
        image: 'public/cubano.svg',
        quantity: 1,
    },
    {
        id: 12,
        product: 'Havaiano',
        category: 'Especial',
        subcategory: '',
        description: 'Bebida adocicada preparada com café e leite de coco',
        valor: '9,90',
        image: 'public/havaiano.svg',
        quantity: 1,
    },
    {
        id: 13,
        product: 'Árabe',
        category: 'Especial',
        subcategory: '',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        valor: '9,90',
        image: 'public/arabe.svg',
        quantity: 1,
    },
    {
        id: 14,
        product: 'Irlandês',
        category: 'Especial',
        sub_category: 'Alcoólico',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        valor: '9,90',
        image: 'public/irlandes.svg',
        quantity: 1,
    },
    
]

export function Products(){

    //funcao para me passar a quantidade do produto.
    const handleSumProducts = () =>{
        const sum = coffees.indexOf(coffees.id);
        console.log(sum);
    }

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
                        valor={coffee.valor}
                        image={coffee.image}
                        category={coffee.category}
                        subcategory={coffee.sub_category}
                        description={coffee.description}
                        quantity={coffee.quantity}
                        handleSumProducts={handleSumProducts}
                    />
                )
            })}
                </CoffeeList>
        </ContainerProducts>
    )
}
