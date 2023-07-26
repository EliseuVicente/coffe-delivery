import { MapPin, ShoppingCart } from "phosphor-react"
import { Action, IconCar, Navbar } from "./styles"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"

export function NavbarHeader(){

    const { cartItem } = useContext(ProductsContext)
   return (
    <Navbar>
        <Link to={'/'}>
            <img src='.\src\assets\logo.svg'/>
        </Link>
        
        <Action>
            <MapPin size={23} color= "#4B2995"weight="fill" />
                <div> Campinas, SP</div>
            <IconCar>
                <Link to={'/checkout'}>
                    <ShoppingCart size={23} color="#C47F17" weight="fill"/>
                    {cartItem.length}
                </Link>
            </IconCar>
        </Action>
    </Navbar>

   )
}