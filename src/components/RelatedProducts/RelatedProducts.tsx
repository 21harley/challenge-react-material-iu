import { DatePage,Item } from "../../interfaces/TypeStore";
import { useLocation } from "react-router-dom";
import {useAppSelector } from "../../reduxer/index";
import CardItem from "../CardItem/CardItem"
import "./RelatedProducts.scss";
import React from "react";


export default function RelatedProducts() {
   
    const location = useLocation();
    const [listFavorite,setListFavorite]=React.useState<Item[]>([]);
    const store = useAppSelector(state => state.StoreItems );
    const auxData:DatePage={
        name_page:"",
        brands:[],
        rate:[],
        liastItem:[],
    }
    const lista  = (store.liastPages)? store.liastPages.filter((item: DatePage) => item.name_page === location.state)[0]:auxData;
    console.log(lista,"lista")

    const auxLista = (!lista?.liastItem)
        ?[]
        :((lista?.liastItem.length>=4)?lista?.liastItem.slice(0,4):[]);
        console.log(auxLista)
      
    return(
        <div className="related-products">
            <h2>Nuestros Productos Más Vendidos</h2>
            <div className="grid-related-products">
            {
                auxLista.map((item:Item) => {
                    return <CardItem key={item.id} item={item} listFavorite={listFavorite} setListFavorite={setListFavorite}/>
                 })
            }
            </div>
        </div>
    )
}