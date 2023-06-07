import React, { useEffect } from 'react'
import ControlBar from "./components/ControlBar/ControlBar"
import Serch from "./components/Serch/Serch"
import { DatePage,Item,ControlBarType } from "../../interfaces/TypeStore";
import CardItem from "../CardItem/CardItem"
import { useLocation } from "react-router-dom";
import {useAppSelector } from "../../reduxer/index";
import "./ViewItems.scss";
import CustomizedDialogs from '../ModalTemplate/ModalTemplate';

export default function ViewItems() {
    const location = useLocation();

    const store = useAppSelector(state => state.StoreItems );
    
    const lista = store?.filter((item:DatePage) => item.name_page === location.state)[0]??[];
    
    const controlBar:ControlBarType={
        brand:lista?.brands??[],
        rate:(lista?.rate)?lista.rate:[1,4000],
        review_number:0,
        isFavorite:""
    }

    const [stateControl, setstateControl] = React.useState({
        brand:[],
        rate:(lista?.rate)?lista.rate:[1,10000],
        review_number:0,
        isFavorite:""
    });
    
    const validate_String=(cadena:string,subcadena:string)=>{
        const auxCadena=cadena.toLocaleLowerCase();
        const  auxSubCadena=subcadena.toLocaleLowerCase();
        return !auxCadena.includes(auxSubCadena);
    }

    const [serchString,setSerchString]=React.useState("");

    const [listFavorite,setListFavorite]=React.useState<Item[]>([]);
    
    const initSetStateControl=()=>{
        setstateControl({
            brand:[],
            rate:(lista?.rate)?lista.rate:[1,10000],
            review_number:0,
            isFavorite:""
        })
        setSerchString("");
    }

    useEffect(()=>{
        initSetStateControl();
        console.log("cambio useEffect",stateControl)
    },[location.state]);

    useEffect(()=>{
        console.log(stateControl);
    },[stateControl]);

    const getItems = () => {
        if(!lista.liastItem) return []
        if(stateControl.isFavorite.includes("Favorito")) return listFavorite;
       return lista.liastItem.filter((item:Item) => {
              if(serchString.length>0 && validate_String(item.name,serchString)) return false
              if((stateControl.rate[0]>item.price || stateControl.rate[1]<item.price)) return false
              if(stateControl.brand.length>0 && !stateControl.brand.includes(item?.brand)) return false
              if(stateControl.review_number>0 && item.review_number<stateControl.review_number) return false
              return true
       })
    }

    return (
        <div className="container-viewitems">
            <div className="container-controlBar">
              <ControlBar controlBar={controlBar} stateControl={stateControl} setstateControl={setstateControl}/>
            </div>
            <div className="container-g-carditems-serch">
                <Serch serchString={serchString} setSerchString={setSerchString}/>
                <div className='modal-container-controlBar'>
                   <CustomizedDialogs
                     buttonText={"Filter"}
                     title='Filter'
                   >
                        <ControlBar controlBar={controlBar} stateControl={stateControl} setstateControl={setstateControl}/>
                   </CustomizedDialogs>
                </div>
                <div className="container-grid-carditems">
                    {
                        getItems().map((item:Item) => {
                           return <CardItem key={item.id} item={item} listFavorite={listFavorite} setListFavorite={setListFavorite}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}