import "./Footer.scss"
import Logo from "../../assets/logo.svg"
import Ondas from "../../assets/ondas-solid.svg"
import Smile from "../../assets/smile.svg"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
export function Footer(){
    return(
        <>
        <footer className="footer-main">
             <img className="footer-ondas" src={Ondas} alt="ondas"/>
            <div className="container-info-footer">
                <div className="container-text-link">
                   <p>OFERTAS Y PROMOCIONES</p>
                   <div>
                        <h1>No te Pierdas <br/> nuestras ofertas!</h1>
                   </div>
                   <form action="#" className="conteiner-text-email">
                        <input type="email" placeholder="Tu dirección de correo electrónico" required/>
                        <button className="button-text-email">
                            <TelegramIcon />
                        </button>
                   </form>
                   <div className="info-footer-link">
                       <div className="container-footer-logo">
                           <img className="footer-logo" src={Logo} alt="logo"/>
                       </div>
                        <div className="footer-link">
                           <span>
                               Envios y devoluciones 
                           </span>
                           <span>
                               Preguntas Frecuentes
                           </span>
                        </div>
                        <div className="footer-link">
                           <span>
                               Aviso de privacidad
                           </span>
                           <span>
                               Terminos y condiciones 
                           </span> 
                        </div>
                   </div>
                   <span className="span-message-r">
                    Todos los derechos reservados © Macropay 2022 
                   </span>
                </div>
                <div className="container-logo-smile"> 
                    <img className="footer-logo-smile" src={Smile} alt="smile"/>
                </div>
                <div className="container-text-message">
                    <h1>Conversemos!</h1>
                    <p>
                        Loren ipsum dolor sit amet
                    </p>
                    <div className="text-message-icon">
                        <a className="text-message-icon-link" href="/#"> <FacebookIcon/></a>
                        <a className="text-message-icon-link" href="/#"> <InstagramIcon/></a>
                        <a className="text-message-icon-link" href="/#"> <LinkedInIcon/></a>
                        <a className="text-message-icon-link" href="/#"> <WhatsAppIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}