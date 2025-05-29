import { createRoot } from "react-dom/client";
import FrameworkList from "./FrameworkList";
import './tailwind.css';
import Respon from "./responsiveDesign";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ProductList from "./ProductList";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <FrameworkListSearchFilter/>
            <Respon/>
            <ProductList/>
        </div>
    )