export const price_reducer=(value:number,price:number)=>{
    return price-(price*(value/100));
}