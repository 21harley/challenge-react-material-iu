type comments_review={
    id:string,
    username:string,
    comment:string,
    punctuation:number,
}

type detail={
    id_product:string,
    maker:string,
    product_weight:string,
    dimensions:string,
    Country_of_origin:string,
    model_number:string,
    color:string,
    material:string,
    quantity_feet:string,
    special_characteristics:string,
    included_components:string,
    comments_review:comments_review[],
}

type Item={
    id_product:string,
    name:string,
    price:string,
    review_number:number,
    average_review:string,
    half_payment:string,
    brand:string,
    images:string[],
    details:detail,
}

export interface initState{
   liastItem?:Item[],
}

export const initialState:initState = {
    liastItem:[],
}
/*
 name:"",
    price:"",
    review_number:0,
    average_review:"",
    half_payment:"",
    brand:"",
    images:[],
    details:{
        id_product:"",
        maker:"",
        product_weight:"",
        dimensions:"",
        Country_of_origin:"",
        model_number:"",
        color:"",
        material:"",
        quantity_feet:"",
        special_characteristics:"",
        included_components:"",
        comments_review:[],
    }

*/