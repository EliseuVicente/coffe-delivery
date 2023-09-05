import { MapPin, ShoppingCart } from "phosphor-react"
import { Action, Counter, IconCar, Location, Navbar } from "./styles"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"

import  Logo  from "../../assets/logo.svg"

export function NavbarHeader(){

    const { cartItem } = useContext(ProductsContext)
   return (
    <Navbar>
        <Link to={'/'}>
            <img src={Logo}/>
        </Link>
        
        <Action>
            <Location>
                <MapPin size={23} color= "#4B2995"weight="fill" />
                    <p>Campinas, SP</p>
            </Location>

            <IconCar>
                <Link to={'/checkout'}>
                    <ShoppingCart size={23} color="#C47F17" weight="fill"/>
                    {cartItem.length == 0 ? '' : <Counter><p>{cartItem.length}</p></Counter>}
                </Link>
            </IconCar>
        </Action>
    </Navbar>
   )
}