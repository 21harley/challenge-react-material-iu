import "./CardItem.scss";
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import {Item} from "../../interfaces/TypeStore";
import { useAppDispatch } from "../../reduxer";
import {setItemsCardSlice} from "../../reduxer/slice/CardItemDetail/CardItemDetail";
import { price_reducer } from "../../tools/functions";

// eslint-disable-next-line @typescript-eslint/ban-types
export default function CardItem({item,listFavorite,setListFavorite}: {item:Item,listFavorite:Item[],setListFavorite:Function}){
    const dispatch = useAppDispatch();

    const [isFavorite, setIsFavorite] = useState(false);

    const hanlfleFavorite = () => {
        setIsFavorite(!isFavorite);
        (!isFavorite)
        ?setListFavorite([...listFavorite,item])
        :setListFavorite([...listFavorite.filter((itemList)=>{return itemList.id!==item.id})]);
    }
    
    const detectClickCard=(e:React.MouseEvent<HTMLDivElement,MouseEvent>)=>{
        const classNames = [
            "button-buy",
            "title-item-card",
            "card-item-image"
          ];
        const target = event?.target as HTMLInputElement;
        const value=target.classList;
        if([...value].some((item)=>classNames.includes(item))){
           dispatch(setItemsCardSlice({item:item,status:"Modal"}));
        } 
    }
    return(
    <Card  className="card-item" onClick={(e)=>{detectClickCard(e)}}>
        <CardMedia
          sx={{ height: 340 }}
          image={item.images[0]}
          title={item.name}
          className="card-item-image"
        />
        <button className="button-link-item" onClick={()=>hanlfleFavorite()}>
            {isFavorite ? <FavoriteIcon className="favorite-color"/> : <FavoriteBorderIcon className="favorite-color-solid"/>}
        </button>
        <div className="card-title-reduction">
            <p>{item.sales}%</p>
        </div>
        <CardContent className="card-custom-container">
          <div className="card-custom-grid">
              <div className="card-custom-flex">
                  <h4 className="title-item-card" title={item.name}>{item.name}</h4>
                  <div>
                    <Rating  className="star-color" name="read-only" value={item.review_number} readOnly />
                  </div>
                  <div className="list-style-none card-item-text-date">
                        <p>$ 120 p/semana <br/> o $ 520 p/mes </p>
                  </div>
              </div>
              <div className="card-custom-flex ">
                    <h3>${price_reducer(item.sales ,item.price)}</h3>
                    <span>${item.price}</span>
                    <Button variant="contained" className="button-buy">lo quiero</Button>
              </div>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    )
}