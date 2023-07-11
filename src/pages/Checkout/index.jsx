import { FormAdress,ContainerCoffeeList, LabelForm, ContainerForm, ContainerPayment, Container, AddresInput, StreetInput, ComplementInput, CityInput, UFInput, LabelPayment, TypePayment} from "./styles"
import { Bank, CreditCard, CurrencyDollarSimple, Money} from 'phosphor-react'
export function Checkout(){
    return (
      <>
      <Container>
        <ContainerForm>
        <FormAdress>
            <LabelForm>
                <img src='\location.svg'/>
                <h1>Endereço de Entrega</h1>
                <span>Informe o endereço onde deseja receber seu pedido</span>
            </LabelForm>

            <form action="">
                <AddresInput type="text" placeholder="CEP" required/>
                <StreetInput type="text" placeholder="Rua" required/>
                <AddresInput type="text" placeholder="Número" required/>
                <ComplementInput type="text" placeholder="Complemento"/>
                <AddresInput type="text" placeholder="Bairro" required/>
                <CityInput type="text" placeholder="Cidade" required/>
                <UFInput type="text" placeholder="UF" required/>
            </form>
            </FormAdress>
        </ContainerForm>

        <ContainerPayment>
          <LabelPayment>
                <CurrencyDollarSimple 
                  color="#8047F8"
                  size={22}
                />
                <h1>Pagamento</h1>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </LabelPayment>

            <TypePayment>
                <CreditCard 
                  size={16}
                  color="#8047F8"
                  />
                Cartão de crédito
              </TypePayment>

            <TypePayment>
              <Bank
                size={16}
                color="#8047F8"
                />
                Cartão de débito
              </TypePayment>

            <TypePayment>
              <Money 
                size={16}
                color="#8047F8"
              />
                Dinheiro
              </TypePayment>
        </ContainerPayment>

        
      </Container>

      <ContainerCoffeeList>
          
        </ContainerCoffeeList>
      
      </>
    )
}