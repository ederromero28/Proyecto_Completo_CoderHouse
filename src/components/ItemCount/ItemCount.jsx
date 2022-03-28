
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CarrrContext } from "../../Context/CartContext"

export default function ItemCount({ item, stock, initial }) {
    // contador
    const [contador, setContador] = useState(1)

    const { addCart, isInCart } = useContext(CarrrContext)

    // funciones add (incrementar), rest (decrementar)
    const add = () => {
        setContador(contador + 1)
        contador === stock && setContador(stock)
    }
    const rest = () => {
        setContador(contador - 1)
        contador === initial && setContador(initial)
    }

    return (
        <>
            {!isInCart(item.id) && <div className="divContador">
                {stock > 0 && <div className="divBtnAddSubst">
                    <button className="btnDismin" onClick={() => rest()} disabled={contador === initial ? true : false} >-</button>
                    <span className="spanCtnNumber">{stock === 0 ? stock : contador}</span>
                    <button className="btnAument" onClick={() => add()} disabled={contador === stock ? true : false}>+</button>
                </div>}
                <div>
                    <button className="btnAddtocart" onClick={() => addCart(item, contador, item.price * contador)} disabled={stock === 0 ? true : false}>{stock === 0 ? "sin stock" : "agregar al carrito"}</button>
                </div>
            </div>}
            {isInCart(item.id) && <div className="btnFinCompraDiv">
                <button className="btnFinCompra" ><Link to={"/cart"} className="adCarr" >Ir al carrito a finalizar compra ▸</Link></button>
                <button className="btbContinueShop" ><Link to={"/categ/todo"} className="btbContinueShoplink" >Seguir comprando</Link></button>
            </div>}
        </>
    )
}