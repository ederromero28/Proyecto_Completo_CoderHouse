import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarrrContext } from "../../../Context/CartContext";
import imgCarShop from "../../../assets/img/shoppingIcon.png"

export default function CartWidget() {

    const { cartItm } = useContext(CarrrContext)
    let qty = cartItm.map((qt) => qt.quanty).reduce((accumulator, curr) => accumulator + curr, 0)

    return (
        <>
            <Link to={"/cart"} className={"styleDivImgshop"}>
                <img src={imgCarShop} alt="carShop" />
                <button className="numBtnCartWidget">{qty ? (qty === 0 ? "" : qty) : ""}</button>
            </Link>
        </>
    );
}