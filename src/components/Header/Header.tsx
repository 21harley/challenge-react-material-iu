import "./Header.scss"
import { HeaderBar } from "../Header-bar/Header-bar"
import Navbar from "../Narbar/Navbar"

export function Header(){
    return(
        <div className="header-title">
            <HeaderBar/>
            <Navbar/>
        </div>
    )
}