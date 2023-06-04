import "./Header-bar.scss"
import Button from '@mui/material/Button';
import Logo from "../../assets/logo.svg"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function HeaderBar(){
    return(
        <ul className="list-style-none header-bar-list">
            <li>
              <img className="header-bar-logo" src={Logo} alt="logo"/>
            </li>
            <li className="header-bar-btns">
                <Button className="btn-create-user"  variant="contained" disableElevation>
                    Crea tu cuenta
                </Button>
                <Button className="btn-login-user" disableElevation>
                    Inicia sesión
                </Button>
                <button className="btn-shopping-cart-user">
                  <AddShoppingCartIcon/>
                </button>
                <div className="header-bar-circul">
                    <span className="header-bar-circul-menssage">
                        Compra a <strong> CRÉDITO </strong>
                    </span>
                </div>
            </li>
        </ul>
    )
}