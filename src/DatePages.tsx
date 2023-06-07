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
        brands:["Honda","Yamaha","Ducati","Harley Davidson"],
        rate:[1,10000],
        liastItem:[
            {
                id:99977778,
                name:"2022 Harley-Davidson® Fat Bob® 114 Black",
                sales:10,
                price:6556,
                review_number:5,
                average_review:"3",
                half_payment:"paypal",
                brand:"Harley Davidson",
                images:[
                  "https://cdn.room58.com/2023/01/10/24106a33e1d40837e899bc0855a35798_38086e80a46ab42a.png",
                  "https://cdn.room58.com/2023/01/10/24106a33e1d40837e899bc0855a35798_38086e80a46ab42a.png"
                ],
                  details:{
                      maker:"Honda",
                      product_weight:"300g",
                      dimensions:"320 x 480",
                      Country_of_origin:"Corea",
                      model_number:"5",
                      color:"white",
                      memory:"",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      comments_review:[]
                  }
              },
            {
                id:65678878,
                name:"2022 Harley-Davidson® Fat Bob® 114 Black",
                sales:10,
                price:5556,
                review_number:5,
                average_review:"3",
                half_payment:"paypal",
                brand:"Harley Davidson",
                images:[
                  "https://cdn.room58.com/2023/01/10/24106a33e1d40837e899bc0855a35798_38086e80a46ab42a.png",
                  "https://cdn.room58.com/2023/01/10/24106a33e1d40837e899bc0855a35798_38086e80a46ab42a.png"
                ],
                  details:{
                      maker:"Honda",
                      product_weight:"300g",
                      dimensions:"320 x 480",
                      Country_of_origin:"Corea",
                      model_number:"5",
                      color:"white",
                      memory:"",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      comments_review:[]
                  }
              },
            {
                id:65677798,
                name:"2022 Harley-Davidson® Fat Bob® 114 Black",
                sales:10,
                price:4556,
                review_number:5,
                average_review:"3",
                half_payment:"paypal",
                brand:"Harley Davidson",
                images:[
                  "https://cdn.room58.com/2023/01/10/4d2596f5203aae086db4ad02dd58ae5b_8d38a6da76a5a3c5.png",
                  "https://cdn.room58.com/2023/01/10/4d2596f5203aae086db4ad02dd58ae5b_8d38a6da76a5a3c5.png"
                ],
                  details:{
                      maker:"Honda",
                      product_weight:"300g",
                      dimensions:"320 x 480",
                      Country_of_origin:"Corea",
                      model_number:"5",
                      color:"white",
                      memory:"",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      comments_review:[]
                  }
              },
            {
              id:6561515,
              name:"Motocicleta Honda 2021",
              sales:10,
              price:4556,
              review_number:4,
              average_review:"3",
              half_payment:"paypal",
              brand:"Honda",
              images:[
                "https://www.motonline.com.br/noticia/wp-content/uploads/2021/11/2021-rebel-500-gallery-05-2400xauto-800x420.jpg",
                "https://www.motonline.com.br/noticia/wp-content/uploads/2021/11/2021-rebel-500-gallery-05-2400xauto-800x420.jpg"
              ],
                details:{
                    maker:"Honda",
                    product_weight:"300g",
                    dimensions:"320 x 480",
                    Country_of_origin:"Corea",
                    model_number:"5",
                    color:"white",
                    memory:"",
                    material:"Aluminio",
                    quantity_feet:"1",
                    special_characteristics:"Ninguna",
                    included_components:"",
                    comments_review:[]
                }
            },
            {
                id:65615159,
                name:"Motocicleta Honda 2021",
                sales:30,
                price:5556,
                review_number:2,
                average_review:"3",
                half_payment:"paypal",
                brand:"Honda",
                images:[
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/10/moto-para-viajar-nova-honda-nt-1100-6.jpg",
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/10/moto-para-viajar-nova-honda-nt-1100-6.jpg"
                ],
                  details:{
                      maker:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      model_number:"5",
                      color:"white",
                      memory:"",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      comments_review:[]
                  }
            },
            {
                id:75651579,
                name:"Motocicleta Honda 2021",
                sales:5,
                price:10556,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Honda",
                images:[
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/08/honda-cb-200-x-1.png",
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/08/honda-cb-200-x-1.png"
                ],
                  details:{
                      maker:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      model_number:"5",
                      color:"white",
                      memory:"",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      comments_review:[]
                  }
            },
            {
                id:95651579,
                name:"Motocicleta Honda 2021",
                sales:14,
                price:1056,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Honda",
                images:[
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/08/honda-cb-200-x-1.png",
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/08/honda-cb-200-x-1.png"
                ],
                  details:{
                      maker:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      model_number:"5",
                      color:"white",
                      memory:"",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      comments_review:[]
                  }
            },
            {
                id:88651579,
                name:"Motocicleta Honda 2021",
                sales:14,
                price:10056,
                review_number:0,
                average_review:"3",
                half_payment:"paypal",
                brand:"Honda",
                images:[
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/08/honda-cb-200-x-1.png",
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/08/honda-cb-200-x-1.png"
                ],
                  details:{
                      maker:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      model_number:"5",
                      color:"white",
                      memory:"",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      comments_review:[]
                  }
            },
            {
                id:75615159,
                name:"Motocicleta Honda 2021",
                sales:30,
                price:5556,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Honda",
                images:[
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/10/moto-para-viajar-nova-honda-nt-1100-6.jpg",
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/10/moto-para-viajar-nova-honda-nt-1100-6.jpg"
                ],
                  details:{
                      maker:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      model_number:"5",
                      color:"white",
                      memory:"",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      comments_review:[]
                  }
            },
            {
                id:75625159,
                name:"Yamaha Xtz 125cc 2023",
                sales:30,
                price:5556,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Yamaha",
                images:[
                  "https://http2.mlstatic.com/D_NQ_NP_817737-MLV54151941646_032023-O.webp",
                  "https://http2.mlstatic.com/D_NQ_NP_817737-MLV54151941646_032023-O.webp"
                ],
                  details:{
                      maker:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      model_number:"5",
                      color:"white",
                      memory:"",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      comments_review:[]
                  }
            },
            {
                id:97777159,
                name:"Yamaha Xtz 125cc 2022",
                sales:30,
                price:6556,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Yamaha",
                images:[
                  "https://http2.mlstatic.com/D_NQ_NP_2X_819508-MLV53688585552_022023-F.webp",
                  "https://http2.mlstatic.com/D_NQ_NP_2X_819508-MLV53688585552_022023-F.webp"
                ],
                  details:{
                      maker:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      model_number:"5",
                      color:"white",
                      memory:"",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      comments_review:[]
                  }
            },
            {
                id:77775159,
                name:"Yamaha Xtz 125cc 2022",
                sales:30,
                price:6556,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Yamaha",
                images:[
                  "https://http2.mlstatic.com/D_NQ_NP_2X_819508-MLV53688585552_022023-F.webp",
                  "https://http2.mlstatic.com/D_NQ_NP_2X_819508-MLV53688585552_022023-F.webp"
                ],
                  details:{
                      maker:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      model_number:"5",
                      color:"white",
                      memory:"",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      comments_review:[]
                  }
            },
            {
                id:99665159,
                name:"Ducati Panigale V4 2022",
                sales:30,
                price:6556,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Ducati",
                images:[
                  "https://motos-b60.kxcdn.com/sites/default/files/ducati-panigale-v4-2022.jpg",
                  "https://motos-b60.kxcdn.com/sites/default/files/ducati-panigale-v4-2022.jpg"
                ],
                  details:{
                      maker:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      model_number:"5",
                      color:"white",
                      memory:"",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      comments_review:[]
                  }
            },
            {
                id:99825188,
                name:"Ducati Panigale V4 2022",
                sales:20,
                price:6556,
                review_number:3,
                average_review:"3",
                half_payment:"paypal",
                brand:"Ducati",
                images:[
                  "https://motos-b60.kxcdn.com/sites/default/files/ducati-panigale-v4-2022.jpg",
                  "https://motos-b60.kxcdn.com/sites/default/files/ducati-panigale-v4-2022.jpg"
                ],
                  details:{
                      maker:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      model_number:"5",
                      color:"white",
                      memory:"",
                      material:"Aluminio",
                      quantity_feet:"1",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      comments_review:[]
                  }
            },
            {
                id:99825889,
                name:"Ducati Panigale V4 2020",
                sales:10,
                price:6556,
                review_number:2,
                average_review:"3",
                half_payment:"paypal",
                brand:"Ducati",
                images:[
                  "https://motos-b60.kxcdn.com/sites/default/files/ducati-panigale-v4-2022.jpg",
                  "https://motos-b60.kxcdn.com/sites/default/files/ducati-panigale-v4-2022.jpg"
                ],
                  details:{
                      maker:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      model_number:"5",
                      color:"white",
                      memory:"",
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