import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import GalaxyA02Webp from "./../../assets/img/Galaxy-A02.webp";
 import InfinixHOT10Webp from "./../../assets/img/Infinix-HOT-10.webp";
 import Redmi from "./../../assets/img/redmi-9a-2gb-ram-32gb-rom-sky-blue.webp";
import "./CarouselComponent.scss"

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <h2>Ofertas y promociones</h2>
            <Carousel   useKeyboardArrows showArrows={true} showThumbs={false}>
                <div>
                    <img src={GalaxyA02Webp} />
                </div>
                <div>
                    <img src={InfinixHOT10Webp} />
                </div>
                <div>
                    <img src={Redmi} />
                </div>
            </Carousel>
        </div>
    );
}