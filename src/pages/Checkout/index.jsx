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
      } from "./styles"

import { Bank, CreditCard, CurrencyDollarSimple, Money, ShoppingCart} from 'phosphor-react'
import { Cart } from "./components/Cart"
import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export function  Checkout(){

  const {cartItem, setCartItem, selectOption, setSelectOption} = useContext(ProductsContext)

  const { register, handleSubmit} = useForm()

  /* Recebe o Hook Navegate */
  const navigate = useNavigate();

  /* Recebe os dados do formulário e envia para o caminho Success */
  const addForm = (data) =>{
    navigate("/success", { state: data})
    setCartItem([])
  }

  /* Recebe a opção escolhida e altera o estado da div TypePayment */
  const handleOptionClick = (option) => {
    setSelectOption(option)
  }

  /* Soma o valor dos produtos no carrinho */
  const totalItens = cartItem.reduce((acc, item )=> {
    const convertToNumber = parseFloat(item.valorSoma);
    
    return acc + convertToNumber
  }, 0)
 
  /* Bloco de cálculo dos valores e conversão para moeda */
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
                    <AddresInput type="text" placeholder="CEP" {...register("cep", {required:true})}/>
                    <StreetInput type="text" placeholder="Rua" {...register("street", {required:true})}/>
                    <AddresInput type="text" placeholder="Número" {...register("number", {required:true})}/>
                    <ComplementInput type="text" placeholder="Complemento" {...register("complement")}/>
                    <AddresInput type="text" placeholder="Bairro" {...register("neighborhood", {required:true})}/>
                    <CityInput type="text" placeholder="Cidade" {...register("city", {required:true})}/>
                    <UFInput type="text" placeholder="UF" {...register("uf", {required:true})}/>
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

                <TypePayment 
                  isSelected={selectOption === 'Cartão de crédito'}
                  onClick={()=> handleOptionClick('Cartão de crédito')}>
                    <CreditCard 
                      size={16}
                      color="#8047F8"
                      />
                        Cartão de crédito
 
                  </TypePayment>

                <TypePayment
                isSelected={selectOption === 'Cartão de débito'}
                onClick={()=> handleOptionClick('Cartão de débito')}>
                  <Bank
                    size={16}
                    color="#8047F8"
                    />
                      Cartão de débito
                  </TypePayment>

                <TypePayment
                isSelected={selectOption === 'Dinheiro'}
                onClick={()=> handleOptionClick('Dinheiro')}>
                  <Money 
                    size={16}
                    color="#8047F8"
                  />
                    Dinheiro
                  </TypePayment>
                 
            </ContainerPayment>
            
        </Container>
        
        <ContainerCart>
          <TitleContainers>Cafés selecionados</TitleContainers>
         
          <ContainerCartItems>
          
              <Cart />
              
              <FrameValues><p>Total de itens </p><p>{formattedTotal}</p></FrameValues>
              <FrameValues><p>Frete</p><p>{formattedFrete}</p></FrameValues>
              <FrameValues><h1>Total</h1><h1>{formatedTotalValueCart}</h1></FrameValues>
              
              <ButtonCart 
                onClick={handleSubmit(addForm)}>
                  
                  CONFIRMAR PEDIDO
                 
                </ButtonCart>

          </ContainerCartItems>
          
      </ContainerCart>
      
      </>
    )
}