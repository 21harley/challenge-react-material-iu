import {Item} from "../../../interfaces/TypeStore"

export interface initState{
    status:string,
    detailItem?:Item,
 }
 
 export const initialState:initState = {
    status:"",
    detailItem:{
        id:-1,
        name:"",
        sales:-1,
        price:-1,
        review_number:-1,
        average_review:"",
        half_payment:"",
        brand:"",
        images:[],
        details:{
            maker:"",
            product_weight:"",
            memory:"",
            dimensions:"",
            Country_of_origin:"",
            model_number:"",
            color:"",
            material:"",
            quantity_feet:"",
            special_characteristics:"",
            included_components:"",
            comments_review:[],
        },
    },
 }
 
