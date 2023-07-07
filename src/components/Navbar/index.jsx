import { MapPin, ShoppingCart } from "phosphor-react"
import { Action, IconCar, Navbar } from "./styles"

export function NavbarHeader(){
   return (
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

   )
}