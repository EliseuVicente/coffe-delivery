import { MapPin, ShoppingCart } from "phosphor-react";
import { Action, BoxCircle, CircleGray, CirclePurple, CircleYellow, Header, IconCar, Navbar} from "./styles";
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
                {/* <img src='.\src\assets\intro.svg'/> */}

                {/* <BoxCircle> */}
                    {/* <LabelYellowDark> <span>Compra simples e segura</span></LabelYellowDark> */}
                        {/* <TitleCircleYellowDark><p>Compra simples e segura</p></TitleCircleYellowDark> */}

                    {/* <CircleGray><span>Embalagem mantém o café intacto</span></CircleGray> */}
                        {/* <TitleCircleGray><p>Embalagem mantém o café intacto</p></TitleCircleGray> */}

                    {/* <CircleYellow><span>Entrega rápida e rastreada</span></CircleYellow> */}
                        {/* <TitleCircleYellow><p>Entrega rápida e rastreada</p></TitleCircleYellow> */}

                    {/* <CirclePurple><span>O café chega fresquinho até você</span></CirclePurple> */}
                        {/* <TitleCirclePurple><p>O café chega fresquinho até você</p></TitleCirclePurple> */}
                {/* </BoxCircle> */}
            </Header>
            
            <Products />
        </div>

        
    )
}