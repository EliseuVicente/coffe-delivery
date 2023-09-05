import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { ProductsContext } from "../../contexts/ProductsContext"
import { Container, ContainerInfo, H1, H2, Imagem, LabelInformation } from "./styles"
import { CicleYellowDark, CirclePurple, CircleYellow } from "../Home/styles"
import { MapPin, Timer, CurrencyDollarSimple } from "phosphor-react"

import Imageillustration from "../../assets/illustration.svg"

export function Success(){

const {selectOption} = useContext(ProductsContext)

/* Usando o location para receber os dados do formulário 
enviados pelo Navegate state no Checkout */
const location = useLocation()
const formData = location.state

return(
    <>
        <H1>Uhu! Pedido confirmado</H1>
        <H2>Agora é só aguardar que logo o café chegará até você</H2>
        <Container>
        <ContainerInfo>

            <LabelInformation>
                <CirclePurple>
                    <MapPin size={16} color="#FAFAFA" weight="fill" />
                </CirclePurple>
                <p>Entrega em <strong>{formData.street}, {formData.number}</strong> {formData.neighborhood} - {formData.city}, {formData.uf}</p>
            </LabelInformation>

            <LabelInformation>
                <CircleYellow>
                    <Timer size={16} color="white" weight="fill"/>
                </CircleYellow>
                <p>Previsão de entrega <br/><strong>20 min - 30 min</strong></p>     
            </LabelInformation>

            <LabelInformation>
                <CicleYellowDark>
                    <CurrencyDollarSimple size={16} color="white" weight="fill" />
                </CicleYellowDark>
                <p>Pagamento na entrega <br/> <strong>{selectOption}</strong></p>
            </LabelInformation>

        </ContainerInfo>
        
        <Imagem>
            <img src={Imageillustration}/>
        </Imagem>
        </Container>
    </>
    )

}