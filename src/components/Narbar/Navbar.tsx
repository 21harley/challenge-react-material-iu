import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import {list_routes} from "./NavbarData";
import Button from '@mui/material/Button';
import "./Navbar.scss"

export default function Navbar(){
    const location = useLocation();
    
    const validatePath = (path:string[])=>{
        return path.includes(location.pathname)?"active-li-navbar-main":""
    }

    return(
        <nav className="nav-main">
           <ul className="list-style-none nav-main-list">
               {
                     list_routes.map((item,index)=>{
                        return(
                            <li key={index} className={validatePath(item.url)}>
                                <Link  to={item.path}>{item.name}</Link>
                                <span></span>
                            </li>
                        )   
                     })
                }
           </ul>
           <div className="btn-mobile">
                <Button className="btn-create-user"  variant="contained" disableElevation > 
                    Crea tu cuenta
                </Button>
            </div >
        </nav>
    )
}