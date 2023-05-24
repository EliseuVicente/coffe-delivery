import { CoffeeItems, CoffeeList, ContainerProducts, Title } from "./styles"

export function Products(){
    return (
        <ContainerProducts>
            <Title>Nossos Cafés</Title>
                <CoffeeList>
                    <CoffeeItems>Teste</CoffeeItems>
                    <CoffeeItems>Teste</CoffeeItems>
                    <CoffeeItems>Teste</CoffeeItems>
                    <CoffeeItems>Teste</CoffeeItems>
                </CoffeeList>
        </ContainerProducts>
    )
}