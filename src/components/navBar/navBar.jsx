import UlLista from "./UlNav/Ulista";
import CartWidget from "./cartWidget/cartWidget";
import Divlogo from "./DivLogo/Divlogo";
import { itemsCategory } from "../../Helpers/Helpers";

export default function NavBar() {

    return (
        <nav className="navB" >
            <div className="navBar" id="navBar">
                <Divlogo />
                <UlLista itemsCategory={itemsCategory} />
                <CartWidget />
            </div>
        </nav>
    );
}

