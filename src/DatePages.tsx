import { DatePage } from "./interfaces/TypeStore";
/*
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
    color:string,
    material:string,
    quantity_feet:string,
    special_characteristics:string,
    included_components:string,
    comments_review:Comments_Review[],
}

export type Item={
    id:string,
    name:string,
    price:string,
    review_number:number,
    average_review:string,
    half_payment:string,
    brand:string,
    images:string[],
    details:Detail,
}

*/

const pages:DatePage[]=[
    {
        name_page:"Celulares",
        brands:["Samsung","Motorola","SONY"],
        rate:[1,10000],
        liastItem:[
            {
              id:656156415,
              name:"San50",
              sales:10,
              price:456.6,
              review_number:5,
              average_review:"3",
              half_payment:"paypal",
              brand:"Motorola",
              images:[
                "https://images.ctfassets.net/tzu1pd8bi7co/2a6Tb0yT4pt59dLAGdSwR8/f87fb0645a5b29ec86ebe8ba43bb98db/A34_5G_AWESOME_GRAPHITE_FRONT_2.jpg?w=400",
                "https://images.ctfassets.net/tzu1pd8bi7co/2a6Tb0yT4pt59dLAGdSwR8/f87fb0645a5b29ec86ebe8ba43bb98db/A34_5G_AWESOME_GRAPHITE_FRONT_2.jpg?w=400"
              ],
                details:{
                    maker:"Motorola",
                    product_weight:"300g",
                    dimensions:"320 x 480",
                    Country_of_origin:"China",
                    model_number:"5",
                    color:"white",
                    memory:"4GB",
                    material:"Aluminio",
                    quantity_feet:"1",
                    special_characteristics:"Ninguna",
                    included_components:"Cargador",
                    comments_review:[
                        {
                            id:"1",
                            username:"Juan",
                            comment:"Muy buen producto",
                            punctuation:5,
                        },
                        {
                            id:"2",
                            username:"Maria",
                            comment:"Muy buen producto",
                            punctuation:5,
                        },
                        {
                            id:"3",
                            username:"John",
                            comment:"Muy buen producto",
                            punctuation:4,
                        },
                    ]
                }
            },
            {
                id:8564185,
                name:"San50",
                sales:25,
                price:4999,
                review_number:3,
                average_review:"3",
                half_payment:"paypal",
                brand:"Samsung",
                images:[
                  "https://images.ctfassets.net/tzu1pd8bi7co/2a6Tb0yT4pt59dLAGdSwR8/f87fb0645a5b29ec86ebe8ba43bb98db/A34_5G_AWESOME_GRAPHITE_FRONT_2.jpg?w=400",
                  "https://images.ctfassets.net/tzu1pd8bi7co/2a6Tb0yT4pt59dLAGdSwR8/f87fb0645a5b29ec86ebe8ba43bb98db/A34_5G_AWESOME_GRAPHITE_FRONT_2.jpg?w=400"
                ],
                  details:{
                      maker:"Samsung",
                      product_weight:"300g",
                      dimensions:"320 x 480",
                      Country_of_origin:"China",
                      model_number:"5",
                      color:"white",
                      memory:"4GB",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"Cargador",
                      comments_review:[
                          {
                              id:"1",
                              username:"Juan",
                              comment:"Muy buen producto",
                              punctuation:5,
                          },
                          {
                              id:"2",
                              username:"Maria",
                              comment:"Muy buen producto",
                              punctuation:5,
                          },
                          {
                              id:"3",
                              username:"John",
                              comment:"Muy buen producto",
                              punctuation:4,
                          },
                      ]
                  }
            },
            {
                id:75461585,
                name:"San50",
                sales:12,
                price:6000,
                review_number:5,
                average_review:"3",
                half_payment:"paypal",
                brand:"SONY",
                images:[
                  "https://images.ctfassets.net/tzu1pd8bi7co/2a6Tb0yT4pt59dLAGdSwR8/f87fb0645a5b29ec86ebe8ba43bb98db/A34_5G_AWESOME_GRAPHITE_FRONT_2.jpg?w=400",
                  "https://images.ctfassets.net/tzu1pd8bi7co/2a6Tb0yT4pt59dLAGdSwR8/f87fb0645a5b29ec86ebe8ba43bb98db/A34_5G_AWESOME_GRAPHITE_FRONT_2.jpg?w=400"
                ],
                  details:{
                      maker:"SONY",
                      product_weight:"300g",
                      dimensions:"320 x 480",
                      Country_of_origin:"China",
                      model_number:"5",
                      color:"white",
                      memory:"4GB",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"Cargador",
                      comments_review:[
                          {
                              id:"1",
                              username:"Juan",
                              comment:"Muy buen producto",
                              punctuation:5,
                          },
                          {
                              id:"2",
                              username:"Maria",
                              comment:"Muy buen producto",
                              punctuation:5,
                          },
                          {
                              id:"3",
                              username:"John",
                              comment:"Muy buen producto",
                              punctuation:4,
                          },
                      ]
                  }
            },
            {
                id:65614566,
                name:"San50",
                sales:5,
                price:8000,
                review_number:2,
                average_review:"3",
                half_payment:"paypal",
                brand:"Samsung",
                images:[
                  "https://images.ctfassets.net/tzu1pd8bi7co/2a6Tb0yT4pt59dLAGdSwR8/f87fb0645a5b29ec86ebe8ba43bb98db/A34_5G_AWESOME_GRAPHITE_FRONT_2.jpg?w=400",
                  "https://images.ctfassets.net/tzu1pd8bi7co/2a6Tb0yT4pt59dLAGdSwR8/f87fb0645a5b29ec86ebe8ba43bb98db/A34_5G_AWESOME_GRAPHITE_FRONT_2.jpg?w=400"
                ],
                  details:{
                      maker:"Samsung",
                      product_weight:"300g",
                      dimensions:"320 x 480",
                      Country_of_origin:"China",
                      model_number:"5",
                      color:"white",
                      memory:"4GB",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"Cargador",
                      comments_review:[
                          {
                              id:"1",
                              username:"Juan",
                              comment:"Muy buen producto",
                              punctuation:5,
                          },
                          {
                              id:"2",
                              username:"Maria",
                              comment:"Muy buen producto",
                              punctuation:5,
                          },
                          {
                              id:"3",
                              username:"John",
                              comment:"Muy buen producto",
                              punctuation:4,
                          },
                      ]
                  }
            },
            {
                id:65445615,
                name:"San50",
                sales:10,
                price:7000,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Samsung",
                images:[
                  "https://images.ctfassets.net/tzu1pd8bi7co/2a6Tb0yT4pt59dLAGdSwR8/f87fb0645a5b29ec86ebe8ba43bb98db/A34_5G_AWESOME_GRAPHITE_FRONT_2.jpg?w=400",
                  "https://images.ctfassets.net/tzu1pd8bi7co/2a6Tb0yT4pt59dLAGdSwR8/f87fb0645a5b29ec86ebe8ba43bb98db/A34_5G_AWESOME_GRAPHITE_FRONT_2.jpg?w=400"
                ],
                  details:{
                      maker:"Samsung",
                      product_weight:"300g",
                      dimensions:"320 x 480",
                      Country_of_origin:"China",
                      model_number:"5",
                      color:"white",
                      memory:"4GB",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"Cargador",
                      comments_review:[
                          {
                              id:"1",
                              username:"Juan",
                              comment:"Muy buen producto",
                              punctuation:5,
                          },
                          {
                              id:"2",
                              username:"Maria",
                              comment:"Muy buen producto",
                              punctuation:5,
                          },
                          {
                              id:"3",
                              username:"John",
                              comment:"Muy buen producto",
                              punctuation:4,
                          },
                      ]
                  }
            },
            {
                id:8861565,
                name:"San50",
                sales:10,
                price:7000,
                review_number:5,
                average_review:"3",
                half_payment:"paypal",
                brand:"Samsung",
                images:[
                  "https://images.ctfassets.net/tzu1pd8bi7co/2a6Tb0yT4pt59dLAGdSwR8/f87fb0645a5b29ec86ebe8ba43bb98db/A34_5G_AWESOME_GRAPHITE_FRONT_2.jpg?w=400",
                  "https://images.ctfassets.net/tzu1pd8bi7co/2a6Tb0yT4pt59dLAGdSwR8/f87fb0645a5b29ec86ebe8ba43bb98db/A34_5G_AWESOME_GRAPHITE_FRONT_2.jpg?w=400"
                ],
                  details:{
                      maker:"Samsung",
                      product_weight:"300g",
                      dimensions:"320 x 480",
                      Country_of_origin:"China",
                      model_number:"5",
                      color:"white",
                      memory:"4GB",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"Cargador",
                      comments_review:[
                          {
                              id:"1",
                              username:"Juan",
                              comment:"Muy buen producto",
                              punctuation:5,
                          },
                          {
                              id:"2",
                              username:"Maria",
                              comment:"Muy buen producto",
                              punctuation:5,
                          },
                          {
                              id:"3",
                              username:"John",
                              comment:"Muy buen producto",
                              punctuation:4,
                          },
                      ]
                  }
            },
        ]
    },
    {
        name_page:"Motocicletas",
        brands:["Honda"],
        rate:[1,6000],
        liastItem:[
            {
              id:6561515,
              name:"Motocicleta Honda 2021",
              sales:10,
              price:4556,
              review_number:0,
              average_review:"3",
              half_payment:"paypal",
              brand:"Honda",
              images:[
                "https://images.ctfassets.net/tzu1pd8bi7co/2a6Tb0yT4pt59dLAGdSwR8/f87fb0645a5b29ec86ebe8ba43bb98db/A34_5G_AWESOME_GRAPHITE_FRONT_2.jpg?w=400",
                "https://images.ctfassets.net/tzu1pd8bi7co/2a6Tb0yT4pt59dLAGdSwR8/f87fb0645a5b29ec86ebe8ba43bb98db/A34_5G_AWESOME_GRAPHITE_FRONT_2.jpg?w=400"
              ],
                details:{
                    maker:"Honda",
                    product_weight:"300g",
                    dimensions:"320 x 480",
                    Country_of_origin:"Corea",
                    model_number:"5",
                    color:"white",
                    memory:"4GB",
                    material:"Aluminio",
                    quantity_feet:"1",
                    special_characteristics:"Ninguna",
                    included_components:"",
                    comments_review:[]
                }
            },
        ]
    },
]
export default pages;