import { MapPin, ShoppingCart } from "phosphor-react";
import { Action, Header, IconCar, Navbar } from "./styles";



export function Home(){

    return (
        
        <div>
            <Navbar>
                <img src='.\src\assets\logo.svg'/>

                <Action>
                   <MapPin size={23} color="#4B2995" weight="fill" />
                   <div> Campinas, SP</div>
                   <IconCar>
                    <ShoppingCart size={23} color="#C47F17" weight="fill"/>
                   </IconCar>
                </Action>
            </Navbar>
                
            <Header>
                <img src='.\src\assets\intro.svg'/>
                
            </Header>
        </div>

        
    )
}