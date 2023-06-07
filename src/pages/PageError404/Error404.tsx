import { TemplatePage } from "../template/TemplatePage/TemplatePage"
import "./Error404.scss"
export default function Error404() {
    return(
        <TemplatePage>
            <div className="ErrorPages">
               <h1>404</h1>
               <h2>Page not found</h2>
            </div>
        </TemplatePage>
    )
}