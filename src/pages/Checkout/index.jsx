import { FormAdress,ContainerCoffeeList, LabelForm, ContainerForm, ContainerPayment, Container} from "./styles"

export function Checkout(){
    return (
      <>
      <Container>
        <ContainerForm>
          Teste
        </ContainerForm>
        <ContainerPayment>
          Teste 2
        </ContainerPayment>
      </Container>
      <ContainerCoffeeList>
          Ola
        </ContainerCoffeeList>
      {/* <Container >
        <ContainerForm>
          <FormAdress>
            <LabelForm>
                <img src='\location.svg'/>
                <h1>Endereço de Entrega</h1>
                <span>Informe o endereço onde deseja receber seu pedido</span>
            </LabelForm>
            
                <input type="text" placeholder="CEP"/>
                <input type="text" placeholder="Rua"/>
                <input type="text" placeholder="Número"/>
                <input type="text" placeholder="Complemento"/>
                <input type="text" placeholder="Bairro"/>
                <input type="text" placeholder="Cidade"/>
                <input type="text" placeholder="UF"/>
            </FormAdress>
    
        </ContainerForm>
        <ContainerCoffeeList>
          Ola
        </ContainerCoffeeList>

        <ContainerPayment>
          Teste
        </ContainerPayment>

        </Container> */}
      </>
    )
}