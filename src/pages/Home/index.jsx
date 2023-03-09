import { MapPin } from "phosphor-react";
import { Action, Navbar } from "./styles";



export function Home(){

    return (
        
        <div>
            <Navbar>
                <img src='.\src\assets\logo.svg'/>

                <Action>
                   <span><MapPin size={23} color="#4B2995" />Campinas, SP</span>
                </Action>
            </Navbar>
        </div>
    )
}