import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import {list_routes} from "./NavbarData";
import Button from '@mui/material/Button';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import "./Navbar.scss"
import CustomizedDialogs from "../ModalTemplate/ModalTemplate";
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
                                <Link  to={item.path} state={item.name} >{item.name}</Link>
                                <span></span>
                            </li>
                        )   
                     })
                }
           </ul>
           <div className="btn-mobile">
            {
                <CustomizedDialogs buttonText={<DensityMediumIcon/>} 
                 title="Hola"
                >
                    <ul className="list-style-none ">
                    {
                     list_routes.map((item,index)=>{
                        return(
                            <li key={index} className={validatePath(item.url)}>
                                <Link  to={item.path} state={item.name} >{item.name}</Link>
                            </li>
                        )   
                     })
                    }
                    </ul>
                </CustomizedDialogs>
            }
            </div >
        </nav>
    )
}