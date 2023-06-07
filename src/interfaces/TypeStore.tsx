export type ControlBarType={
    brand:string[],
    rate:number[],
    review_number:number,
    isFavorite:string
}

export type Comments_Review={
    id:string,
    username:string,
    comment:string,
    punctuation:number,
}

export type Detail={
    maker:string,
    product_weight:string,
    dimensions:string,
    Country_of_origin:string,
    model_number:string,
    memory:string,
    color:string,
    material:string,
    quantity_feet:string,
    special_characteristics:string,
    included_components:string,
    comments_review:Comments_Review[],
}

export type Item={
    id:number,
    name:string,
    sales:number,
    price:number,
    review_number:number,
    average_review:string,
    half_payment:string,
    brand:string,
    images:string[],
    details:Detail,
}

export type DatePage={
    name_page:string,
    brands:string[],
    rate:number[],
    liastItem?:Item[],
}