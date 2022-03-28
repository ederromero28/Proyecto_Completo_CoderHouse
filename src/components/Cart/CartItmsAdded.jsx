import { useContext } from "react"
import { Link } from "react-router-dom";
import { CarrrContext } from "../../Context/CartContext"
import { pricDesOrNot, formatAPesCol, priceShoppIsMore3Millon } from "../../Helpers/Helpers";



export default function CartItmsAdded({ productsToAdd }) {

    const { removeItem, clear, changQtyAument, changQtyDismin, priceShhop } = useContext(CarrrContext)
    let diferenciaDesc = 0.05
    let IVA = 0.19;
    let valorMenosIva = 0.81

    return (
        <>
            <h5>Resumen de tus productos</h5>
            <div className="ctnPruductAddedPrinc">
                <div className="ctnPruductAddedSec">
                    {productsToAdd.map(itm =>
                        <div key={itm.id} className="ctnitemsMapAdded">
                            <div className="divCtnImgProduct">
                                <img src={itm.img} alt="" />
                            </div>
                            <div className="divCodigoProducto">
                                <p>Código: {itm.id}</p>
                                <h4>{itm.title.substring(0, 30)}</h4>
                                <button onClick={() => removeItem(itm.id)} className="btnElimnItem" >Eliminar</button>
                            </div>
                            <div className="ctnPricebefNow">
                                <span className="spanPriceBefWhitoutDesc">Antes: ${formatAPesCol(Math.trunc(itm.price * 1.35))} </span>
                                <p>${formatAPesCol(itm.price)} Hoy</p>
                            </div>
                            <div className="ctnQuantyAndBtnsAdd">
                                <p>Cantidad:</p>
                                <div className="ctnBtnAddInCart">
                                    <div>
                                        <button className="btnAddInCartItmAdded" onClick={() => changQtyDismin(itm.id)} disabled={itm.quanty === 1 && true}>-</button>
                                    </div>
                                    <span>{itm.quanty}</span>
                                    <div>
                                        <button className="btnAddInCartItmAdded" onClick={() => changQtyAument(itm.id)} disabled={itm.quanty === itm.onStock && true} >+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="ctnButtonsMethEnvio">
                        <span>Método de envio</span>
                        <label htmlFor="envioGratis">
                            <input type="radio" id="envioGratis" name={"envio"} value="envio gratis" defaultChecked /> Envio gratis
                        </label>
                        <label htmlFor="envioGratis">
                            <input type="radio" id="envioGratis" name={"envio"} value="recoger en tienda" /> Recoger en tienda
                        </label>
                    </div>
                </div>
                <div className="ctnResumenCompra">
                    <h6>Mi carrito</h6>
                    <div className="divResumenCompra">
                        {priceShoppIsMore3Millon({ price: priceShhop }) && <i>Descuentos en esta compra: 5% 😀</i>}
                        <div>
                            <p>Subtotal: </p>
                            <span>${formatAPesCol(priceShhop * valorMenosIva)}</span>
                        </div>
                        <div>
                            <p>Envio: </p>
                            <span>$ 0</span>
                        </div>
                        <div>
                            <p>IVA: $</p>
                            <span>{formatAPesCol(priceShhop * IVA)}</span>
                        </div>
                        {priceShoppIsMore3Millon({ price: priceShhop }) &&
                            <div>
                                <p>Tu descuento: $ </p>
                                <span>{formatAPesCol(priceShhop * diferenciaDesc)}</span>
                            </div>
                        }
                        <div>
                            <p className="totalP">TOTAL: $</p>
                            <span className="totalNumSpan">{formatAPesCol(pricDesOrNot({ pric: priceShhop }))}</span>
                        </div>
                    </div>
                    <div className="ctnBtnIrPagar">
                        <Link className="btnIrPagar" to={"/checkout"} >Ir a pagar</Link>
                    </div>
                </div>
            </div>
            <div className="ctnBtnClearCart">
                <button className="btnClearCart" onClick={() => clear()} >Eliminar todo</button>
            </div>
        </>
    )
}