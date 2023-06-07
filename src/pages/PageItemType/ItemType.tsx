import { TemplatePage } from "../template/TemplatePage/TemplatePage"
import { useLocation } from "react-router-dom";
import ViewItems from "../../components/ViewItems/ViewItems";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
export default function ItemType() {
    const location = useLocation();
    console.log(location.state);
    return(
        <TemplatePage>
            <ViewItems/>
            <CarouselComponent/>
            <RelatedProducts/>
        </TemplatePage>
    )
}