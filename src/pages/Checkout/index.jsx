import { FormAdress,
        LabelForm, 
        ContainerForm, 
        ContainerPayment, 
        Container, 
        AddresInput, 
        StreetInput, 
        ComplementInput, 
        CityInput, UFInput, 
        LabelPayment, 
        TypePayment, 
        ContainerCart,
        ButtonCart, 
        FrameValues,
        TitleContainers,
        ContainerCartItems,
        ValueOption
      } from "./styles"

import { Bank, CreditCard, CurrencyDollarSimple, Money} from 'phosphor-react'
import { Cart } from "./components/Cart"
import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import { useForm } from "react-hook-form"

export function Checkout(){

const {cartItem} = useContext(ProductsContext)

const { register, handleSubmit} = useForm()
const addForm = data => console.log(data)

  const totalItens = cartItem.reduce((acc, item )=> {
    const convertToNumber = parseFloat(item.valorSoma);
    
    return acc + convertToNumber
  }, 0)
 
  const formattedTotal = totalItens.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL'})
  
  const frete = 3.5
  const formattedFrete = frete.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL'})

  const totalValueCart = (totalItens) + (frete)
  const formatedTotalValueCart = totalValueCart.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL'})

  return (

      <>
        <Container>
          <TitleContainers>Complete seu pedido</TitleContainers>
            <ContainerForm>
            <FormAdress>
                <LabelForm>
                    <img src='\location.svg'/>
                    <h1>Endereço de Entrega</h1>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                </LabelForm>
                  
                <form>
                    <AddresInput type="text" placeholder="CEP" {...register("cep")} required/>
                    <StreetInput type="text" placeholder="Rua" {...register("street")} required/>
                    <AddresInput type="text" placeholder="Número" {...register("number")} required/>
                    <ComplementInput type="text" placeholder="Complemento" {...register("complement")}/>
                    <AddresInput type="text" placeholder="Bairro" {...register("neighborhood")} required/>
                    <CityInput type="text" placeholder="Cidade" {...register("city")} required/>
                    <UFInput type="text" placeholder="UF" {...register("uf")} required/>
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
                      <ValueOption value="Cartão de crédito">
                        Cartão de crédito
                      </ValueOption>
 
                  </TypePayment>

                {/* <TypePayment value="Cartão de débito">
                  <Bank
                    size={16}
                    color="#8047F8"
                    />
                    <option value="Cartão de débito">
                      Cartão de débito
                    </option>
                  </TypePayment>

                <TypePayment value="Dinheiro">
                  <Money 
                    size={16}
                    color="#8047F8"
                  />
                  <option value="Dinheiro">
                    Dinheiro
                  </option>
                  </TypePayment> */}
            </ContainerPayment>
   
        </Container>
        
        <ContainerCart>
          <TitleContainers>Cafés selecionados</TitleContainers>
         
          <ContainerCartItems>
          
              <Cart />
              
              <FrameValues><p>Total de itens </p><p>{formattedTotal}</p></FrameValues>
              <FrameValues><p>Frete</p><p>{formattedFrete}</p></FrameValues>
              <FrameValues><h1>Total</h1><h1>{formatedTotalValueCart}</h1></FrameValues>
              
              <ButtonCart onClick={handleSubmit(addForm)}>CONFIRMAR PEDIDO</ButtonCart>
              
          </ContainerCartItems>
          
      </ContainerCart>
      
      </>
    )
}