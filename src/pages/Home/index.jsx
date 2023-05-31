import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";
import { Action, BoxCircle, CicleYellowDark, CircleGray, CirclePurple, CircleYellow, Header, IconCar, LabelItems, Navbar, SubTitle, Title, TitleHeader} from "./styles";
import { Products } from "./components/products"


export function Home(){

    return (
       
         <div>
            <Navbar>
                <img src='.\src\assets\logo.svg'/>
                <Action>
                   <MapPin size={23} color= "#4B2995"weight="fill" />
                   <div> Campinas, SP</div>
                   <IconCar>
                    <ShoppingCart size={23} color="#C47F17" weight="fill"/>
                   </IconCar>
                </Action>
            </Navbar>
                
            <Header>
                <img src='.\src\assets\intro.svg'/>

                <TitleHeader>
                    <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                    <SubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitle>
                </TitleHeader>

                <BoxCircle>
                    <LabelItems>
                        <CicleYellowDark>
                            <ShoppingCart size={17} color="white" weight="fill"/>
                        </CicleYellowDark>
                        <span>Compra simples e segura</span>
                    </LabelItems>
                        
                    <LabelItems>
                        <CircleGray>
                            <Package size={17} color="white" weight="fill"/>
                        </CircleGray>
                        <span>Embalagem mantém o café intacto</span>
                    </LabelItems>
                        
                    <LabelItems>
                        <CircleYellow>
                            <Timer size={17} color="white" weight="fill"/>
                        </CircleYellow>
                        <span>Entrega rápida e rastreada</span>
                    </LabelItems>
                        
                    <LabelItems>
                        <CirclePurple>
                            <Coffee size={17} color="white" weight="fill" />
                        </CirclePurple>
                        <span>O café chega fresquinho até você</span>
                    </LabelItems>
                        
                </BoxCircle>
            </Header>
            
            <Products />
        </div>

        
    )
}