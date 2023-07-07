import { Outlet } from "react-router-dom";
import { NavbarHeader } from "../../components/Navbar";

export function DefaultLayout(){
    return (
        <>
            <NavbarHeader/>
            <Outlet />
        </>
    )
}