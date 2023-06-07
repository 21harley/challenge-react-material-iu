import { useAppSelector,useAppDispatch } from "../../reduxer";
import { setItemsCardSlice } from "../../reduxer/slice/CardItemDetail/CardItemDetail";
import {  initialState } from "../../reduxer/slice/CardItemDetail/ItenrfacesDetailItem";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { price_reducer } from "../../tools/functions";
import "./ModalDetailCard.scss"

export default function ModalDetailCard(){
    const cardDetail = useAppSelector(state => {
        return state.CardItemDetails
      })
    const dispatch = useAppDispatch();

    const handleCloseModal = (event: React.MouseEvent<HTMLButtonElement,MouseEvent>) =>{
        console.log("Cerrar")
        dispatch(setItemsCardSlice(initialState));
    }

    if(cardDetail.status==="Modal"){
        const item=cardDetail.detailItem;
        const valor=price_reducer(item?.sales??1 ,item?.price??1);
        return(
            <>
            <div className="container-modal-detail">
                <div className="modal-detail">
                    <div className="header-modal-detail">
                          <img className="img-header-modal-detail" src={item?.images[0]} alt={item?.name} />
                          <div className="header-modal-detail__button-close">
                             <Button onClick={(e)=>{handleCloseModal(e)}} >
                                <CloseIcon />
                             </Button>
                          </div>
                    </div>
                    <div className="body-modal-detail">
                       <div className="container-description-cost">
                            <div>
                                <img src={item?.images[1]} alt={item?.name} />
                            </div>
                            <div className="container-title">
                                 <span className="title-name">{item?.name}</span>
                                 <span className="title-memory">{item?.details.memory}</span>
                                 <span className="title-color">Color Selecionado: <strong>{item?.details.color}</strong></span>
                                 <span className="title-buy-cost">${valor}x1</span>
                            </div>
                       </div>
                       <div className="container-description-buy">
                          <span>1 item en tu carrito</span>
                          <span>Subtotal:${valor}</span>
                       </div>
                    </div>
                    <div className="footer-modal-detail">
                          <div className="container-circul-done">
                              <div className="circul-done">
                                <DoneIcon className="doneIcon"/>
                              </div>
                          </div>
                          <h3>
                             Te vas a llevar este celular por solo
                          </h3>
                          <h2>
                            $120 p/semana!
                          </h2>
                          <div className="container-button-buy"> 
                          <Button className="button-buy">
                            COMPRA A CRÉDITO
                          </Button>
                          </div>
                          <div className="container-option">
                            <div className="barra-option"></div>
                            <span> <em> o puedes</em> </span>
                            <div className="barra-option"></div>
                          </div>
                          <span className="titel-buy">Comprar a contado</span>
                    </div>
                </div>
            </div>
            </>
        )
    }else{
        return <></>
    }

}